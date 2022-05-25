import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";

const Addproduct = () => {
  const [imgUrl, setImgUrl] = useState("");

  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    const review = {
      ...data,
      img: imgUrl,
    };
    fetch("http://localhost:5000/tools", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(review),
    });
    reset();
  };

  const handelImagUpload = (e) => {
    const image = e.target.files[0];

    const fromData = new FormData();
    fromData.set("image", image);
    axios
      .post(
        "https://api.imgbb.com/1/upload?key=79fd0b725c9bb9b85e875f16c38c1622",
        fromData
      )
      .then((res) => {
        setImgUrl(res.data.data.display_url);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  console.log(imgUrl);
  return (
    <div>
      <div className="mb-3 px-10">
        <h1 className="text-center text-3xl text-primary font-bold mb-10">
          Welcome to admin route
        </h1>
      </div>
      <div className="flex justify-center items-center">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="bg-yellow-300 w-1/2 rounded-lg p-4 text-center"
        >
          <input
            placeholder="your name"
            className="input input-bordered w-4/5 my-3"
            {...register("name")}
          />
          <br />
          <input
            placeholder="discription"
            className="input input-bordered w-4/5"
            {...register("discription")}
          />
          <br />
          <input
            placeholder="per unit price"
            className="input input-bordered w-4/5 my-3"
            {...register("perunitPrice")}
          />
          <br />
          <input
            placeholder="available quentity"
            className="input input-bordered w-4/5"
            {...register("availableQuentity")}
          />
          <br />
          <input
            className="input input-bordered w-4/5"
            type="file"
            {...register("img")}
            onChange={handelImagUpload}
          />
          <br />
          <input className="btn btn-primary w-3/5 mt-4" type="submit" />
        </form>
      </div>
    </div>
  );
};

export default Addproduct;
