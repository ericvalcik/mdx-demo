"use client";

import { useState, FC } from "react";

export const Counter: FC<{ init: number }> = ({ init }) => {
  const [count, setCount] = useState(init);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <div>
      <button
        onClick={handleClick}
        style={{
          border: "1px solid #ccc",
          borderRadius: "5px",
          padding: "2px 6px",
          margin: "12px 0 0",
        }}
      >
        Clicked {count} times
      </button>
    </div>
  );
};
