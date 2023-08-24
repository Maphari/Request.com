import React from "react";
import { useNavigate } from "react-router-dom";

export default function NewUser() {
  const navigate = useNavigate();
  const user = localStorage.getItem("user");
  console.log(user)

  return (
    <>
      <div className="newuser-container">
        <h1>
          Welcome, Start with creating a category <i className="fa-solid fa-smile"></i>
        </h1>
        <p>
          be the first to sell, let people rent your items, buy items or rent
          <br />
          items. build your own network with request services
        </p>
        <button
          className="rounded"
          onClick={() => navigate("/registercategories", { replace: true })}
        >
          Register categories <i className="fa-solid fa-arrow-right ml-1"></i>
        </button>
      </div>
    </>
  );
}
