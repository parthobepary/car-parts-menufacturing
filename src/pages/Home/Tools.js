import React from "react";
import { useQuery } from "react-query";
import Loading from "../Shared/Loading";
import Tool from "./Tool";

const Tools = () => {
  const { data, isLoading, refetch } = useQuery("tools", () =>
    fetch("http://localhost:5000/tools").then((res) => res.json())
  );
  if (isLoading) {
    return <Loading></Loading>;
  }
  return (
    <div>
      <div className="mb-10 px-20">
        <h1 className="text-3xl text-primary text-center font-bold mb-4">
          Our products
        </h1>
        <hr className="bg-purple-500 h-1" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
      >
        {data.map((d) => (
          <Tool key={d._id} tool={d} isLoading={isLoading}></Tool>
        ))}
      </div>
    </div>
  );
};

export default Tools;
