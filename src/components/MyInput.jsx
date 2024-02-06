/* eslint-disable react/display-name */
import { forwardRef } from "react";

const MyInput = forwardRef((props, ref) => {
  return (
    <>
      <input {...props} ref={ref} className="border" />
    </>
  );
});

export default MyInput;
