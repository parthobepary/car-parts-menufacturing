import React from "react";

const Blogs = () => {
  return (
    <div className="my-20">
      <div className="grid grid-cols-1 md:grid-cols-3">
        <div className="m-3 p-2 bg-gray-600 rounded-lg text-white">
          <h1 className="font-bold">
            {" "}
            Q1: How will you improve the performance of a React Application?
          </h1>
          <p>
            Ans: Kepp commpunent where necessary, Windowing or list
            virtualization in React.Memoizing React components to prevent
            unnecessary re-renders
          </p>
        </div>
        <div className="m-3 p-2 bg-gray-600 rounded-lg text-white">
          <h1 className="font-bold">
            {" "}
            Q2: What are the different ways to manage a state in a React
            application?
          </h1>
          <p>Ans: There are many state to manage react application</p>

          <p> Local state, Server state, Golobal state, Url state </p>
        </div>
        <div className="m-3 p-2 bg-gray-600 rounded-lg text-white">
          <h1 className="font-bold">
            {" "}
            Q3: How does prototypical inheritance work?
          </h1>
          <p>
            Ans: Prototype-based programming is a style of object-oriented
            programming in which behaviour reuse (known as inheritance) is
            performed via a process of reusing existing objects that serve as
            prototypes
          </p>
        </div>
        <div className="m-3 p-2 bg-gray-600 rounded-lg text-white">
          <h1 className="font-bold">
            {" "}
            Q5: You have an array of products. Each product has a name, price,
            description, etc. How will you implement a search to find products
            by name?
          </h1>
          <p>
            Ans: A product description is the marketing copy that explains what
            a product is and why it’s worth purchasing. The purpose of a product
            description is to supply customers with important information about
            the features and benefits of the product so they’re compelled to buy
          </p>
        </div>
        <div className="m-3 p-2 bg-gray-600 rounded-lg text-white">
          <h1 className="font-bold">
            {" "}
            Q6: What is a unit test? Why should write unit tests?
          </h1>
          <p>
            Ans: Unit testing ensures that all code meets quality standards
            before it's deployed. This ensures a reliable engineering
            environment where quality is paramount. Over the course of the
            product development life cycle,
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
