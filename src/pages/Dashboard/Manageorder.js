import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useQuery } from "react-query";
import auth from "../../firebase.init";
import Loading from "../Shared/Loading";
import Adminorder from "./Adminorder";

const Manageorder = () => {
  const [user] = useAuthState(auth);

  const { data, isloading, refetch } = useQuery("review", () =>
    fetch("https://rocky-fjord-46983.herokuapp.com/order").then((res) => res.json())
  );
  if (isloading) {
    return <Loading></Loading>;
  }
  console.log(data);
  return (
    <div>
      <div className="mb-3 px-10">
        <h1 className="text-center text-3xl text-primary font-bold mb-10">
          Welcome to admin route
        </h1>
      </div>
      <div>
          {
              data?.map(d=> <Adminorder key={d._id} order={d} refetch={refetch}></Adminorder>)
          }
      </div>
    </div>
  );
};

export default Manageorder;
