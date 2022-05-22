import React from "react";
import Loading from "../Shared/Loading";

const Tool = ({
  isLoading,
  tool: { name, img, discription, availableQuentity, perunitPrice },
}) => {
  if (isLoading) {
    return <Loading></Loading>;
  }
  return (
    <div>
      <div class="card w-96 shadow-xl p-2 bg-slate-400 mx-auto">
        <figure class="px-10 pt-10">
          <img src={img} alt="products" class="rounded-xl h-40 w-full" />
        </figure>
        <div class="card-body items-center text-center">
          <h2 class="card-title">{name}</h2>
          <p title={discription}>
            {discription.length > 200
              ? discription.slice(0, 100) + "..."
              : discription}
          </p>
          <div className="flex">
            <p className="text-warning mr-4">Available: {availableQuentity}</p>
            <p>Per/Price: {perunitPrice}</p>
          </div>
          <div class="card-actions">
            <button class="btn btn-primary px-20">purchase now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tool;
