import { createServer } from "miragejs";
import axios from "axios";
import { data } from "./data";

let server = createServer();
server.get("/data", data);

export const fetch = () => {
  return axios
    .get("/data")
    .then((data) => {
      return data;
    })
    .catch(console.log);
};
