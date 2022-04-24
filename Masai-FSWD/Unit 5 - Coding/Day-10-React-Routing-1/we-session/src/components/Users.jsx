import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export const Users = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("https://reqres.in/api/users").then(({ data }) => {
      setData(data.data);
    });
  }, []);
  return (
    <div>
      {data.map((el) => {
        return (
          <p key={el.id}>
            <Link to={`/users/${el.id}`}>
              {el.id}.{el.first_name}
            </Link>
          </p>
        );
      })}
    </div>
  );
};
