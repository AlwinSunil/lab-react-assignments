import axios from "axios";
import { FETCH_DATA } from "./actionType";

export const getUserData = () => (dispatch) => {
  axios
    .get("https://jsonplaceholder.typicode.com/users")
    .then((res) => {
      dispatch(fetchDataAction(res.data));
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
    });
};

export const fetchDataAction = (payload) => ({
  type: FETCH_DATA,
  payload,
});
