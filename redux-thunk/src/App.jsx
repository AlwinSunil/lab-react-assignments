import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getUserData } from "./redux/action";
import "./App.css";

function App() {
  const [displayData, setDisplayData] = useState(false);

  const data = useSelector((store) => store.data);
  const dispatch = useDispatch();

  const getData = () => {
    dispatch(getUserData());
    setDisplayData(!displayData);
  };

  return (
    <div>
      {displayData ? (
        <>
          {data.map((user, index) => (
            <div key={index} className="user">
              <p>{user.name}</p>
              <p>{user.email}</p>
            </div>
          ))}
        </>
      ) : (
        <button onClick={getData}>Get data</button>
      )}
    </div>
  );
}

export default App;
