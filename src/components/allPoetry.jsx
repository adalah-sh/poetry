import axios from "axios";
import { Component } from "react";
import { createServer } from "miragejs";
import { data } from "../data";
import Card from "./poteryCard";

let server = createServer();
server.get("/azouha", data);

export default class AllPoetry extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { data } = this.props;
    return (
      <>
        {data &&
          data.map((item, index) => {
            return <Card key={index} data={item} />;
          })}
      </>
    );
  }
}
