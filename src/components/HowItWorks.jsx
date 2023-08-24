import React from "react";

// COMPONENT IMPORTS
import HowitWorksSub from "./HowitworksSub";

const HowitWorks = () => {
  return (
    <>
      <section id="howitworks" className="howitworks-container">
        <p className="howitworks-container__para">How it works</p>
        <h1 className="howitworks-container__head">
          <span className="color">Services</span> that{" "}
          <span className="color">request</span> gives
        </h1>

        <div className="howitworks-container__inner">
          <HowitWorksSub
            iconName="envelope"
            head="Messaging"
            headerColor="Space"
            para="We provide a secure messaging space for you to have effective communication."
          />
          <HowitWorksSub
            iconName="map-location-dot"
            head="Search"
            headerColor="Location"
            para="We provide a feature that let you search by location to find help fast with better services."
          />
          <HowitWorksSub
            iconName="wallet"
            head="Easy"
            headerColor="Payments"
            para="We provide multiple payments methods that will accept any card that you own for ease services."
          />
          <HowitWorksSub
            iconName="file-shield"
            head="Identity"
            headerColor="Protection"
            para="We protect your identity and your information so that you feel safe while using our web application."
          />
        </div>
      </section>
    </>
  );
};
export default HowitWorks;
