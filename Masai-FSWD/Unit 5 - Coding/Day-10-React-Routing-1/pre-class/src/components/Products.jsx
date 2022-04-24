import { useParams } from "react-router-dom";

export const Products = () => {
  const { id } = useParams();
  return (
    <div>
      <h1>Product Id : {id} </h1>
    </div>
  );
};
