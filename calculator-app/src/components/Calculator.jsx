import { useReducer, useState } from "react";
import Display from "./Display";
import Input from "./Input";
import "../styles/Calculator.css";

const ADD_INPUT = "ADD_INPUT";
const CALCULATE = "CALCULATE";
const DELETE = "DELETE";
const CLEAR = "CLEAR";

const Calculator = () => {
  const [err, setErr] = useState(false);

  const initialState = {
    inputs: "",
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case ADD_INPUT:
        const lastCharacter = state.inputs.slice(-1);
        const operators = ["+", "-", "*", "/"];
        const isLastCharOperator = operators.includes(lastCharacter);
        const isInputOperator = operators.includes(action.payload);

        if (
          (state.inputs === "" && isInputOperator) ||
          (isLastCharOperator && isInputOperator)
        ) {
          setErr(true);
          return state;
        }

        setErr(false);

        return { ...state, inputs: state.inputs + action.payload };

      case CALCULATE:
        try {
          const result = eval(state.inputs);
          setErr(false);
          return { ...state, inputs: result.toString() };
        } catch (error) {
          setErr(true);
          return state;
        }

      case DELETE:
        setErr(false);
        return { ...state, inputs: state.inputs.slice(0, -1) };

      case CLEAR:
        setErr(false);
        return { ...state, inputs: "" };

      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  const handleInput = (value) => {
    dispatch({ type: ADD_INPUT, payload: value });
  };

  const handleCalculate = () => {
    dispatch({ type: CALCULATE });
  };

  const handleDelete = () => {
    dispatch({ type: DELETE });
  };

  const handleClear = () => {
    dispatch({ type: CLEAR });
  };

  return (
    <div className="calc">
      {err && (
        <div className="err">
          <p>Operation not allowed</p>
        </div>
      )}

      <Display value={state.inputs} />

      <Input
        handleClear={handleClear}
        handleDelete={handleDelete}
        handleInput={handleInput}
        handleCalculate={handleCalculate}
      />
    </div>
  );
};

export default Calculator;
