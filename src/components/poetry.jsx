import { Component } from "react";

export default class Poetry extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { data, setOne } = this.props;
    return (
      <div className="show-poetry">
        {data && (
          <div className="poetry">
            <div>
              <h2>{data.title}</h2>
              <h3>{data.epoch}</h3>
              <h3>{data.poet}</h3>
              <h3>{data.category}</h3>
              <h3>{data.number_of_ines}</h3>
              <button onClick={() => setOne(false)}>close</button>
            </div>
            <div>
              <h3>
                {data.poetry.split("@").map((e) => (
                  <p>{e}</p>
                ))}
              </h3>
            </div>
          </div>
        )}
      </div>
    );
  }
}
