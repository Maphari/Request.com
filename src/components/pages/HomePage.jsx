import React from "react";

// COMPONETNTS IMPORTS
import Navigation from "../Navigation";
import Showcase from "../Showcase";
import Different from "../Different";
import HowitWorks from "../HowItWorks";
import Mobile from "../Mobile";
import NewsLetter from "../NewsLetter";
import Footer from "../Fotter";

const HomePage = () => {
  return (
    <>
      <Navigation />
      <Different />
      <HowitWorks />
      <Mobile />
      <NewsLetter />
      <Footer/>
    </>
  );
};

export default HomePage;
