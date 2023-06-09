import React from "react";

const BackgroundAnimation = ({ marginLeft }) => (
  <div style={marginLeft ? { marginLeft: "50px" } : { marginLeft: "100px" }}>
    <img
      className=""
      src="/images/bibi.jpeg" // Replace with the path to your image file within the public folder
      alt="Background Animation"
      style={{ width: "350px", height: "450px" }} // Set the desired width and height
    />
  </div>
);

export default BackgroundAnimation;
