import { Component } from "react";
export default class NavBar extends Component {
    render() {
        return (
            <>
                <nav>
                    <div className="logo">
                    </div>

                    <div className="nav-content">
                    <div className="right-section">
                        <h1>الابيات</h1>
                    </div>
                    <div className="left-section">
                        <ul>
                            <li>الرئيسية</li>
                            <li>القصائد</li>
                        </ul>
                        <input type="text" placeholder="ابحث في عالم من الشعر" />

                    </div>
                    </div>

                </nav>

            </>

        )
    }

}