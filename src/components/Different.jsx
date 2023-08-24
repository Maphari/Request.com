import React from "react";
import { ScrollReveal } from "reveal-on-scroll-react";

// IMAGES IMPORTS
import groceryImage from "../assets/Online Groceries-pana.png";
import laundryImage from "../assets/Laundry and dry cleaning-pana.png";

const Different = () => {
  return (
    <>
      <div className="different-container">
        <ScrollReveal.h1 animation="fade-in" easing="easeInOut"  className="different-container__header">
          What makes <span className="color">Request</span> different
          <br /> to other platforms
        </ScrollReveal.h1>
        <ScrollReveal.p animation="fade-in" easing="easeInOut" className="different-container__para">
          we are here to give you better services, that will last forever.{" "}
        </ScrollReveal.p>
      </div>

      <ScrollReveal.div animation="fade-in" easing="backInOut" className="different-container__second">
        <img
          src={groceryImage}
          alt="man holding groceries"
          className="different-container__second-img"
        />
        <div className="different-container__second-div">
          <h1 className="different-container__second-div-head">
            Get your <span className="color">groceries</span> in time
            <br /> and secure
          </h1>
          <p className="different-container__second-div-para">
            Our workers make sure that you get what you order and they make sure
            that your order arrives in time no delays.
          </p>
          <button className="different-container__second-div-btn">
            Learn more
          </button>
        </div>
      </ScrollReveal.div>
      <ScrollReveal.div animation="fade-in" easing="backInOut" className="different-container__third">
        <div className="different-container__third-div">
          <h1 className="different-container__third-div-head">
            Get your <span className="color">clothes</span> cleaned
            <br /> in no time
          </h1>
          <p className="different-container__third-div-para">
            Our laundry stops are professional workers waiting to make your day
            by making your clothes smell good.
          </p>
          <button className="different-container__third-div-btn">
            Learn more
          </button>
        </div>
        <img
          src={laundryImage}
          alt="man holding groceries"
          className="different-container__third-img"
        />
      </ScrollReveal.div>
    </>
  );
};

export default Different;
