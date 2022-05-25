import React from "react";
import pallob from "../../assets/img/pallob .png";
import "../AllCss/protfolio.css";

const Aboutme = () => {
  return (
    <div className="bg-slate-400 mt-32">
      <div className="hero min-h-screen bg-base-200 px-32">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img src={pallob} className="max-w-sm rounded-lg shadow-2xl" alt="" />
          <div className=" text-left mr-32">
            <h1 className="text-5xl font-bold tracking-wider">PALLOB BISWAS</h1>
            <h1 className="text-2xl font-bold tracking-wider my-3">
              Fornt End Web Developer
            </h1>
            <p className="py-6">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur
              voluptas dolores dolore natus accusantium consectetur velit eos,
              illum harum ex explicabo! Quidem possimus doloribus suscipit sequi
              alias? Non earum accusantium nihil a dolor commodi nesciunt sunt
              velit itaque. Deleniti ullam est libero nulla aliquam iusto
              corporis sed, consequatur aut optio ab itaque mollitia sint
              recusandae quidem! Aliquid distinctio ut tenetur.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Aboutme;
