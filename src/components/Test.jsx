import React, { useState } from "react";

const Test = () => {
  const [arr, setArr] = useState([1, 2, 3, 4, 5]);
  const [position, setPosition] = useState("");
  const [number, setNumber] = useState(null);
  const [added, setAdded] = useState(false);

  const handleClick = () => {
    for (var i = 0; i < arr.length; i++) {
      if (i == position) {
        arr[i] = number;
      }
    }
    setAdded(!added);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter position"
        onChange={(e) => setPosition(e.target.value)}
      />
      <input
        type="text"
        placeholder="Enter Number"
        onChange={(e) => setNumber(e.target.value)}
      />
      <button onClick={handleClick}>Add</button>
      <br />
      <br />
      <div>{JSON.stringify(arr)}</div>
    </div>
  );
};

export default Test;
