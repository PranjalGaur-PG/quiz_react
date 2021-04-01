import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "./assets/style.css";

class quiz extends Component {
    render() {
        return (
            <div className="container">
                <div className="title">Quiz</div>
            </div>
        );
    }
}

ReactDOM.render(
    <quiz/> , document.getElementById("root")
);