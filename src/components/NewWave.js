import React from 'react';
import {Wave} from 'react-animated-text';

const NewWave = (props) => {
    const [pause, setPause] = React.useState(true);
    setTimeout(() => {setPause(false)}, props.delay*1000)
    return(
        <Wave text={props.text} speed={props.speed} iterations={props.iterations} effect={props.effect} effectDuration={props.effectDuration} paused={pause} />
    );
}

export default NewWave;