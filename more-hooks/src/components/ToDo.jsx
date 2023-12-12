import React, { useEffect, useReducer, useRef } from "react";

const ADD_TASK = "ADD_TASK";
const TOGGLE_TASK = "TOGGLE_TASK";

const reducer = (initState, action) => {
  switch (action.type) {
    case ADD_TASK: {
      return [
        ...initState,
        { id: Date.now(), text: action.payload, isVisible: true },
      ];
    }

    case TOGGLE_TASK: {
      return initState.map((toDo) => {
        return toDo.id == action.payload
          ? { ...toDo, isVisible: !toDo.isVisible }
          : toDo;
      });
    }

    default:
      return initState;
  }
};

function ToDo() {
  const inputRef = useRef(null);
  const [toDoState, dispatch] = useReducer(reducer, []);

  useEffect(() => {
    inputRef.current.focus();
    window.scrollTo(0, 0);
  }, [inputRef]);

  const addTask = (e) => {
    dispatch({ type: ADD_TASK, payload: e.target.value });
  };

  const toggleTask = (toDoID) => {
    dispatch({ type: TOGGLE_TASK, payload: toDoID });
  };

  const scrollTop = () => {
    inputRef.current.focus();
    window.scrollTo(0, 0);
  };

  return (
    <div className="todo">
      <input
        type="text"
        placeholder="Enter ToDo here.."
        ref={inputRef}
        onKeyDown={(e) => {
          if (e.key == "Enter") addTask(e);
        }}
      />

      <div className="todo-container">
        {toDoState.map((toDo) => (
          <div
            className={`todo-item ${toDo.isVisible ? "" : "todo-item-hidden"}`}
            key={toDo.id}
          >
            {toDo.isVisible ? (
              <>
                {toDo.text}
                <button onClick={() => toggleTask(toDo.id)}>Toggle</button>
              </>
            ) : (
              <>
                <i>The content is hidden</i>
                <button onClick={() => toggleTask(toDo.id)}>Toggle</button>
              </>
            )}
          </div>
        ))}
      </div>

      {toDoState.length ? (
        <button className="btn-scroll" onClick={scrollTop}>
          Scroll to top
        </button>
      ) : (
        <p className="info">No items in ToDo List</p>
      )}
    </div>
  );
}

export default ToDo;
