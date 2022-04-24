import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

export const UserDetails = () => {
  const [user, setUser] = useState({});
  const { id } = useParams();
  useEffect(() => {
    axios.get(`https://reqres.in/api/users/${id}`).then((data) => {
      setUser(data.data.data);
    });
  }, []);
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
