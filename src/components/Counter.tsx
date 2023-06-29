"use client";

import { useState, FC } from "react";

const MyButton = () => {
  const [count, setCount] = useState(0);

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

export default function MyApp() {
  return <MyButton />;
}
