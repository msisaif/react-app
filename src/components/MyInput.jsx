/* eslint-disable react/display-name */
import { forwardRef, useImperativeHandle, useRef } from "react";

const MyInput = forwardRef((props, ref) => {
  const inputRef = useRef(null);

  useImperativeHandle(ref, () => ({
    focus() {
      inputRef.current.focus();
    },
  }));

  return (
    <>
      <input {...props} ref={inputRef} className="border" />
    </>
  );
});

export default MyInput;
