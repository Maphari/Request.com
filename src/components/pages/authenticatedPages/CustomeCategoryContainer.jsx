import React from "react";
import { Link } from "react-router-dom";
import { ScrollReveal } from "reveal-on-scroll-react";

export default function CustomeCategoryContainer(props) {
  const { src, alt, header, price, rating, iconName, description, Id, button } =
    props;
  return (
    <Link
      to=""
      className="category-container__cat drop-shadow-2xl"
      id={Id}
    >
      <ScrollReveal.div>
        <div className="category-container__cat-image-container">
          <img src={src} alt={alt} className="category-container__cat-image" />
        </div>
        <div className="category-container__cat-inner">
          <h1 className="">{header}</h1>
          <i className={`fa-solid fa-${iconName}`}></i>
        </div>
        <div className="flex justify-between align-items-center">
          <p className="category-container__cat-para">{description}</p>
        </div>
        <div className="category-container__cat-rating">
          <p>Ratings: </p>
          <div>{rating}</div>
        </div>
        <div className="category-container__cat-price flex text-[0.9rem] align-items-center gap-2">
          <p>Price: </p>
          <div>R{price}.00</div>
        </div>
        <div className="flex align-items-center gap-2 btnss-container">
          <button
            type="submit"
            className=" bg-[#050505] p-2 w-[80%] mt-1 text-[white] flex align-items-center justify-center gap-2 rounded hover:bg-[#333]"
          >
            <i className="fa-solid fa-shopping-cart"></i> <p>{button}</p>
          </button>
          <button
            type="submit"
            className=" bg-[red] p-2 w-[20%] mt-1 text-[white] rounded"
          >
            <i className="fa-solid fa-heart"></i>
          </button>
        </div>
      </ScrollReveal.div>
    </Link>
  );
}
