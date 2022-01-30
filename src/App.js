
import Accessories from './components/Accessories';
import Alpaca from './components/Alpaca';
import Styles from './components/Styles';
import { AssetProvider, useDefaultContext } from './Context';
import { allParts,hair,ears,backgrounds,accessories,eyes,mouth,neck,leg } from './components/config';
import { useRef } from 'react';
import {exportComponentAsPNG} from 'react-component-export-image'


function App() {
  const {style,setStyle} = useDefaultContext();
  const getRandomStyle = () =>{
   
  setStyle(prev => ({...prev,hair:randomStyle(hair)}));
  setStyle(prev => ({...prev,accessory:randomStyle(accessories)}));
  setStyle(prev => ({...prev,background:randomStyle(backgrounds)}));
  setStyle(prev => ({...prev,eye:randomStyle(eyes)}));
  setStyle(prev => ({...prev,ear:randomStyle(ears)}));
  setStyle(prev => ({...prev,mouth:randomStyle(mouth)}));
  setStyle(prev => ({...prev,neck:randomStyle(neck)}));
  setStyle(prev => ({...prev,leg:randomStyle(leg)}));
    
  }

  const randomStyle = (body) => {
    const length = Object.keys(body).length;
    const randomHair = Math.floor(Math.random() * length);
    let text = Object.keys(body)[randomHair]
    
    return body[text];
  }

  
  return (
    
    <div className="App">
      <div className="wrapper">
          <div className="alpaca-container">
            <Alpaca/>
            <div className="alpaca-btns">
              <button onClick={getRandomStyle}>Random</button>
              <button>Download</button>
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
