import axios from 'axios';
import { Component } from "react";
import { createServer } from "miragejs";
import { data } from "../data";
import Card from './poteryCard';

let server = createServer();
server.get("/azouha", data);

export default class AllPoetry extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: null, 
        };
    }
    componentDidMount() {
        axios.get("/azouha")
            .then(({data}) => {
                this.setState({ data })
            })
            .catch(console.log)
    }

    render() {
        const { data } = this.state;
        console.log(data?.users)
        return (
            <>
                {data?.users.map((user) => (
                    <Card />
                    // <li key={user.id}>
                    //     <h2>{user.title}</h2>
                    //     {user.poetry.split("@").map((e, i) => (
                    //         <p key={i}>{e}</p>
                    //     ))}
                    //     <br />
                    //     <br />
                    // </li>
                ))}
            </>
        );
    }
}
