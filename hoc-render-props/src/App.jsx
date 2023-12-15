import LikePost from "./components/project-hoc/LikePost";
import LikeImage from "./components/project-hoc/LikeImage";
import LikePost2 from "./components/project-render-props/LikePostPart2";
import LikeImage2 from "./components/project-render-props/LikeImagePart2";
import RenderProps from "./components/project-render-props/RenderProps";
import "./App.css";

function App() {
  return (
    <div>
      <h3>Some Blog</h3>
      {/* Project HOC */}
      <h2>Project - HOC</h2>
      <div className="buttons">
        <LikePost />
        <LikeImage />
      </div>

      {/* Project Render Props */}
      <h2>Project - Render Props</h2>
      <div>
        <RenderProps
          render={(count, handleCount) => (
            <LikePost2 count={count} handleCount={handleCount} />
          )}
        />
        <RenderProps
          render={(count, handleCount) => (
            <LikeImage2 count={count} handleCount={handleCount} />
          )}
        />
      </div>
    </div>
  );
}

export default App;
