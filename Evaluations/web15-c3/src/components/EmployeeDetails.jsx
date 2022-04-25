import { useContext } from "react";
import { StatContext } from "../contexts/StatContext";

export const EmployeeDetails = ({ user }) => {
  const {
    total,
    setTotal,
    terminated,
    setTerminated,
    promoted,
    setPromoted,
    total_new,
    setTotalNew,
  } = useContext(StatContext);

  function promote() {
    setPromoted(promoted + 1);
  }

  function terminate() {
    setTerminated(terminated + 1);
  }

  console.log(user);
  return (
    <div className="user_details">
      <img className="user_image" src={user.image} />
      <h4 className="user_name">{user.employee_name}</h4>
      <span className="user_salary">${user.salary}</span>
      <span className="tasks">
        <li className="task">{user.tasks}</li>
      </span>
      Status: <b className="status">{user.status}</b>
      <br />
      Title: <b className="title">{user.title}</b>
      <br />
      {/* Show this button only if user is not already terminated (users status is working) */}
      {user.status == "working" ? (
        <button className="fire" onClick={() => terminate()}>
          Fire Employee
        </button>
      ) : null}
      {/* Show this button only if user is not already team lead or terminated */}
      {user.status == "working" && user.title != "Team Lead" ? (
        <button className="promote" onClick={() => promote()}>
          promote
        </button>
      ) : null}
    </div>
  );
};
