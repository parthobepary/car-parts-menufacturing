import React from "react";
import { useQuery } from "react-query";
import Loading from "../Shared/Loading";
import Alladmin from "./Alladmin";

const Makeadmin = () => {
  const { data, isloading, refetch } = useQuery("user", () =>
    fetch("https://rocky-fjord-46983.herokuapp.com/users").then((res) => res.json())
  );
  if (isloading) {
    return <Loading></Loading>;
  }
  return (
    <div>
      <h1 className="text-center text-3xl text-primary font-bold mb-3">
        Welcome to admin route
      </h1>
      <div className="mt-10">
        <div className="overflow-x-auto">
          <table className="table w-full">
            <thead>
              <tr>
                <th>Name</th>
                <th>Job</th>
                <th>Favorite Color</th>
              </tr>
            </thead>
            <tbody>
              {data?.map((d) => (
                <Alladmin key={d._id} user={d} refetch={refetch}></Alladmin>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Makeadmin;
