import React, { useState } from "react";
import PropTypes from "prop-types";

const CounterApp = ({ value }) => {
  const [counter, setCounter] = useState(value);

  //handleAdd
  const handleAdd = (e) => setCounter(counter + 1);

  const handleReset = (e) => setCounter(value);

  const handleMinus = (e) => setCounter(counter - 1);

  return (
    <>
      <h1>CounterApp</h1>
      <h2>{counter} </h2>
      <button onClick={handleAdd}>+1</button>
      <button onClick={handleMinus}>-1</button>
      <button onClick={handleReset}>Reset</button>
    </>
  );
};

CounterApp.propTypes = {};

export default CounterApp;
