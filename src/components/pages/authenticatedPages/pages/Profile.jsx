import React from "react";
import { useParams, Link } from "react-router-dom";
import Navigation from "../Navigation";
import { db, auth } from "../../../../firebase/firebase-config";
import { collection, getDocs, where, query } from "firebase/firestore";
import CustomeCategoryContainer from "../CustomeCategoryContainer";
import Posting from "../Posting";
import Footer from "../Footer";

export default function Profile() {
  const [data, setData] = React.useState([]);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    const getData = async () => {
      const collectionReference = collection(db, `request-database/${auth.currentUser.uid}`);
      const snapshot = await getDocs(collectionReference);
      const docs = snapshot.docs.map((doc) => doc.data());
      setData(docs);
      setLoading(false);
    };

    return () => getData();
  }, []);

  if (loading) {
    return (
      <div className="div-load">
        <div className="loading"></div> Loading...
      </div>
    );
  }
  return (
    <>
      <Navigation />
      {data.map((item) => (
        <div className="container-profile" key={item.companyName}>
          <div className="container-profile__info drop-shadow-2xl">
            <div className="container-profile__change drop-shadow-2xl">
              <img
                src={item.profilePicture}
                alt={item.description}
                className="image"
              />
              <label htmlFor="file" className="drop-shadow-2xl">
                <i className="fa-solid fa-camera"></i>
                <input
                  type="file"
                  id="file"
                  accept="image/png, image/jpg, image/gif, image/jpeg"
                />
              </label>
            </div>
            <div className="w-[100%] flex flex-col align-items-center justify-center">
              <h1 className="container-profile__info-header">
                {item.companyName}
                <i
                  className={`fa-solid fa-${
                    item.category === "gamers"
                      ? "gamepad"
                      : item.category === "grocery"
                      ? "basket-shopping"
                      : item.category === "catering"
                      ? "bowl-food"
                      : item.category === "photography"
                      ? "camera"
                      : item.category === "delivery"
                      ? "truck"
                      : null
                  }`}
                ></i>
              </h1>
              <p className="container-profile__info-bio">
                {item.bio} <i className="fa-solid fa-"></i>
              </p>
              <p className="container-profile__info-bio">
                Rating {item.rating}
              </p>
              <p className="container-profile__info-bio">
                <i className="fa-solid fa-location-dot mr-3"></i>{" "}
                {item.location}
              </p>
              <div className="action-btn flex align-items-center justify-center">
                <Link to="" className="action-btnn drop-shadow-2xl">
                  <i className="fa-solid fa-envelope"></i> Message
                </Link>
                <Link to="" className="action-btnn drop-shadow-2xl">
                  <i className="fa-solid fa-book"></i>Book space
                </Link>
              </div>
            </div>
          </div>
        </div>
      ))}

      <div className="profile-container-top">
        <div className="flex align-items-center justify-between">
          <h1 className="profile-container-top__header">
            Services offered by {data.map((item) => item.companyName)}
          </h1>
          <Link to="" className="profile-container-top__cart rounded">
            <i className="fa-solid fa-shopping-cart"></i> Cart 0
          </Link>
        </div>
      </div>
      <Posting />
      <Footer />
    </>
  );
}
