import React from "react";
import { useQuery } from "react-query";
import Loading from "../Shared/Loading";
import Review from "./Review";

const Reviews = () => {
  const { data, isloading, refetch } = useQuery("review", () =>
    fetch("review.json").then((res) => res.json())
  );

  if (isloading) {
    return <Loading></Loading>;
  }
  console.log(data);
  return (
    <div>
      <div className="px-20 mb-10">
        <h2 className="text-primary text-3xl font-bold mb-2">Our Reviews</h2>
        <hr className="bg-purple-500 h-1" />
      </div>
      <div>
        {data?.map((d) => (
          <Review key={d._id} review={d}></Review>
        ))}
      </div>
    </div>
  );
};

export default Reviews;
