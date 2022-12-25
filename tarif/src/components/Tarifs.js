import React from 'react';

function Tarifs(props) {
    const note = 'Объем включенного трафика не ограничен';

if (props.price === 550) {
    return (
        <div className="container1">
            <div className='top' style={{backgroundColor: props.color}}>{props.name}</div>
            <div className='middle' style={{backgroundColor: props.color}}>
                <div className='rub'>руб. </div>
                <span className='price'>{props.price}</span><span className='monthly'> /мес.</span>
            </div>
            <div className='bottom'><span>до </span><span>{props.speed}</span><span> Мбит/сек</span></div>
            <div className='note'>{note}</div>
        </div>
        );
} else {
    return (
        <div className="container">
            <div className='top' style={{backgroundColor: props.color}}>{props.name}</div>
            <div className='middle' style={{backgroundColor: props.color}}>
                <div className='rub'>руб. </div>
                <span className='price'>{props.price}</span><span className='monthly'> /мес.</span>
            </div>
            <div className='bottom'><span>до </span>{props.speed}<span> Мбит/сек</span></div>
            <div className='note'>{note}</div>
        </div>
        );
    }   
} 
    export default Tarifs;  