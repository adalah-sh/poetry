import { Component } from "react";

export default class Poetry extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { data , setOne} = this.props;
    return (
      <div>
        <button onClick={() => setOne(false)}>close</button>
        {data &&
          <div>
            <h2>{data.title}</h2>
            <h3>{data.epoch}</h3>
            <h3>{data.poet}</h3>
            <h3>{data.category}</h3>
            <h3>{data.number_of_ines}</h3>
            <h3>{data.poetry}</h3>
          </div>}

      </div>
    );
  }
}
