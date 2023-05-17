import { Component } from "react";
import Card from "./poteryCard";

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
