import * as React from 'react';
import './index.css';
import faker from 'faker';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPause, faPlay} from "@fortawesome/free-solid-svg-icons";

function Card() {

    const [icon,
        setIcon] = React.useState(faPause)

    function changeIcon() {
        (icon === faPause)
            ? setIcon(faPlay)
            : setIcon(faPause)
    }
    return (
        <div className="card">
            <img
                className="card-img"
                src={faker
                .image
                .avatar()}
                alt=""/>
            <div className="card-footer">
                <p className="title">
                    Here Comes The Sun
                </p>
                <p className="description">
                    Start your day with The Beatles
                </p>
                <button onClick={changeIcon} className="card-btn">
                    <FontAwesomeIcon icon={icon}/>
                </button>
            </div>
        </div>
    );
}

export default Card;
