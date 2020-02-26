import * as React from 'react';
import './index.css';
import faker from 'faker';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import Music from '../../models/Music'
import {
    faPause,
    faPlay,
    faStepForward,
    faStepBackward,
    faRandom,
    faUndoAlt,
    faHeart,
    faChevronUp,
    faList,
    faDesktop
} from "@fortawesome/free-solid-svg-icons";
import SliderRange from '../slider-range'
import VolumeControl from '../volume-control'
function Player({time, autor, name}) {
    const [love,
        setLove] = React.useState(false);
    const [icon,
        setIcon] = React.useState(faPause)
    const [music,
        setMusic] = React.useState(new Music(time, autor, name))

    function onValueChange(value) {
        music.setTimeLeft(value)
        setMusic(music)
    }

    function getPauseText() {
        return (icon === faPause)
            ? 'Pausar'
            : 'Play'
    }
    function changePause() {
        (icon === faPause)
            ? setIcon(faPlay)
            : setIcon(faPause)
    }
    return (
        <div>
            <div className="player">
                <div className="player-content">
                    <div className="music-foto">
                        <img
                            className="music-img"
                            src={faker
                            .image
                            .avatar()}
                            alt=""/>
                        <button className="btn-img">
                            <FontAwesomeIcon icon={faChevronUp}/>
                        </button>
                    </div>
                    <div className="music">
                        <p className="music-title">
                            {music.name}
                            <FontAwesomeIcon
                                onClick={() => setLove(!love)}
                                className={love
                                ? 'loved'
                                : 'love'}
                                title={love
                                ? 'Tirar das músicas curtidas'
                                : 'Adicionar as músicas curtidas'}
                                icon={faHeart}/>
                            <br/>
                            <span className="music-autor">{music.autor}</span>
                        </p>
                    </div>
                    <div className="controls">
                        <div className="controls-buttons">
                            <button className="btn-transparency" title="Ativar a ordem aletória">
                                <FontAwesomeIcon icon={faRandom}/>
                            </button>
                            <button className="btn-transparency">
                                <FontAwesomeIcon icon={faStepBackward} title="Voltar"/>
                            </button>
                            <button onClick={changePause} className="btn-pause" title={getPauseText()}>
                                <FontAwesomeIcon icon={icon}/>
                            </button>
                            <button className="btn-transparency">
                                <FontAwesomeIcon icon={faStepForward}/>
                            </button>
                            <button className="btn-transparency">
                                <FontAwesomeIcon icon={faUndoAlt}/>
                            </button>
                        </div>
                        <div className="timeline">
                            <SliderRange onValueChange={onValueChange}/>
                        </div>
                    </div>
                    <div className="controls-right">
                        <div className="controls-buttons">
                            <FontAwesomeIcon className="btn-transparency" icon={faList}/>
                            <FontAwesomeIcon className="btn-transparency" icon={faDesktop}/>
                        </div>
                        <VolumeControl/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Player;
