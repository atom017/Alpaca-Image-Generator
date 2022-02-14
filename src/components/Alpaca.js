import React,{useEffect} from 'react';
import { useDefaultContext } from '../Context';
import './Alpaca.css'
const Alpaca = React.forwardRef((props,ref) => {
  
  const {style} = useDefaultContext();
 
  const {accessory,background,ear,eye,hair,mouth,neck,leg} = style;
  console.log(ref);
  return (
      <div className='alpaca' ref={ref}>
          
          <img 
          className='background'
          src={require(`../assets/backgrounds/${background}`)} 
          alt="logo" />
          <img 
          className='accessory'
          src={require(`../assets/accessories/${accessory}`)} 
          alt="logo" />
          <img 
          className='ear'
          src={require(`../assets/ears/${ear}`)} 
          alt="logo" />
           <img
           className='eye' 
          src={require(`../assets/eyes/${eye}`)} 
          alt="logo" />
          <img
           className='hair' 
          src={require(`../assets/hair/${hair}`)} 
          alt="logo" />
           <img
           className='nose' 
          src={require(`../assets/nose.png`)} 
          alt="logo" />
          <img
           className='leg' 
          src={require(`../assets/leg/${leg}`)} 
          alt="logo" />
          <img
           className='mouth' 
          src={require(`../assets/mouth/${mouth}`)} 
          alt="logo" />
          <img
           className='neck' 
          src={require(`../assets/neck/${neck}`)} 
          alt="logo" />
      </div>
  );
});

export default Alpaca;
