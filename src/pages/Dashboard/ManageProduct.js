import React from "react";
import { useQuery } from "react-query";
import Loading from "../Shared/Loading";
import AllProducts from "./AllProducts";

const ManageProduct = () => {
  const { data, isLoading, refetch } = useQuery("tools", () =>
    fetch("https://rocky-fjord-46983.herokuapp.com/tools").then((res) => res.json())
  );
  if (isLoading) {
    return <Loading></Loading>;
  }
  return (
    <div>
      <div className="mb-3 px-10">
        <h1 className="text-center text-3xl text-primary font-bold mb-10">
          Welcome to admin route
        </h1>
      </div>
      <div className="py-8">
        <div className="overflow-x-auto">
          <table className="table w-full">
            <thead>
              <tr>
                <th>Name</th>
                <th>Job</th>
                <th>Favorite Color</th>
                <th>Favorite Color</th>
              </tr>
            </thead>
            <tbody>
              {data.map((d) => (
                <AllProducts
                  key={d._id}
                  product={d}
                  refetch={refetch}
                ></AllProducts>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ManageProduct;
