// import { StrictMode } from "react";
// import ReactDOM from "react-dom";

// import App from "./App";

// const rootElement = document.getElementById("root");
// ReactDOM.render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
//   rootElement
// );

import React from "react";
import ReactDOM from "react-dom";
import "/public/styles.css";

// code to create a list
const rootElement = document.getElementById("root");
ReactDOM.render(
  <div>
    <h1> List of good habits</h1>
    <ul>
      <li>Daily brush teeth twice </li>
      <li>Early to bed and early to rise</li>
      <li>Talk softly </li>
    </ul>
  </div>,
  rootElement
);

// code to add the external names and numbers
var fname = "Asmita";
var lName = "Singh";
var num = "31";

ReactDOM.render(
  <div>
    <h1> Hello {fname + " " + lName} </h1>
    <p> Congrats on turning {num} years !</p>
  </div>,
  rootElement
);

// real time curren year

var name = "Asmita Singh";
let date = new Date().getFullYear();

ReactDOM.render(
  <div>
    <p> Created by {name}. </p>
    <p>Copyright {date}.</p>
  </div>,
  rootElement
);

// applying css styling using styles.css

ReactDOM.render(
  <div>
    <h1 className="heading">My Favourite Food:</h1>
    <div>
      <img
        className="food-img"
        src="https://everbake.co/wp-content/uploads/2021/07/CHOLE-CHAWAL.jpg"
        alt="Chole-chawal"
      />
      <img
        className="food-img"
        src="https://www.archanaskitchen.com/images/archanaskitchen/Indian_Non_Veg_Recipes/Butter_chicken_recipe.jpg"
        alt="Butter_Chicken"
      />
      <img
        className="food-img"
        src="https://static.toiimg.com/photo/53251884.cms"
        alt="Paneer-sabji"
      />
    </div>
    <div>
      {" "}
      <button>Click ME for color</button>
    </div>
    <div>
      {" "}
      <button>Click ME for FontStyle</button>
    </div>
  </div>,
  rootElement
);

//inline styling

var customStyle = {
  fontSize: "2rem",
  color: "red"
};
customStyle.color = "blue";

ReactDOM.render(
  <div>
    <h1 style={customStyle}>My Favourite Food:</h1>
    <div>
      <img
        className="food-img"
        src="https://everbake.co/wp-content/uploads/2021/07/CHOLE-CHAWAL.jpg"
        alt="Chole-chawal"
      />
      <img
        className="food-img"
        src="https://www.archanaskitchen.com/images/archanaskitchen/Indian_Non_Veg_Recipes/Butter_chicken_recipe.jpg"
        alt="Butter_Chicken"
      />
      <img
        className="food-img"
        src="https://static.toiimg.com/photo/53251884.cms"
        alt="Paneer-sabji"
      />
    </div>
    <div>
      {" "}
      <button type="button">Click ME for color</button>
    </div>
  </div>,
  rootElement
);

var k = 0;

document.querySelector("button").addEventListener("click", function () {
  //customStyle.color = "red";
  console.log("clicked");
  document.querySelector("h1").setAttribute("style", "color:red");
  // if (k % 2 === 0) {
  //   customStyle.color = "blue";
  //   customStyle.backgroundColor = "white";
  // } else {
  //   customStyle.color = "red";
  //   customStyle.backgroundColor = "black";
  // }
  // k++;
});
