import React from "react";
import Footer from "../Shared/Footer";
import Banner from "./Banner";
import BusinessSummery from "./BusinessSummery";
import ContuctMail from "./ContuctMail";
import Reviews from "./Reviews";
import Tools from "./Tools";

const Home = () => {
  return (
    <div>
      <Banner />
      <Tools />
      <BusinessSummery />
      <Reviews />
      <ContuctMail />
      <Footer />
    </div>
  );
};

export default Home;
