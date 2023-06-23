import React, { useState } from "react";
import styles from "../styles/StartingPoint.module.css";
import btnStyles from "../styles/Button.module.css";

function StartingPoint({ setPostcodes }) {
  const [startingPoint, setStartingPoint] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    setPostcodes(startingPoint);
  };

  return (
    <div>
      <h2 className={styles.SubHeading}>
        Please enter your starting point postcode to get started.
      </h2>

      {/* Simple form that takes the starting point postcode and adds it as the first intem of the postcodes array */}
      <form onSubmit={handleSubmit}>
        <input
          className={styles.Input}
          placeholder="Enter postcode"
          value={startingPoint}
          onChange={(event) => setStartingPoint(event.target.value)}
        />
        <button
          className={`${btnStyles.Button} ${btnStyles.Green}`}
          type="submit"
        >
          Add
        </button>
      </form>
    </div>
  );
}

export default StartingPoint;
