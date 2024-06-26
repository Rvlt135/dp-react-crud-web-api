import axios from "axios";

export default axios.create({
  baseURL: "https://rvltweb3.tech/api",
  headers: {
    "Content-type": "application/json"
  }
});
