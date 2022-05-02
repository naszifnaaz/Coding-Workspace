import { addCount } from "../redux/Counter/action";
import { useDispatch, useSelector } from "react-redux";

export const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector((store) => store.counter.counter);

  return (
    <div>
      <h1>Counter</h1>
      <h3>{counter}</h3>
      <button
        onClick={() => {
          dispatch(addCount(1));
        }}
      >
        Add 1
      </button>
    </div>
  );
};
