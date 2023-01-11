import React from "react";
import HogBoss from "./HogBoss";

function App() {
  return (
    <div className="App">
      <HogBoss  />
    </div>
  );
}

export default App;



// MasterHog -- 
// name = prop or just data
// weight = prop or just data
// eye color => STATE that initializes with the button click

// BabyHog
// Has an eyeColor received from its parent => STATE comes from its parent, but for the child, no change
// Has a hobby assigned by its parent => Props from the data.js file
// Has a name given by its parent => Props from the data.js file
// Has a variable weight, that can be changed via buttons => STATE initializes at 0