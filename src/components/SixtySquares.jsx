import React, { useEffect, useState } from "react";
import { Square } from "react-bootstrap-icons";

const SixtySquares = () => {
  const totalNumberOfSquares = 60;
  const numberOfSquaresPerRow = 10;
  const [color, setColor] = useState(Array(totalNumberOfSquares).fill("black"));
  const [currentIndex, setCurrentIndex] = useState(0);
  const createRows = () => {
    let newRows = [];
    for (let i = 0; i < totalNumberOfSquares; i += numberOfSquaresPerRow) {
      newRows.push(color.slice(i, numberOfSquaresPerRow + i));
    }
    return newRows;
  };
  useEffect(() => {
    const interval = setTimeout(() => {
      setColor((prevColor) => {
        let newColor = [...prevColor];
        newColor[currentIndex] = "blue";
        return newColor;
      });
      setCurrentIndex((prevIndex) => {
        if (prevIndex == totalNumberOfSquares - 1) {
          setColor(Array(totalNumberOfSquares).fill("black"));
        } else {
          return prevIndex + 1;
        }
      });
    }, 100);

    return () => clearInterval(interval);
  }, [currentIndex]);
  return (
    <table
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        flexDirection: "column",
      }}
    >
      {createRows().map((row, rowIndex) => (
        <tr key={rowIndex}>
          {row.map((square, squareIndex) => (
            <td
              key={squareIndex}
              style={{
                backgroundColor: square,
                height: "1rem",
                width: "1rem",
                border: "1px solid white",
              }}
            ></td>
          ))}
        </tr>
      ))}
    </table>
  );
};
export default SixtySquares;
