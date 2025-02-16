import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js"; // Only needed if using Bootstrap's JavaScript components
import StarRating from "./StarRating";
import "./styles.css";
import { useState } from "react";

export default function App() {
  const [checked, setChecked] = useState(0);
  const [count, setCount] = useState(5);
  const [hoveredStar, setHoveredStar] = useState(0);

  const handleClick = (index) => {
    console.log({ index });
    setChecked(index + 1);
  };

  const handleChange = (e) => {
    console.log(e.target.value);
    setCount(+e.target.value);
  };

  return (
    <div className="App">
      Select Rating Count
      <input
        type="number"
        className="m-2"
        onChange={(e) => {
          handleChange(e);
        }}
      />
      <div className="d-flex m-2 col-md-12">
        {[...Array(count)].map((_, index) => (
          <button
            onClick={() => handleClick(index)}
            onMouseEnter={() => setHoveredStar(index)}
            onMouseLeave={() => setHoveredStar(-1)}
          >
            <StarRating
              isFilled={
                hoveredStar >= 0 ? index <= hoveredStar : index < checked
              }
              key={index}
            />
          </button>
        ))}
      </div>
    </div>
  );
}
