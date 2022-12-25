import React from 'react';
import tariflist from './components/Tariflist';
import Tarifs from './components/Tarifs';
import "./styles/mainStyle.css";

function App() {

  return (
    <div className='scssClass main'>
      <Tarifs key={tariflist[0].name} name={tariflist[0].name} speed={tariflist[0].speed} price={tariflist[0].price} color={tariflist[0].color}></Tarifs>
      <Tarifs key={tariflist[1].name} name={tariflist[1].name} speed={tariflist[1].speed} price={tariflist[1].price} color={tariflist[1].color}></Tarifs>
      <Tarifs key={tariflist[2].name} name={tariflist[2].name} speed={tariflist[2].speed} price={tariflist[2].price} color={tariflist[2].color}></Tarifs>
      <Tarifs key={tariflist[3].name} name={tariflist[3].name} speed={tariflist[3].speed} price={tariflist[3].price} color={tariflist[3].color}></Tarifs>
    </div>
  );
}

export default App;
