import React from 'react';

function CardStandard ({data, note}){    
    return (
        <div className="container">
            <div className='top' style={{backgroundColor: data.color}}>{data.name}</div>
            <div className='middle' style={{backgroundColor: data.color}}>
                <div className='rub'>руб. </div>
                <span className='price'>{data.price}</span><span className='monthly'> /мес.</span>
            </div>
            <div className='bottom'><span>до </span>{data.speed}<span> Мбит/сек</span></div>
            <div className='note'>{note}</div>
        </div>
    )
    }
    export default CardStandard;