import React,{useEffect, useState} from 'react';
import {hair,ears,accessories,backgrounds,eyes,leg,mouth,neck} from './config'
import Button from './Buttons/Button';
import { useDefaultContext } from '../Context';
import './styles.css'

const Styles = () => {
  const {style,setStyle,bodyPart} = useDefaultContext();

  const [text,setText] = useState('default');
  

  useEffect(() =>{
    console.log('inside styles: ',text);
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
        {Object.keys(backgrounds).map((item,index) => 
        <Button 
        className='style-btn'
         key={index} 
         onClick={(data) => setText(data)}
         text={item}/>)
         }
      </div>)
      break;
    case'hair':
      return (<div className='style-container'>
        <h2>Hair</h2>
        {Object.keys(hair).map((item,index) => 
        <Button 
        className='style-btn'
         key={index} 
         onClick={(data) => setText(data)}
         text={item}/>)
         }
      </div>)
      break;
    case 'ear':
      return (<div className='style-container'>
        <h2>Ear</h2>
        {Object.keys(ears).map((item,index) => 
        <Button 
        className='style-btn'
         key={index} 
         onClick={(data) => setText(data)}
         text={item}/>)
         }
      </div>)
      
    case 'eye':
      return (<div className='style-container'>
        <h2>Eye</h2>
        {Object.keys(eyes).map((item,index) => 
        <Button 
        className='style-btn'
         key={index} 
         onClick={(data) => setText(data)}
         text={item}/>)
         }
      </div>)
      
    case 'mouth':
      
      return (<div className='style-container'>
        <h2>Mouth</h2>
        {Object.keys(mouth).map((item,index) => 
        <Button
        className='style-btn' 
         key={index} 
         onClick={(data) => setText(data)}
         text={item}/>)
         }
      </div>)
      
      case 'neck':
        return (<div className='style-container'>
          <h2>Neck</h2>
          {Object.keys(neck).map((item,index) => 
          <Button 
          className='style-btn'
           key={index} 
           onClick={(data) => setText(data)}
           text={item}/>)
           }
        </div>)
    case 'leg':
      return (<div className='style-container'>
        <h2>Leg</h2>
        {Object.keys(leg).map((item,index) => 
        <Button 
        className='style-btn'
         key={index} 
         onClick={(data) => setText(data)}
         text={item}/>)
         }
      </div>)
    case 'accessory':
      return (<div className='style-container'>
        <h2>Accessories</h2>
        {Object.keys(accessories).map((item,index) => 
        <Button 
        className='style-btn'
         key={index} 
         onClick={(data) => setText(data)}
         text={item}/>)
         }
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
