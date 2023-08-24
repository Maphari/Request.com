import React from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../contex/authContext";
import { auth } from "../../../firebase/firebase-config";

//COMPONENTS IMPORTS
import Navigation from "./Navigation";
import Browse from "./Browse";
import Category from "./Category";
import Posts from "./pages/Posts";
import Footer from "./Footer";
import CustomeCategoryContainer from "./CustomeCategoryContainer";
import { db } from "../../../firebase/firebase-config";
import { collection, getDocs } from "firebase/firestore";
import NewUser from "./NewUser";

const Dashboard = () => {
  const { grantAccess } = React.useContext(AuthContext);
  const navigate = useNavigate();
  const [check, setCheck] = React.useState([]);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    const getData = async () => {
      const collectionRef = collection(db, "request-database");
      const snapShots = await getDocs(collectionRef);
      const docs = snapShots.docs.map((doc) => doc.data());
      setCheck(docs);
      setLoading(false);
    };
    return () => getData();
  }, []);
  React.useEffect(() => {
    if (grantAccess) {
      navigate("/", { replace: true });
    }
  }, [grantAccess]);

  if (loading) {
    return (
      <div className="div-load">
        <div className="loading"></div> Loading...
      </div>
    );
  }
  if (!grantAccess) {
    return navigate("/login");
  }

  console.log(auth.currentUser.uid)
  return (
    <>
      {check.length != 0 ? (
        <>
          <Navigation />
          <Browse />
          <Category />
          <Posts />

          <div className="mx-[3rem] mb-4">
            <h1 className="text-2xl font-medium mb-[2rem]">
              items to rent and buy
            </h1>
            <div className="flex align-items-center flex-wrap gap-3"></div>
          </div>
          <Footer />
        </>
      ) : (
        <NewUser />
      )}
    </>
  );
};

export default Dashboard;
