import React from "react";
import TextField from "@material-ui/core/TextField";

const Counter = ({ handleIncrement, handleDecrement, changeDisplayFormStatus, currentValue, displayForm }) => (
  <div>
    <div>{currentValue}</div>
    <button onClick={handleIncrement}>+</button>
    <button onClick={handleDecrement}>-</button>
    <button onClick={changeDisplayFormStatus}>Change Form Status</button>
    {displayForm && (
      <form>
        <TextField label="Standard" />
        <TextField label="Filled" />
        <TextField label="Outlined" />
      </form>
    )}
  </div>
);

export default Counter;
