import React,{ useContext,useState } from "react";

const AssetContext = React.createContext();
const AssetProvider = ({children}) =>{
    const [style,setStyle] = useState({
        accessory:'flower.png',
        background:'blue50.png',
        ear:'default.png',
        eye:'default.png',
        hair:'default.png',
        mouth:'default.png',
        neck:'default.png',
        leg:'default.png'

    })
   
    const [bodyPart,setBodyPart] = useState('hair');
    return (
        <AssetContext.Provider
        value={{style,setStyle,bodyPart,setBodyPart}}
        >
            {children}
        </AssetContext.Provider>
    )
}

export const useDefaultContext = () => {
    return useContext(AssetContext)
  }

export {AssetContext,AssetProvider}