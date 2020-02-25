import * as React from 'react'
import './index.css'
import makeId from '../../utils'

function SliderRanger(props) {
    const [value,
        setValue] = React.useState(0)

    const classGenerated = makeId(10)

    React.useEffect(() => {
        onValueChange()
    });

    function onValueChange(event) {
        if (event != null) 
            setValue(Number(event.target.value))
        document
            .querySelector(`#slider-spotify.${classGenerated}`)
            .style
            .background = `linear-gradient(to right, #4CAF50 0%, #4CAF50 ${value}%, #fff ${value}%, gray 1000%)`
    }

    return <input
        type="range"
        onChange={(event) => onValueChange(event)}
        id="slider-spotify"
        className={classGenerated}
        value={value}></input>
}

export default SliderRanger
