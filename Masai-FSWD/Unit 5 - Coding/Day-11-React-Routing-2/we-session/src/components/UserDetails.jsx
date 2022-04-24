import { useParams, Navigate } from "react-router-dom";
import axios from "axios";
import { useEffect, useState, useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";

export const UserDetails = () => {
  const { isAuth } = useContext(AuthContext);
  const [user, setUser] = useState({});
  const { id } = useParams();
  useEffect(() => {
    axios.get(`https://reqres.in/api/users/${id}`).then((data) => {
      setUser(data.data.data);
    });
  }, []);

  if (!isAuth) return <Navigate to={"/"} />;
  return (
    <div>
      <img src={user.avatar} alt="user" />
      <h1>
        {user.first_name} {user.last_name}
      </h1>
      <h3>{user.email}</h3>
    </div>
  );
};
