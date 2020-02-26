import * as React from 'react'
import './index.css'
import makeId from '../../utils'
// import Moment from 'moment'

function SliderRanger(props) {
    const [value,
        setValue] = React.useState(props.value ?? 0)

    React.useEffect(() => {
        setValue(v => props.value ?? v)
    }, [props.value])

    const classGenerated = makeId(10)
    let slider = document.querySelector(`#slider-spotify.${classGenerated}`)

    function onMouseOver() {
        slider.style.background = `linear-gradient(to right, #4CAF50 0%, #4CAF50 ${value}%, gray ${value}%, gray 100%)`
    }
    function onMouseOut() {
        slider.style.background = `linear-gradient(to right, white 0%, white ${value}%, gray ${value}%, gray 100%)`
    }

    React.useEffect(() => {
        onValueChange()
    });

    function onValueChange(event) {
        slider = document.querySelector(`#slider-spotify.${classGenerated}`);
        if (event != null) {
            setValue(event.target.value)
            props.onValueChange(Number(event.target.value))
            onMouseOver()
        } else 
            onMouseOut()
    }

    return (
        <div>
            <input
                type="range"
                onChange={(event) => onValueChange(event)}
                onTouchStart={() => onMouseOver()}
                onTouchEnd={() => onMouseOut()}
                onMouseDown={() => onMouseOver()}
                onMouseUp={() => onMouseOut()}
                onMouseLeave={() => onMouseOut()}
                onMouseEnter={() => onMouseOver()}
                onMouseOut={() => onMouseOut()}
                id="slider-spotify"
                className={classGenerated}
                value={value}/>
        </div>
    )
}

export default SliderRanger
