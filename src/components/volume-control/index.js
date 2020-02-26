import React, {useState, useEffect} from 'react'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faVolumeUp, faVolumeMute} from "@fortawesome/free-solid-svg-icons"
import SliderRange from '../slider-range'
import './index.css'
function VolumeControl(props) {
    const [value,
        setValue] = useState(props.value)

    const [isMuted,
        setMuted] = useState(true)

    useEffect(() => {
        setValue(v => props.value ?? v)
    }, [props.value])

    useEffect(() => {
        value > 0
            ? setMuted(false)
            : setMuted(true)
    }, [value])

    return (
        <div className="container">
            <div className="volume-icon">
                <FontAwesomeIcon
                    className="btn-transparency"
                    onClick={() => !isMuted
                    ? setValue(0)
                    : setValue(50)}
                    icon={isMuted
                    ? faVolumeMute
                    : faVolumeUp}/>
            </div>
            <div className="volume">
                <SliderRange value={value} onValueChange={setValue}/>
            </div>
        </div>
    )
}

export default VolumeControl