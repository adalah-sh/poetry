import { Component } from "react";
import Card from "./poteryCard";

export default class AllPoetry extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { data, setOne } = this.props;
    return (
      <div className="poetrys">
        {data &&
          data.map((item, index) => {
            return (
              <button
                key={index}
                onClick={() => {
                  setOne(index);
                }}
              >
                {" "}
                <Card data={item} />
              </button>
            );
          })}
      </div>
    );
  }
}
