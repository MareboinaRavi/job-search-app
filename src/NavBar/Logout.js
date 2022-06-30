import { useEffect } from "react";
import { Navigate } from "react-router-dom";


const Logout = (props) => {

  useEffect(() => {
    localStorage.removeItem("token");
    localStorage.removeItem("type");
  }, []);
  return <Navigate to="/signin" />;
};

export default Logout;
