export const ProductDesc = ({ el }) => {
  return (
    <div>
      <div>
        <img src={el.image} style={{ width: "400px" }} />
        <p
          style={{
            fontSize: "1.5rem",
            fontWeight: "bold",
          }}
        >
          {el.title}
        </p>
        <p>{el.description}</p>
        <p
          style={{
            backgroundColor: "yellow",
          }}
        >
          ${el.price}
        </p>
        <button
          style={{
            backgroundColor: "black",
            color: "white",
            padding: "15px",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Add To Cart
        </button>
      </div>
    </div>
  );
};
