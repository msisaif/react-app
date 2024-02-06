import { useRef } from "react";

export default function Form() {
  const inputRef = useRef(null);

  function handleFocus() {
    inputRef.current.focus();
  }

  return (
    <>
      <div className="grid gap-2 w-20 p-4">
        <input ref={inputRef} className="border" />
        <button onClick={handleFocus} className="px-2 py-1 border">Focus</button>
      </div>
    </>
  );
}
