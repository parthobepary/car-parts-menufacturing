import React from "react";
import img1 from "../../assets/img/banner.jpg";
import img3 from "../../assets/img/img-3.jpeg";
import img2 from "../../assets/img/img2.jpg";
import img4 from "../../assets/img/img4.jpg";
import "../AllCss/Banner.css";

const Banner = () => {
  return (
    <div className="banner-div py-10 my-20">
      <div className="grid grid-cols-1 md:grid-cols-2 items-center justify-center container mx-auto gap-4">
        <div>
          {/* <img className="w-full h-96 rounded-md" src={img} alt="" /> */}
          <div class="carousel carousel-center rounded-box">
            <div class="carousel-item">
              <img src={img1} alt="Pizza" />
            </div>
            <div class="carousel-item">
              <img src={img2} alt="Pizza" />
            </div>
            <div class="carousel-item">
              <img src={img3} alt="Pizza" />
            </div>
            <div class="carousel-item">
              <img src={img4} alt="Pizza" />
            </div>
          </div>
        </div>
        <div>
          <p className="text-white">
            Tata Motors Original Parts, when used, ensure an optimum ownership
            cost of the vehicle and in a developing country like ours, road
            safety is yet another important aspect which needs attention at all
            costs. This is possible only through usage of original parts, where
            manufacturing and material come together to create superior and
            dependable spares Regular operation of your vehicle causes wear and
            tear of components. To ensure that your car continues to be
            reliable, economical and safe, you need to regularly and
            scientifically replace components during maintenance schedules. Tata
            Motors continuously strives to provide excellent customer support
            through technological expertise in maintaining the vehicle for years
            to come
          </p>
          <button className="btn btn-outline btn-primary  px-20 mt-10">
            {" "}
            <span className="text-white">Learn more</span>{" "}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
