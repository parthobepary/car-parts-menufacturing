import React from "react";
import Banner from "./Banner";
import BusinessSummery from "./BusinessSummery";
import Reviews from "./Reviews";
import Tools from "./Tools";

const Home = () => {
  return (
    <div>
      <Banner />
      <Tools />
      <BusinessSummery />
      <Reviews />
    </div>
  );
};

export default Home;
