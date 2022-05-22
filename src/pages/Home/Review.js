import React from "react";

const Review = ({ review: { img, name, discription, rating } }) => {
  return (
    <div className="w-3/4 mx-auto ">
      <div class="card card-side bg-white shadow-xl m-4 px-3 py-4 grid sm:grid-cols-1 md:grid-cols-2">
        <figure>
          <img className="w-32 h-32 rounded-full" src={img} alt="user" />
        </figure>
        <div class="card-body">
          <h2 class="card-title">{name}</h2>
          <p className="text-left">{discription}</p>
          <div class="rating rating-lg rating-half flex items-center"> 
          <h1 className="text-3xl font-bold">{rating}</h1>
            <input type="radio" name="rating-10"class="rating-hidden" />
            <input
              type="radio"
              name="rating-10"
              class="bg-green-500 mask mask-star-2 mask-half-1"
            />
            <input
              type="radio"
              name="rating-10"
              class="bg-green-500 mask mask-star-2 mask-half-2"
            />
            <input
              type="radio"
              name="rating-8"
              class="bg-green-500 mask mask-star-2 mask-half-1"
              checked
            />
            <input
              type="radio"
              name="rating-10"
              class="bg-green-500 mask mask-star-2 mask-half-2"
            />
            <input
              type="radio"
              name="rating-10"
              class="bg-green-500 mask mask-star-2 mask-half-1"
            />
            <input
              type="radio"
              name="rating-10"
              class="bg-green-500 mask mask-star-2 mask-half-2"
            />
            <input
              type="radio"
              name="rating-10"
              class="bg-green-500 mask mask-star-2 mask-half-1"
            />
            <input
              type="radio"
              name="rating-10"
              class="bg-green-500 mask mask-star-2 mask-half-2"
            />
            <input
              type="radio"
              name="rating-10"
              class="bg-green-500 mask mask-star-2 mask-half-1"
            />
            <input
              type="radio"
              name="rating-10"
              class="bg-green-500 mask mask-star-2 mask-half-2"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;