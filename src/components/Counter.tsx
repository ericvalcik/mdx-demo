"use client";

import { useState, FC } from "react";
import styles from "./Counter.module.css";

const MyButton: () => Promise<JSX.Element> = async () => {
  const [count, setCount] = useState(0);
  const response: { message: string } = await fetch("/api/get-string").then(
    (res) => res.json()
  );

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <div>
      <button onClick={handleClick} className={styles.counter}>
        Clicked {count} times
      </button>
      <p>and btw... {response.message}</p>
    </div>
  );
};

export default async function MyApp() {
  return <MyButton />;
}
