import React from "react";
import { Link } from "react-router-dom";
import { ScrollReveal } from "reveal-on-scroll-react";

export default function CategoryCard(props) {
  const { src, alt, header, isOpenOrClose, address, ratings, iconName, Id } =
    props;
    
  return (
    <Link
      to={`/profile/${Id}`}
      className="category-container__cat drop-shadow-2xl"
      id={Id}
    >
      <ScrollReveal.div>
        <div className="category-container__cat-image-container">
          <img src={src} alt={alt} className="category-container__cat-image" />
        </div>
        <div className="category-container__cat-inner">
          <h1 className="category-container__cat-inner-header">{header}</h1>
          <p className="category-container__cat-inner-para">{isOpenOrClose}</p>
        </div>
        <div className="flex justify-between align-items-center">
          <p className="category-container__cat-para">
            <i className="fa-solid fa-location-dot text-[#333]"></i> {address}
          </p>
          <i className={`fa-solid fa-${iconName}`}></i>
        </div>
        <div className="category-container__cat-rating">
          <p>Company ratings</p>
          <div>{ratings}</div>
        </div>
      </ScrollReveal.div>
    </Link>
  );
}
