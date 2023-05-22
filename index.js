import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Sdata from './sdata';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <>
  <h1 className='heading_style'> List of netflix series</h1>
  {Sdata.map((val)=>{//map can return (value,index,arrary)
    return(
    <App
      imgsrc={val.imgsrc}
      title={val.title}
      sname={val.sname}
      link={val.links}
    />);
  })}
 </>
);