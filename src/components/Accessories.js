import React,{useEffect, useState} from 'react';
import { useDefaultContext } from '../Context';
import Button from './Buttons/Button';
import { allParts } from './config';
import './Accessories.css'

const Accessories = () => {
   const {bodyPart,setBodyPart} = useDefaultContext();
 
   
  return (
      <div className='access-container'>
          <h2>Accessorize</h2>
          <div className='access-btns'>
              {allParts.map((part,i) => <Button key ={i} text={part} onClick={(data) => setBodyPart(data)}/>)}
          </div>
          
      </div>
  );
};

export default Accessories;
