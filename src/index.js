import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Card from './components/card'
import Player from './components/player'

ReactDOM.render(
    <> 
    <div>
        <Card/>
        <Card/>
    </div>
        <div className="footer">
            <Player titulo="Here comes the sun" autor="The Beatles" />
        </div>
    </>, 

document.getElementById('root'));

