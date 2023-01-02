import React, {useContext } from 'react';
import { BsMoonStarsFill, BsFillSunFill } from "react-icons/bs";
import { themeContext } from '../App';

const ToggleMode = () => {
const context = useContext(themeContext); 
const {theme, toggleTheme} = context;
console.log(theme);
  return (
    <>
    <div id="darkmode">
        <input type="checkbox"  className="checkbox" id="checkbox" onClick={toggleTheme}/>
        <label htmlFor="checkbox" style={{borderColor:theme==='dark'?'gray':'black', backgroundColor:theme==='dark'?'rgba(93, 92, 92, 0.663)':'rgba(173, 173, 173, 0.463)'}} className="label">
            <BsMoonStarsFill color="#f06d55" />
            <BsFillSunFill color="#f06d55" />
            <div className="ball" style={{backgroundColor:theme==='dark'?'lightgray':'rgb(51, 51, 51)'}}></div>
        </label>
    </div>
    </>
  )
}

export default ToggleMode
