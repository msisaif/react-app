import { useRef } from "react";
import MyInput from "./MyInput";

export default function Form() {
  const inputRef = useRef(null);

  function handleFocus() {
    inputRef.current.focus();
  }

  return (
    <>
      <div className="grid gap-2 w-20 p-4">
        <MyInput type="text" placeholder="Enter Name" ref={inputRef} />
        <button onClick={handleFocus} className="px-2 py-1 border">
          Focus
        </button>
      </div>
    </>
  );
}
