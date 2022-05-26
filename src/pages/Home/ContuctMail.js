import React from "react";
import { useForm } from "react-hook-form";
import img from "../../assets/img/contuct.jpg";

const ContuctMail = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <div>
      <h1 className="text-3xl text-primary my-20">
        Ask a question free / message us
      </h1>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <img className="rounded-lg" src={img} alt="" />
        </div>
        <div className="bg-slate-500 ml-10 rounded-lg p-3">
          <form
            className=" mt-40"
            onSubmit={handleSubmit(onSubmit)}
          >
            <input
            placeholder="enter email"
              type="email"
              className ="input input-bordered w-3/4"
              {...register("email")}
            />
            <br />
            <textarea placeholder="text area" className ="p-4 my-3 rounded-sm h-20 w-3/4" {...register("message")} />
            <br />
            <input className="btn btn-primary px-20" type="submit" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContuctMail;
