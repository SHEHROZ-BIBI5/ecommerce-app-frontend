 import React, { useState } from 'react';
import LightButton from "../../assets/website/light-mode-button.png";
import DarkButton from "../../assets/website/light-mode-button.png";
import { useEffect } from 'react';

const DarkMode = () => {
  const [theme ,settheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );

  const element = document.documentElement;

  useEffect(() => {
    if(theme == "dark"){
      element.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      element.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  });

  return (
    <div className="relative w-10 h-10">  
      <img src={LightButton}
        alt="Light Button" onClick={() => {
          settheme(theme === "light" ? "dark" : "light");
        }}
        className={`w-12 cursor-pointer drop-shadow-[1px_1px_1px_rgba(0,0,0,0.1)] transition-all duration-300 absolute right-0 z-10 ${theme === "dark" ? "opacity-0" : "opacity-100"}`}
      /> 
      <img src={DarkButton}
        alt="Dark Button" 
        onClick={() => {
          settheme(theme === "light" ? "dark" : "light");
        }}
        className="w-12 cursor-pointer drop-shadow-[1px_1px_1px_rgba(0,0,0,0.1)] transition-all duration-300 absolute right-0 z-10"
      />
    </div>
  )
}

export default DarkMode;
