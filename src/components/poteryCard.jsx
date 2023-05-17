import { Component } from "react";

export default class Card extends Component{
    render(){
        return(
            <>
            <div className="poter-card">
                <div className="card-left-section">
                    <h4 className="withe">ريم علي القاع بين البان والعلمي</h4>
                    <p className="withe">
                    أحمد بن علي بن أحمد شوقي. أشهر شعراء العصر الأخير، يلقب بأمير الشعراء، مولده ووفاته بالقاهرة، كتب عن نفسه: (سمعت أبي يردّ أصلنا إلى الأكراد فالعرب) نشأ في ظل البيت ...
                    </p>

                </div>
                <div className="card-right-section">
                    <span className="withe" >#مدح</span>
                    <img src="https://img.freepik.com/free-icon/user_318-159711.jpg?w=2000" alt="" />
                    <span className="withe">أحمد شوقى</span>
                </div>

            </div>
            </>
        )
    }

}