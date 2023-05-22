import React from 'react';
import './App.css';
//Props can access the attribute of user defined attribute of tag
function App(props) {
  return (
    <>
      <div className='cards'>
        <div className='card'>
           <img src={props.imgsrc} alt="pic" className='card_img' ></img>
           <div className='card_info'>
              <span className='card_category'>{props.title}</span>
              <h3 className='card_title'>{props.sname}</h3>
              <a href={props.link} target="_blank" rel='link'>
                 <button> Watch Now</button>
              </a>
                
           </div>
        </div>

      </div>

    </>
   
  );
} 

export default App;
