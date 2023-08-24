import React from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../../../firebase/firebase-config";
import { db } from "../../../firebase/firebase-config";
import { collection, getDocs } from "firebase/firestore";
// IMAGES IMPORTS
import logoImage from "../../../assets/logo.png";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const location = useLocation();
  const [loading, setLoading] = React.useState(true);
  const [id, setId] = React.useState([]);

  React.useEffect(() => {
    const getDataDB = async () => {
      const collectionReference = collection(db, "request-database");
      const snapShot = await getDocs(collectionReference);
      const docs = snapShot.docs.map((doc) => doc.id);
      setId(docs.map((id) => id));
      setLoading(false);
    };
    return () => getDataDB();
  }, []);

  const handleSignOut = async () => {
    await signOut(auth);
    navigate("/login", { replace: true });
  };

  const returnedId = auth.currentUser.uid;
  return (
    <>
      <div className="container-dashboard drop-shadow-2xl">
        <div className="wrapper">
          <Link to="/" className="container-dashboard__head-container">
            <img
              src={logoImage}
              alt="logo"
              className="container-dashboard__head-container__image"
            />
            <h1 className="container-dashboard__head-container__header">
              equest.
            </h1>
          </Link>
          <ul className="container-dashboard__links">
            <li className={`${location.pathname === "/" ? "active" : ""}`}>
              <NavLink
                to="/"
                className="container-dashboard__link drop-shadow-xl"
              >
                <i className="fa-solid fa-earth-americas text-[1.8rem]"></i>
              </NavLink>
            </li>
            <li
              className={`${location.pathname === "/message" ? "active" : ""}`}
            >
              <NavLink
                to="/message"
                className="container-dashboard__link drop-shadow-xl "
              >
                <i className="fa-solid fa-envelope text-[1.8rem]"></i>
              </NavLink>
            </li>
            <li
              className={` ${location.pathname === "/latest" ? "active" : ""}`}
            >
              <NavLink
                to="/latest"
                className="container-dashboard__link drop-shadow-xl"
              >
                <i className="fa-solid fa-newspaper text-[1.8rem]"></i>
              </NavLink>
            </li>
            <li
              className={` ${
                location.pathname === `/profile/:id/:id` ? "active" : ""
              }`}
            >
              <NavLink
                to={`/profile/${returnedId}/${id}`}
                className="container-dashboard__link drop-shadow-xl"
              >
                <i className="fa-solid fa-user text-[1.8rem]"></i>
              </NavLink>
            </li>
            <li
              className={` ${
                location.pathname === "/settings" ? "active" : ""
              }`}
            >
              <NavLink
                to="/settings"
                className="container-dashboard__link drop-shadow-xl"
              >
                <i className="fa-solid fa-gear text-[1.8rem]"></i>
              </NavLink>
            </li>
          </ul>

          <ul className="container-dashboard__linkss">
            <li
              className={`container-dashboard__link drop-shadow-xl hover:cursor-pointer`}
              onClick={handleSignOut}
            >
              <i className="fa-solid fa-right-from-bracket mr-2"></i>
              <NavLink to="/login">Logout</NavLink>
            </li>
          </ul>
          {!isMenuOpen ? (
            <div
              className="flex align-items-center justify-center border p-2 hover:cursor-pointer men"
              onClick={() => setIsMenuOpen(true)}
            >
              <i className="fa-solid fa-bars icon-menu mr-3"></i> MENU
            </div>
          ) : (
            <div
              className="flex align-items-center justify-center border p-2 hover:cursor-pointer men"
              onClick={() => setIsMenuOpen(false)}
            >
              <i className="fa-solid fa-xmark icon-menu mr-3"></i> CLOSE
            </div>
          )}
        </div>
        {isMenuOpen ? (
          <div className="menu-small">
            <ul>
              <li>
                <NavLink className="a" to="/">
                  Browse
                </NavLink>
              </li>
              <li>
                <NavLink className="a" to="/message">
                  Message
                </NavLink>
              </li>
              <li>
                <NavLink className="a" to="/latest">
                  Latest
                </NavLink>
              </li>
              <li>
                <NavLink className="a" to="/login" onClick={handleSignOut}>
                  <i className="fa-solid fa-right-from-bracket"></i> Logout
                </NavLink>
              </li>
            </ul>
          </div>
        ) : null}
      </div>
    </>
  );
};
export default Navigation;
