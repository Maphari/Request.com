import React from "react";
import { ScrollReveal } from "reveal-on-scroll-react";
//COMPONENTS IMPORTS
import CategoryCard from "./CategoryCard";
// DB
import { collection, getDocs, where, query } from "firebase/firestore";
import { db } from "../../../firebase/firebase-config";
// SWIPER SLIDER
import { Link } from "react-router-dom";

export default function Category() {
  const [loading, setLoading] = React.useState(true);
  const [otherData, setOtherData] = React.useState([]);
  const [id, setId] = React.useState([]);

  React.useEffect(() => {
    const getDataDB = async () => {
      const collectionReference = collection(db, "request-database");
      const filteredDocs = query(
        collectionReference,
        where("rating", ">=", 4.7)
      );
      const snapShot = await getDocs(filteredDocs);
      const docs = snapShot.docs.map((doc) => doc.data());
      setOtherData(docs);
      // console.log(otherData);
      setLoading(false);
    };
    return () => getDataDB();
  }, []);

  React.useEffect(() => {
    const getDataDB = async () => {
      const collectionReference = collection(db, "request-database");
      const snapShot = await getDocs(collectionReference);
      const docs = snapShot.docs.map((doc) => doc.id);
      setId(docs);
      setLoading(false);
    };
    return () => getDataDB();
  }, []);

  const returnedId = id.map((id) => id);

  if (loading) {
    return (
      <div className="div-load">
        <div className="loading"></div> Loading...
      </div>
    );
  }
  return (
    <>
      <div className="otherCategorySection-container">
        <div className="flex align-items-center justify-between my-[2rem]">
          <h1 className="otherCategorySection-container__header bg-[#eeeeee] p-4">
            Most rated companies{" "}
            {otherData.map((rating) => rating.rating === 4.7 && rating.rating)}
          </h1>
          <Link to="/viewmore" className="font-medium view">
            View all
          </Link>
        </div>
      </div>
      <div animation="fade-in" easing="easeIn" className="category-container">
        {otherData.map((item) => (
          <CategoryCard
            Id={returnedId}
            key={returnedId}
            header={item.companyName}
            src={item.profilePicture}
            alt={item.category}
            isOpenOrClose="open"
            address={item.location}
            ratings={item.rating}
            iconName={
              item.category === "catering"
                ? "bowl-food"
                : item.category === "laundry"
                ? "hands-bubbles"
                : item.category === "grocery"
                ? "basket-shopping"
                : item.category === "gamers"
                ? "gamepad"
                : item.category === "photography"
                ? "camera"
                : item.category === "delivery"
                ? "truck"
                : null
            }
          />
        ))}
      </div>
    </>
  );
}
