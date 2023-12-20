import { FETCH_DATA } from "./actionType";

const initialState = {
  data: [],
};

export const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_DATA:
      return { ...state, data: payload };

    default:
      return state;
  }
};
