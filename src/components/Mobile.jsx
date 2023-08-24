import React from "react";
// IMAGES IMPORTS
import mobileImage from "../assets/mobile.png";

const Mobile = () => {
  return (
    <>
      <div className="mobile-container">
        <div className="mobile-container__info">
          <h1 className="mobile-container__info-head">
            Our Mobile application
            <br /> <span className="color">COMING SOON</span>
          </h1>
          <p className="mobile-container__info-para">
            we want to bring Request to your mobile devices so that you do the
            <br />
            honor where ever you are
          </p>
          <button className="mobile-container__info-btn">Learn more</button>
        </div>
        <div className="mobile-container__images">
          <img src={mobileImage} alt="mobile representaition" />
        </div>
      </div>
    </>
  );
};
export default Mobile;
