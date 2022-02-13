import React,{useEffect, useState} from 'react';
import { useDefaultContext } from '../Context';

import { allParts } from './config';
import './Accessories.css'

const Accessories = () => {
   const {bodyPart,setBodyPart} = useDefaultContext();
   const [activeId,setActiveId] = useState(0);
   
   const handleClick = (data,index) =>{
    setBodyPart(data);
    setActiveId(index);
    
   }
   
  return (
      <div className='access-container'>
          <h2>Accessorize The Alpaca's</h2>
          <div className='access-btns'>
              {allParts.map((part,i) => <button 
              key ={i} 
              name={part}
              onClick={() => handleClick(part,i)}
              className={i === activeId ?'active style-btn':'style-btn'}
              >{part}</button>)}
          </div>
          
      </div>
  );
};

export default Accessories;
