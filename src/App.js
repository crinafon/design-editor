import { useState } from "react";
import "./App.css";

function App() {
  const [text, setText] = useState("");
  const [bg, setBg] = useState("black");
  const [font, setFont] = useState("white");
  const [fontSize, setFontSize] = useState(16);

  const handleChange = (e) => {
    console.log(e.target.value);
    setText(e.target.value);
  };

  const handleBgColor = (e) => {
    console.log(e.target.value);
    setBg(e.target.value);
  };

  const handleFontColor = (e) => {
    setFont(e.target.value);
  };

  const handleFontSize = (e) => {
    setFontSize(e.target.value);
  };

  return (
    <div className="App">
      <div className="design-container">
        <div className="controls-container">
          <label htmlFor="color">Choose Background Color</label>
          <input type="color" id="color" onChange={handleBgColor}></input>
          <label>Choose Font Color</label>
          <input
            type="color"
            onChange={handleFontColor}
            defaultValue="white"
          ></input>
          <label>Choose Font Size</label>
          <input
            type="range"
            min="16"
            max="48"
            onChange={handleFontSize}
          ></input>
          <textarea
            onChange={handleChange}
            rows="10"
            style={{ width: "20rem", resize: "none", width: "100%" }}
          ></textarea>
        </div>
        <div style={{ width: "50%" }}>
          <textarea
            readOnly
            style={{
              width: "100%",
              height: "100%",
              margin: "0",
              resize: "none",
              backgroundColor: bg,
              color: font,
              fontSize: `${fontSize}px`,
            }}
            value={text}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
