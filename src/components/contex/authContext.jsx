import React, { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../firebase/firebase-config";

export const AuthContext = React.createContext();

export const AuthProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [grantAccess, setGrantAccess] = useState(null);
  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      setGrantAccess(currentUser);
      setLoading(false);
    });
  }, []);
  if (loading) {
    return (
      <div className="div-load">
        <div className="loading"></div> Loading...
      </div>
    );
  }
  return (
    <AuthContext.Provider value={{ grantAccess }}>
      {children}
    </AuthContext.Provider>
  );
};
