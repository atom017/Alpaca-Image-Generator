import React,{ useContext,useState } from "react";

const AssetContext = React.createContext();
const AssetProvider = ({children}) =>{
    const [style,setStyle] = useState({
        accessory:'earings.png',
        background:'blue50.png',
        ear:'default.png',
        eye:'default.png',
        hair:'default.png',
        mouth:'default.png',
        neck:'default.png',
        leg:'default.png'

    })

    const [btnPair,setBtnPair] = useState({
        accessory:0,
        background:0,
        ear:0,
        eye:0,
        hair:0,
        mouth:0,
        neck:0,
        leg:0
    })
   
    const [bodyPart,setBodyPart] = useState('hair');
    return (
        <AssetContext.Provider
        value={{style,setStyle,bodyPart,setBodyPart,btnPair,setBtnPair}}
        >
            {children}
        </AssetContext.Provider>
    )
}

export const useDefaultContext = () => {
    return useContext(AssetContext)
  }

export {AssetContext,AssetProvider}