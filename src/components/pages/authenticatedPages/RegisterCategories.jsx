import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { db, auth } from "../../../firebase/firebase-config";
import { collection, addDoc } from "firebase/firestore";

export default function RegisterCategories() {
  const navigate = useNavigate();
  const [comapanyName, setCompanyName] = React.useState("");
  const [bio, setBio] = React.useState("");
  const [description, setDescription] = React.useState("");
  const [rating, setRating] = React.useState(0);
  const [location, setLocation] = React.useState("");
  const [option, setOption] = React.useState([]);
  const [sellBuy, setSellBuy] = React.useState([]);
  const [productName, setProductName] = React.useState("");
  const [image, setImage] = React.useState("");
  const [err, setErr] = React.useState("");

  const data = {
    productName: productName,
    companyName: comapanyName,
    bio: bio,
    description: description,
    location: location,
    profilePicture: image,
    category: option,
    rating: rating,
  };

  const createCategory = async () => {
    try {
      const collectionRef = collection(db, "request-database");
      await addDoc(collectionRef, data);
      navigate("/", { replace: true });
    } catch (error) {
      setErr(error.message);
    }
  };

  const prevent = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <div className="register-container">
        <div className="register-container__inner drop-shadow-2xl rounded-lg">
          <div className="inner">
            <h1 className="register-container__inner-head">
              Create categories
            </h1>
            <p className="register-container__inner-para">
              Create and start building your network wit request
            </p>
            <p className="text-[red]">{err && err}</p>
            <form onSubmit={prevent}>
              <div className="input-group mb-2">
                <span className="input-group-text rounded-md" id="basic-addon1">
                  <i className="fa-solid fa-building"></i>
                </span>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Comapany name"
                  aria-label="company-name"
                  aria-describedby="basic-addon1"
                  onChange={(e) => setCompanyName(e.target.value)}
                  value={comapanyName}
                  required
                />
              </div>
              <div className="input-group mb-2">
                <span className="input-group-text rounded-md" id="basic-addon1">
                  <i className="fa-solid fa-bolt"></i>
                </span>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Product name"
                  aria-label="product-name"
                  aria-describedby="basic-addon1"
                  onChange={(e) => setProductName(e.target.value)}
                  value={productName}
                  required
                />
              </div>
              <div className="input-group mb-2">
                <span className="input-group-text rounded-md" id="basic-addon1">
                  <i className="fa-solid fa-book"></i>
                </span>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Bio"
                  aria-label="bio"
                  aria-describedby="basic-addon1"
                  onChange={(e) => setBio(e.target.value)}
                  value={bio}
                  required
                />
              </div>
              <div className="input-group mb-2">
                <span className="input-group-text rounded-md" id="basic-addon1">
                  <i className="fa-solid fa-clipboard"></i>
                </span>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Description"
                  onChange={(e) => setDescription(e.target.value)}
                  value={description}
                  required
                />
              </div>
              <div className="input-group mb-2">
                <span className="input-group-text rounded-md" id="basic-addon1">
                  <i className="fa-solid fa-star"></i>
                </span>
                <input
                  type="number"
                  className="form-control"
                  placeholder="Rate your services"
                  onChange={(e) => setRating(e.target.value)}
                  value={rating}
                  required
                />
              </div>
              <div className="input-group mb-2">
                <span className="input-group-text rounded-md" id="basic-addon1">
                  <i className="fa-solid fa-location-dot"></i>
                </span>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Location"
                  aria-label="location"
                  aria-describedby="basic-addon1"
                  onChange={(e) => setLocation(e.target.value)}
                  value={location}
                  required
                />
              </div>
              <div class="input-group mb-3">
                <select
                  class="form-select"
                  id="inputGroupSelect01"
                  onChange={(e) => setOption(e.target.value)}
                  value={option}
                >
                  <option selected>Choose...</option>
                  <option value="gamers">Gamers</option>
                  <option value="delivery">Delivery</option>
                  <option value="grocery">Grocery</option>
                  <option value="photography">Photography</option>
                </select>
              </div>
              <div class="input-group mb-3">
                <select
                  class="form-select"
                  id="inputGroupSelect01"
                  onChange={(e) => setSellBuy(e.target.value)}
                  value={sellBuy}
                >
                  <option selected>Choose...</option>
                  <option value="rent">Rent</option>
                  <option value="Sell">Delivery</option>
                </select>
              </div>
              <div className="input-group mb-2">
                <span className="input-group-text rounded-md" id="basic-addon1">
                  <i className="fa-solid fa-image"></i>
                </span>
                <input
                  type="text"
                  className="form-control"
                  aria-label="file"
                  aria-describedby="basic-addon1"
                  placeholder="Enter or paste your image url"
                  onChange={(e) => {
                    setImage(e.target.value);
                  }}
                  required
                />
              </div>
              <button
                className="btn-sub rounded-lg"
                type="submit"
                onClick={createCategory}
              >
                Create categories
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
