import React from "react";
import { ScrollReveal } from "reveal-on-scroll-react";


const Showcase = () => {
  return (
    <>
      <div className="showcase-container">
        <ScrollReveal.h1  className="showcase-container__header">
          <span className="color">Manage</span> your daily tasks with{" "}
          <span className="color">request</span>
          <br /> <span className="color">we offer more</span> that just a daily
          task
        </ScrollReveal.h1>
        <ScrollReveal.p  className="showcase-container__para">
          we are here to give you better services, that will last forever.{" "}
        </ScrollReveal.p>

        <form>
          <ScrollReveal.div  className="input-container">
            <input placeholder="Search for Groceries, Laundry stops, event handlers and more" />
            <div className="btn">
              <button>
                <i className="fa-sharp fa-solid fa-magnifying-glass"></i>
              </button>
            </div>
          </ScrollReveal.div>
        </form>

        <div className="icons-container">
          <ScrollReveal.div   className="icons">
            <i className="fa-brands fa-facebook-f"></i>
            <i className="fa-brands fa-instagram"></i>
            <i className="fa-brands fa-twitter"></i>
            <i className="fa-brands fa-youtube"></i>
          </ScrollReveal.div>
        </div>
      </div>
    </>
  );
};

export default Showcase;
