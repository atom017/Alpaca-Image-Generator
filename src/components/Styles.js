import React,{useEffect, useState} from 'react';
import {hair,ears,accessories,backgrounds,eyes,leg,mouth,neck} from './config'

import { useDefaultContext } from '../Context';
import './styles.css'

const Styles = () => {
  const {style,setStyle,bodyPart,btnPair,setBtnPair} = useDefaultContext();
  const [activeId,setActiveId] = useState(0);
  const [text,setText] = useState('default');
  
  const handleStyleClick = (styleText,i) =>{
    setText(styleText);
    
    switch(bodyPart){
      case 'hair':
        setBtnPair(prev => ({...prev,hair:i}))
        break;
      case 'ear':
        setBtnPair(prev => ({...prev,ear:i}))
        break;
      case 'eye':
        setBtnPair(prev => ({...prev,eye:i}))
        break;

      case 'mouth':
        setBtnPair(prev => ({...prev,mouth:i}))
        break;
      case 'neck':
        setBtnPair(prev => ({...prev,neck:i}))
        break;
      case 'leg':
        setBtnPair(prev => ({...prev,leg:i}))
        break;
      
      case 'background':
        setBtnPair(prev => ({...prev,background:i}))
        break;

      case 'accessory':
        setBtnPair(prev => ({...prev,accessory:i}))
        break;

    }
    
    
  }
  const BtnProducer = (obj) =>{
   
    return Object.keys(obj).map((item,index) => 
       { 
         return <button 
        className='style-btn'
         key={index} 
         onClick={() =>handleStyleClick(item,index)}
         className={index === activeId ?'active style-btn':'style-btn'}
         >{item}</button>
       } )
  }

  useEffect(()=>{
    
    setActiveId(btnPair[bodyPart])
    //setActiveId(0);
  },[btnPair])

  useEffect(() =>{
    setActiveId(btnPair[bodyPart])
  },[bodyPart])

  useEffect(() =>{
    
    switch(bodyPart){
      case 'hair':
        setStyle(prev => ({...prev,hair:`${hair[text]}`}));
        break;
      case 'ear':
        setStyle(prev => ({...prev,ear:`${ears[text]}`}));
        break;
      case 'eye':
        setStyle(prev => ({...prev,eye:`${eyes[text]}`}));
        break;
      case 'background':
        setStyle(prev => ({...prev,background:`${backgrounds[text]}`}));
        break;
      case 'mouth':
        setStyle(prev => ({...prev,mouth:`${mouth[text]}`}));
        break;
      case 'neck':
        setStyle(prev => ({...prev,neck:`${neck[text]}`}));
        break;
      case 'leg':
          setStyle(prev => ({...prev,leg:`${leg[text]}`}));
          break;
      case 'accessory':
          setStyle(prev => ({...prev,accessory:`${accessories[text]}`}));
          break;
      default:
        console.log('No case')
    }
    
   
  },[text])
  
  switch(bodyPart){
    case'background':
      return (<div className='style-container'>
        <h2>Background</h2>
        {BtnProducer(backgrounds)}
      </div>)
      
    case'hair':
      return (<div className='style-container'>
        <h2>Hair</h2>
        {BtnProducer(hair)}
      </div>)
     
    case 'ear':
      return (<div className='style-container'>
        <h2>Ear</h2>
        {BtnProducer(ears)}
      </div>)
      
    case 'eye':
      return (<div className='style-container'>
        <h2>Eye</h2>
        {BtnProducer(eyes)}
      </div>)
      
    case 'mouth':
      
      return (<div className='style-container'>
        <h2>Mouth</h2>
        {BtnProducer(mouth)}
      </div>)
      
      case 'neck':
        return (<div className='style-container'>
          <h2>Neck</h2>
          {BtnProducer(neck)}
        </div>)
    case 'leg':
      return (<div className='style-container'>
        <h2>Leg</h2>
        {BtnProducer(leg)}
      </div>)
    case 'accessory':
      return (<div className='style-container'>
        <h2>Accessories</h2>
        {BtnProducer(accessories)}
      </div>)
    default :
        return <h2>nothing to show</h2>
    
  }
  // return (
  //     <div>
       
  //       {
  //       Object.keys(hair).map((item,index) => 
  //       <Button 
  //       key={index} 
  //       onClick={(data) => setText(data)}
  //       text={item}/>)}
  //     </div>
  // );
};

export default Styles;
