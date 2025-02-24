import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, incrementByAmount, reset } from "./redux/counterSlice";

function App() {
  const [amount, setAmount] = useState(0);
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  function handleIncrementClick() {
    dispatch(increment());
  }

  function handleDecrementClick() {
    dispatch(decrement());
  }

  function handleResetClick() {
    dispatch(reset());
  }

  function handleIncAmountClick(){
    dispatch(incrementByAmount(amount))
  }

  return (
    <div className="container">
      <button onClick={handleIncrementClick}> + </button>
      <p>Count : {count} </p>
      <button onClick={handleDecrementClick}> - </button>
      <br></br>
      <br></br>
      <button onClick={handleResetClick}> Reset </button>
      <br />
      <input
        type="number"
        placeholder="Enter number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <br />
      <button onClick={handleIncAmountClick}>Inc by amount</button>
    </div>
  );
}

export default App;
