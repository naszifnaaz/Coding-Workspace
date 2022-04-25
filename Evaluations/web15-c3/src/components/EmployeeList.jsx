import axios from "axios";
import { useEffect, useState } from "react";
import { EmployeeDetails } from "../components/EmployeeDetails";
import { ProtectedRoute } from "../components/PrivateRoute";

export const EmployeeList = () => {
  const [users, setUsers] = useState([]);
  const [show, setShow] = useState(false);
  const [user, setUser] = useState({});

  const showDetails = (user) => {
    setUser(user);
    setShow(true);
  };

  useEffect(() => {
    axios.get(" http://localhost:8080/employee").then((res) => {
      setUsers(res.data);
    });
  }, []);
  return (
    <div
      className="list_container"
      style={{
        display: "flex",
        justifyContent: "space-evenly",
        flexWrap: "wrap",
        margin: "4rem",
        padding: "2rem",
      }}
    >
      {/* On clicking this card anywhere, user goes to user details */}
      {!show ? (
        users.map((el) => {
          return (
            <div
              className="employee_card"
              key={el.employee_id}
              onClick={() => showDetails(el)}
            >
              <img className="employee_image" src={el.image} />
              <span
                className="employee_name"
                style={{
                  display: "block",
                }}
              >
                {el.employee_name}
              </span>
              <span className="employee_title">{el.title}</span>
            </div>
          );
        })
      ) : (
        <ProtectedRoute>
          <EmployeeDetails user={user} />
        </ProtectedRoute>
      )}
    </div>
  );
};
