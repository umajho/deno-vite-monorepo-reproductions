import { type Component, createSignal } from "solid-js";

export const Counter: Component = () => {
  const [count, setCount] = createSignal(0);

  return (
    <button onClick={() => setCount((count) => count + 1)}>
      count is {count()}
    </button>
  );
};
