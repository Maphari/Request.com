import React from "react";
import { db } from "../../firebase/firebase-config";
import { collection, getDocs } from "firebase/firestore";

export const GetDataFromDBContext = React.createContext();
export const GetDataFromDBProvider = ({ children }) => {
  const [data, setData] = React.useState([]);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    const getDataFromDB = async () => {
      const collectionReference = collection(db, "users");
      const snapShot = await getDocs(collectionReference);
      const docs = snapShot.docs.map((doc) => doc.data());
      setData(docs);
      setLoading(false);
    };
    getDataFromDB();
  }, []);

  if (loading) {
    return (
      <div className="div-load">
        <div className="loading"></div> Loading...
      </div>
    );
  }

  return (
    <GetDataFromDBContext.Provider value={{ data }}>
      {children}
    </GetDataFromDBContext.Provider>
  );
};
