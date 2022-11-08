import React from "react";

export const MySelector = () => {
  const options = [
    { value: "red", label: "Red" },
    { value: "green", label: "Green" },
    { value: "blue", label: "Blue" },
  ];
  const [color, setColor] = React.useState("");

  return (
    <>
      <h1>Your favorite color is {color}</h1>
      <select
        data-testid="select"
        value={color}
        onChange={(e) => {
          setColor(e.target.value);
        }}
      >
        <option value="">Select a country</option>
        <option value="Red">Red</option>
        <option value="Green">Green</option>
      </select>
    </>
  );
};
