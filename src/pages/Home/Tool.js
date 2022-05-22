import React from "react";
import { useNavigate } from "react-router-dom";
import Loading from "../Shared/Loading";

const Tool = ({ isLoading, tool }) => {
  const  { _id, name, img, discription, availableQuentity, perunitPrice } = tool
  const navigated = useNavigate();

  if (isLoading) {
    return <Loading></Loading>;
  }

  const navigatToModal = (id) => {
    console.log(id);
    navigated(`/ordermodal/${id}`);
  };
  return (
    <div>
      <div className="card w-96 shadow-xl p-2 bg-slate-400 mx-auto">
        <figure className="px-10 pt-10">
          <img src={img} alt="products" className="rounded-xl h-40 w-full" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{name}</h2>
          <p title={discription}>
            {discription.length > 200
              ? discription.slice(0, 100) + "..."
              : discription}
          </p>
          <div className="flex">
            <p className="text-warning mr-4">Available: {availableQuentity}</p>
            <p>Per/Price: {perunitPrice}</p>
          </div>
          <div className="card-actions">
            <button
              onClick={() => navigatToModal(_id)}
              className="btn btn-primary px-20"
            >
              purchase now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tool;
