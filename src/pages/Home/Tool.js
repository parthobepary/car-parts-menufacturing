import React from "react";
import { useNavigate } from "react-router-dom";
import Loading from "../Shared/Loading";

const Tool = ({ isLoading, tool }) => {
  const { _id, name, img, discription, availableQuentity, perunitPrice } = tool;
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
      <div className="card shadow-xl p-2 bg-slate-400 mx-auto">
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
            <p className="text-green-600 mr-4">Available: {availableQuentity}</p>
            <p>Per/Price: {perunitPrice}</p>
          </div>
          <div className="card-actions">
            <button
              onClick={() => navigatToModal(_id)}
              className="btn btn-primary px-20"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 mr-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
              purchase now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tool;
