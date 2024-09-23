import React, { useState } from "react";
import "./DarkMode.css";

export const DarkMode = () => {
  const [img, setImg] = useState("/sun.png");
  const [labelName, setLabelName] = useState("Light Mode");
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleClick = (e) => {
    e.preventDefault();
    setIsDarkMode((prev) => !prev);
    setImg(isDarkMode ? "/sun.png" : "/moon.png");
    setLabelName(isDarkMode ? "Light Mode" : "Dark Mode");
  };

  return (
    <div className={`container ${isDarkMode ? "dark" : "light"}`}>
      <img src={img} height="80px" alt="img" />
      <label>{labelName}</label>
      <button
        onClick={handleClick}
        className={isDarkMode ? "btnDark" : "btnLight"}
      >
        Change Mode
      </button>
    </div>
  );
};
