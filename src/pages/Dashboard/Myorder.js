import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useQuery } from "react-query";
import auth from "../../firebase.init";
import Loading from "../Shared/Loading";
import Order from "./Order";

const Myorder = () => {
  const [user] = useAuthState(auth);

  const { data, isloading, refetch } = useQuery("review", () =>
    fetch(`http://localhost:5000/order/${user?.email}`,{
      method:"GET",
      headers:{
        "authorization": `Bearer ${localStorage.getItem('token')}`
      }
    }).then((res) =>
      res.json()
    )
  );
  if (isloading) {
    return <Loading></Loading>;
  }
  return (
    <div>
      {data?.map((d) => (
        <Order key={d._id} orders={d} refetch={refetch}></Order>
      ))}
    </div>
  );
};

export default Myorder;
