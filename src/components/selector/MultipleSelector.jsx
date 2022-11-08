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
      {/* <select
        options={options}
        value={color.label}
        onChange={(value) => {
          console.log(value);
          setColor(value);
        }}
      /> */}
      <select
    
        data-testid="select"
        value={color}
        onChange={(e) => {
          setColor(e.target.value);
        }}
      >
        <option value="">Select a country</option>
        <option value="Red" selected>
          Red
        </option>
        <option value="Green">Green</option>
      </select>
    </>
  );
};
