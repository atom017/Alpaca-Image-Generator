
import Accessories from './components/Accessories';
import Alpaca from './components/Alpaca';
import Styles from './components/Styles';
import { AssetProvider, useDefaultContext } from './Context';
import { allParts,hair,ears,backgrounds,accessories,eyes,mouth,neck,leg } from './components/config';
import { useEffect, useRef } from 'react';
import {exportComponentAsPNG} from 'react-component-export-image'


function App() {
  const {style,setStyle,btnPair,setBtnPair} = useDefaultContext();
  const componentRef = useRef()

  const getRandomStyle = () =>{
  const randAccess = randomStyle(accessories);
  const randBg = randomStyle(backgrounds);
  const randEar = randomStyle(ears);
  const randEye = randomStyle(eyes);
  const randHair = randomStyle(hair);
  const randLeg = randomStyle(leg);
  const randMouth = randomStyle(mouth);
  const randNeck = randomStyle(neck);
 
   
  setStyle(prev => ({...prev,accessory:randAccess[0]}));
  setBtnPair((prev) => ({...prev,accessory:randAccess[1]}))

  setStyle(prev => ({...prev,background:randBg[0]}));
  setBtnPair((prev) => ({...prev,background:randBg[1]}))

  setStyle(prev => ({...prev,ear:randEar[0]}));
  setBtnPair((prev) => ({...prev,ear:randEar[1]}))

  setStyle(prev => ({...prev,eye:randEye[0]}));
  setBtnPair((prev) => ({...prev,eye:randEye[1]}))

  setStyle(prev => ({...prev,hair:randHair[0]}));
  setBtnPair((prev) => ({...prev,hair:randHair[1]}))

  setStyle(prev => ({...prev,leg:randLeg[0]}));
  setBtnPair((prev) => ({...prev,leg:randLeg[1]}))

  setStyle(prev => ({...prev,mouth:randMouth[0]}));
  setBtnPair((prev) => ({...prev,mouth:randMouth[1]}))

  setStyle(prev => ({...prev,neck:randNeck[0]}));
  setBtnPair((prev) => ({...prev,neck:randNeck[1]}))
  
    
  }


  const randomStyle = (body) => {
    const length = Object.keys(body).length;
    const randomPart = Math.floor(Math.random() * length);
    let text = Object.keys(body)[randomPart]
    return [body[text],randomPart];
  }

  
  return (
    
    <div className="App">
      <div className="wrapper">
          <div className="alpaca-container">
            <Alpaca ref={componentRef}/>
            <div className="alpaca-btns">
              <button onClick={getRandomStyle}>Random</button>
              <button onClick={() => exportComponentAsPNG(componentRef)}>Download</button>
            </div>
        </div>
        <div className='customizable'>
          <Accessories/>
          <Styles/>
        </div>
        
      </div>
     
    </div>
    
  );
}

export default App;
