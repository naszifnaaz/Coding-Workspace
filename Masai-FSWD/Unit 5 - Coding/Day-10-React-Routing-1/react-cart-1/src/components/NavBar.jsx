import { Link } from "react-router-dom";

export const NavBar = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        backgroundColor: "#002e25",
        color: "white",
      }}
    >
      <h1>SHOPIFY</h1>
      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
        }}
      >
        <Link
          to="/clothing"
          style={{
            marginRight: "15px",
            color: "white",
            textDecoration: "none",
          }}
        >
          Clothing
        </Link>
        <Link
          to="/painting"
          style={{
            marginRight: "15px",
            color: "white",
            textDecoration: "none",
          }}
        >
          Paintings
        </Link>
        <Link
          to="/electronics"
          style={{
            marginRight: "15px",
            color: "white",
            textDecoration: "none",
          }}
        >
          Electronics
        </Link>
      </div>
      <img
        src="https://d2gg9evh47fn9z.cloudfront.net/800px_COLOURBOX5559842.jpg"
        style={{ width: "50px", height: "50px" }}
      />
    </div>
  );
};
