import { useNavigate } from "react-router-dom";

export const About = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h2>About Us</h2>
      <p>Thanks for using!</p>
      <button
        onClick={() => {
          //when we want to do some fetch call and then redirect to somepages
          navigate("/product/tv");
        }}
      >
        Submit
      </button>
    </div>
  );
};
