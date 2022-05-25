import React from "react";

const Adminorder = ({refetch, order, order: { name, productName, quntity, _id, paid } }) => {
  const deleteOrder = (id) => {
    fetch(`https://rocky-fjord-46983.herokuapp.com/order/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        refetch();
      });
  };

  return (
    <div className="bg-gray-500 my-4 py-3 text-white rounded-lg flex px-6">
      <div className="flex justify-center items-center">
        <p>CustomarName: {name}</p>
        <p className="mx-3">ProductName: {productName}</p>
        <p className="mx-3">Quantity: {quntity}</p>
        <p>Id: {_id}</p>
      </div>
      <div>
        {paid? (<p className=" ml-6 text-green-400 font-bold">(Paid)</p>):(<button
          onClick={() => deleteOrder(_id)}
          className="btn btn-xs px-6 bg-red-600 ml-5"
        >
          delete
        </button>)}
      </div>
    </div>
  );
};

export default Adminorder;
