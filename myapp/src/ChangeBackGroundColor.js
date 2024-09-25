import React from "react";
function ChangeBackGroundColor() {
  return (
    <div>
      <h1>ChangeBackGroundColor</h1>
      <input
        type="color"
        onChange={(e) => {
          document.body.style.backgroundColor = e.target.value;
        }}
      />
    </div>
  );
}
export default ChangeBackGroundColor;
