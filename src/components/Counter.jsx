import { useRef } from "react";

export default function Counter() {
  const ref = useRef(0);

  function handleClick() {
    ref.current += 1;

    console.log(ref.current);
  }

  return (
    <>
      <div>the component doesn’t re-render with every increment</div>
      <button onClick={handleClick}>Click me! {ref.current}</button>
    </>
  );
}
