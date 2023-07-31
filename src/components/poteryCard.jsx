import { Component } from "react";

export default class Card extends Component{

    render(){
        const { data } = this.props;
        console.log(data);
        return(
            <>
            <div className="poter-card">
                <div className="card-left-section">
                    <h4 className="withe">{this.props.data.title} </h4>
                    <p className="withe">
                    أحمد بن علي بن أحمد شوقي. أشهر شعراء العصر الأخير، يلقب بأمير الشعراء، مولده ووفاته بالقاهرة، كتب عن نفسه: (سمعت أبي يردّ أصلنا إلى الأكراد فالعرب) نشأ في ظل البيت ...
                    </p>

                </div>
                <div className="card-right-section">
                    <span className="withe" >{this.props.data?.category}</span>
                    <img src="https://img.freepik.com/free-icon/user_318-159711.jpg?w=2000" alt="" />
                    <span className="withe"> {this.props.data?.poet}</span>
                </div>

            </div>
            </>
        )
    }

}