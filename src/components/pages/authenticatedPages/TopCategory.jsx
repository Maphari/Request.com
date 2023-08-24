import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import { GetDataFromDBContext } from "../../contex/getDataFromDBContext";

export default function TopCategory() {
  const location = useLocation();
  const { data } = React.useContext(GetDataFromDBContext);


  return (
    <>
      <div className="browse-container__category-container">
        <h1 className="browse-container__category-container-header">
          Explore by category
        </h1>
        <div className="browse-container__category-container-cat">
          {data.map((item, index) => (
            <NavLink
              key={item.id}
              className={`browse-container__category-container-cat-one hover:drop-shadow-2xl ${
                location.pathname === `/${item.categories[index]}`
                  ? "actived"
                  : ""
              }`}
              to={`/${item.categories[index]}`}
            >
              <h1>{item.categories[index]}</h1>
              <i
                className={`fa-solid fa-${
                  item.categories[index] === "catering"
                    ? "bowl-food"
                    : item.categories[index] === "laundry"
                    ? "hands-bubbles"
                    : item.categories[index] === "grocery"
                    ? "basket-shopping"
                    : item.categories[index] === "gamers"
                    ? "gamepad"
                    : item.categories[index] === "photography"
                    ? "camera"
                    : item.categories[index] === "delivery"
                    ? "truck"
                    : null
                }`}
              ></i>
            </NavLink>
          ))}
        </div>
      </div>
    </>
  );
}
