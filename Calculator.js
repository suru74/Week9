import React, { useState } from "react";
import './Calculator.css';
import penguinPic from './Penguin.jpg'; // Import the image

// Button component to render individual buttons
const Button = ({ label, ClickHandle }) => {
  return (
    <button className="ButtonStyle" value={label} onClick={ClickHandle}>
      {label}
    </button>
  );
};

// Main Calculator functional component
const Calculator = () => {
  const [text1, setText] = useState(""); // To hold the current input value
  const [showImage, setShowImage] = useState(false); // To show or hide the image

  // Handle button clicks
  const ClickHandle = (e) => {
    const value = e.target.value;

    // If 'C' is clicked, clear the text
    if (value === "C") {
      setText(""); 
    }
    // If '=' is clicked, evaluate the expression
    else if (value === "=") {
      try {
        setText(eval(text1).toString()); // Evaluate and display result
      } catch (error) {
        setText("Error"); // Display error if the expression is invalid
      }
    }
    // If 'Square' is clicked, calculate the square of the entered number
    else if (value === "Square") {
      setText((parseFloat(text1) ** 2).toString());
    }
    // If 'Show Me' is clicked, toggle the visibility of the image
    else if (value === "Show Me") {
      setShowImage(!showImage);
    }
    // Otherwise, append the clicked value to the text
    else {
      setText(text1 + value);
    }
  };

  return (
    <div className="Calculator">
      {/* Display input value */}
      <div className="screen-row">
        <input type="text" readOnly value={text1} />
      </div>

      {/* Number and operator buttons */}
      <div>
        <Button label="(" ClickHandle={ClickHandle} />
        <Button label="CE" ClickHandle={ClickHandle} />
        <Button label=")" ClickHandle={ClickHandle} />
        <Button label="C" ClickHandle={ClickHandle} />
      </div>

      <div>
        <Button label="1" ClickHandle={ClickHandle} />
        <Button label="2" ClickHandle={ClickHandle} />
        <Button label="3" ClickHandle={ClickHandle} />
        <Button label="+" ClickHandle={ClickHandle} />
      </div>

      <div>
        <Button label="4" ClickHandle={ClickHandle} />
        <Button label="5" ClickHandle={ClickHandle} />
        <Button label="6" ClickHandle={ClickHandle} />
        <Button label="-" ClickHandle={ClickHandle} />
      </div>

      <div>
        <Button label="7" ClickHandle={ClickHandle} />
        <Button label="8" ClickHandle={ClickHandle} />
        <Button label="9" ClickHandle={ClickHandle} />
        <Button label="*" ClickHandle={ClickHandle} />
      </div>

      <div>
        <Button label="." ClickHandle={ClickHandle} />
        <Button label="0" ClickHandle={ClickHandle} />
        <Button label="=" ClickHandle={ClickHandle} />
        <Button label="/" ClickHandle={ClickHandle} />
      </div>

      {/* Add the Square button */}
      <div>
        <Button label="Square" ClickHandle={ClickHandle} />
      </div>

      {/* Add the Show Me button */}
      <div>
        <Button label="Show Me" ClickHandle={ClickHandle} />
      </div>

      {/* Conditionally render the image */}
      {showImage && (
        <div className="image-container">
          <img
            src={penguinPic}
            alt="Penguin"
            style={{ width: "100px", height: "100px", marginTop: "20px" }}
          />
        </div>
      )}
    </div>
  );
};

export default Calculator;
