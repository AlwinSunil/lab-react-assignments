import React from "react";
import { incrementLike, decrementLike } from "./redux/Actions";
import { connect } from "react-redux";

function LikeCounter({ count, increment, decrement }) {
  return (
    <div>
      <p className="count">{count}</p>
      <button onClick={increment}>Like</button>
      <button onClick={decrement}>Unlike</button>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    count: state.count,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    increment: () => dispatch(incrementLike()),
    decrement: () => dispatch(decrementLike()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LikeCounter);
