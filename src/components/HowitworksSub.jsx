import React from "react";

export default function HowitWorksSub(props) {
  const { head, headerColor, para, iconName } = props;
  return (
    <>
      <div className="howitworks-container__inner-div">
        <i className={`fa-solid fa-${iconName}`}></i>
        <h1 className="howitworks-container__inner-div-header">
          {head} <span className="color">{headerColor}</span>
        </h1>
        <p className="howitworks-container__inner-div-para">
          {para}
        </p>
      </div>
    </>
  );
}
