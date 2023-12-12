import useStorage from "./useHooks/useStorage";
import "./App.css";

function App() {
  const { setStorage } = useStorage();

  return (
    <div>
      <input
        type="text"
        name=""
        id=""
        onChange={(e) => setStorage(e.target.value)}
      />
    </div>
  );
}

export default App;
