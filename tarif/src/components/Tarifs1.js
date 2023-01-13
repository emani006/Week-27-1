import React from 'react';
import CardPlus from './CardPlus';
import CardStandard from './CardStandard';

function Tarifs(props) {
    const note = 'Объем включенного трафика не ограничен';

if (props.price === 550) {
    return (
        <CardPlus data={props} note={note}/>
        );
} else {
    return (
        <CardStandard data={props} note={note}/>
        );
    }   
} 
    export default Tarifs;  