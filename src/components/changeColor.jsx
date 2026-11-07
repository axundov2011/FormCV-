import React, { useState } from "react";

const ChangeColor = () => {
  const [color, setColor] = useState("red");
  
  

  const handleChange = () => {
    const randomColor =
      "#" + Math.floor(Math.random() * 0xffffff).toString(16).padStart(6, "0");
    setColor(randomColor);
  };

  return (
    <div style={{ backgroundColor: color, minHeight: "100vh", display: "flex", justifyContent: "center", alignItems: "center" }}>
      <button onClick={handleChange}>Change Color</button>
    </div>
  );
};

export default ChangeColor;