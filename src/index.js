import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Card from './components/card'
import Player from './components/player/index.js'
import SideBar from './components/sidebar'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faPlusCircle} from "@fortawesome/free-solid-svg-icons"

ReactDOM.render(
    <> 
        <SideBar user='gabriel'/>
        <div className="playlist-button">
                <button className="btn-transparency new-playlist">
                    <FontAwesomeIcon className="icon-new-playlist" icon={faPlusCircle}/>
                    <b>Nova playlist</b>
                </button>
        </div>
        
        <div className="cards">
            <Card/>
            </div>
        <div className="cards">
            <Card/>
        </div>
        <div className="footer">
            <Player name="Here comes the sun" autor="The Beatles" />
        </div>
    </>, 

document.getElementById('root'));

