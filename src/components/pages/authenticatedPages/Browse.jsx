import React from "react";
import TopCategory from "./TopCategory";
import { db } from "../../../firebase/firebase-config";
import { query, getDocs, where, collection, limit } from "firebase/firestore";
import { Link } from "react-router-dom";
import { GetDataFromDBContext } from "../../contex/getDataFromDBContext";

export default function Browse() {
  const [searchQuery, setSearchQuery] = React.useState("");
  const [searchTermResults, setSearchTermResults] = React.useState([]);
  const [location, setLocation] = React.useState([]);
  const [locationErr, setLocationErr] = React.useState("");
  const [clicked, setClicked] = React.useState(false);
  const { data } = React.useContext(GetDataFromDBContext);

  React.useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const { latitude, longitude } = position.coords;
        const apiUrl = `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${latitude}&lon=${longitude}`;
        try {
          fetch(apiUrl)
            .then((response) => response.json())
            .then((data) => {
              const address = data.display_name;
              setLocation(address);
            });
        } catch (error) {
          setLocationErr(error.message);
        }
      });
    } else {
      setLocationErr("Geolocation is not supported by this browser.");
    }
  }, []);

  React.useEffect(() => {
    const unsubscribe = async () => {
      const collectionReference = collection(db, "users");
      const filterCollectionReference = query(
        collectionReference,
        where("category", ">=", searchQuery),
        limit(6)
      );
      const snapShots = await getDocs(filterCollectionReference);
      const docs = snapShots.docs.map((doc) => doc.data());
      setSearchTermResults(docs);
    };
    return () => unsubscribe();
  }, [searchQuery]);

  const handleSearchInput = (event) => {
    event.preventDefault();
    setSearchQuery(event.target.value);
  };

  return (
    <>
      <div className="browse-container">
        <div className="browse-container__subnav">
          <h1 className="browse-container__subnav__header">Browse</h1>
          <form>
            <div className="browse-container__subnav__location">
              <i className="fa-solid fa-location-dot"></i>
              <p>
                {locationErr
                  ? locationErr
                  : location.length > 10
                  ? location.slice(0, 33)
                  : location}
              </p>
            </div>
            <div className="form border">
              <i className="fa-solid fa-magnifying-glass"></i>
              <input
                type="text"
                placeholder="Search for available stores or category"
                onChange={handleSearchInput}
                value={searchQuery}
              />
              {searchQuery && (
                <div className="search-box drop-shadow-2xl">
                  {searchTermResults.map((item, index) => (
                    <Link
                      to={`/profile/${item.id}`}
                      key={item.id}
                      className="flex justify-between align-items-center w-[100%] hover:bg-[#eeeeee] p-3"
                    >
                      <p>{item.shopName}</p>

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
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </form>
        </div>
        <TopCategory />
       
      </div>
    </>
  );
}
