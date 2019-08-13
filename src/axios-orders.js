import axios from "axios";

const instance = axios.create({
  baseURL: "https://react-my-burger-e8acf.firebaseio.com/"
});

export default instance;
