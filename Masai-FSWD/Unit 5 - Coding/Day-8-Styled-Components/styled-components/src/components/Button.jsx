// import "./Button.css";
import styled from "styled-components";

/*
const Button = ({ children, onClick }) => {
  return (
    <button className="btn" onClick={onClick}>
      {children}
    </button>
  );
};
*/

//Using styled components
const Button = styled.button`
  background-color: ${(props) =>
    props.theme === "light" ? "yellow" : "black"};
  color: ${(props) => (props.theme === "light" ? "black" : "white")};
  font-weight: bold;
  padding: 10px;
  margin: 5px;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  /* &:hover {
    background-color: white;
    color: black;
    border: 2px solid black;
  } */
`;
export { Button };
