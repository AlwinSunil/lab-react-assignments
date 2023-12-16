import React from "react";

function Input(props) {
  const { handleClear, handleDelete, handleInput, handleCalculate } = props;

  return (
    <div className="actions">
      <button className="ac" onClick={handleClear}>
        AC
      </button>
      <button onClick={handleDelete}>DEL</button>
      <button onClick={() => handleInput("/")}>÷</button>
      <button className="multiply" onClick={() => handleInput("*")}>
        *
      </button>
      <button onClick={() => handleInput("7")}>7</button>
      <button onClick={() => handleInput("8")}>8</button>
      <button onClick={() => handleInput("9")}>9</button>
      <button className="subs" onClick={() => handleInput("-")}>
        -
      </button>
      <button onClick={() => handleInput("4")}>4</button>
      <button onClick={() => handleInput("5")}>5</button>
      <button onClick={() => handleInput("6")}>6</button>
      <button className="add" onClick={() => handleInput("+")}>
        +
      </button>
      <button onClick={() => handleInput("1")}>1</button>
      <button onClick={() => handleInput("2")}>2</button>
      <button onClick={() => handleInput("3")}>3</button>
      <button className="equal" onClick={() => handleCalculate()}>
        =
      </button>
      <button className="zero" onClick={() => handleInput("0")}>
        0
      </button>
    </div>
  );
}

export default Input;
