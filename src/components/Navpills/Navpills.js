import React from "react";
import "./Navpills.css";

const Navpills = props => (
    <div>
        <ul className="nav nav-pills nav-justified">
            <li>Clicky Game</li>
            <li
                className={props.message.indexOf('wrong') !== -1 ? 
                    "desc-wrong" : 
                    props.message.indexOf('correct') !== -1 ?
                        "desc-correct" :
                        "desc-normal"}
            >
                {props.message}
            </li>
            <li>Your Score: {props.playerScore} | High Score: {props.highScore}</li>
        </ul>
    </div>
);

export default Navpills;