import React from "react";
import Box from "./Box";
import Boxes from "./Boxes";
import "./App.css";

function App() {
  const [squares, setSquares] = React.useState(Boxes);

  function toggle(id) {
    setSquares((prevSquares) => {
      return prevSquares.map((square) => {
        return square.id === id ? { ...square, on: !square.on } : square;
      });
    });
  }

  const squareElements = squares.map((square) => (
    <Box key={square.id} id={square.id} on={square.on} toggle={toggle} />
  ));

  return <main>{squareElements}</main>;
}

export default App;
