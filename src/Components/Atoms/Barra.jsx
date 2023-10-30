import React, { useState } from "react";

function Barra({ setBuscador }) {
  return (
    <div>
      <input
        type="text"
        placeholder="Search"
        onChange={(e) => setBuscador(e.target.value)}
      />
    </div>
  );
}

export default Barra;
