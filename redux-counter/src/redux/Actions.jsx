import { INCREMENT, DECREMENT } from "./Types";

export const incrementLike = () => {
  return { type: INCREMENT };
};

export const decrementLike = () => {
  return { type: DECREMENT };
};
