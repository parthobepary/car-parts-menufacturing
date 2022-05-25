import React from "react";

const AllProducts = ({ product, refetch }) => {
  const { name, img, _id } = product;
  

  const deleteProducts = (id) => {
      fetch(`http://localhost:5000/tools/${id}`,{
          method:"DELETE",
          headers:{
              "content-type": "application/json"
          }
      })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        refetch();
      })
  }

  return (
    <tr>
    <td><img className="w-3/4 rounded-full" src={img} alt="" /></td>
    <td> {name}</td>
    <td> {_id}</td>
    <td>
      <button className="btn btn-xs text-red-600">Edit</button>
    </td>
    <td>
      <button onClick={()=>deleteProducts(_id)} className="btn btn-xs text-red-600">Delete</button>
    </td>
  </tr>
  );
};

export default AllProducts;
