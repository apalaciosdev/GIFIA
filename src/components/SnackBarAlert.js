
import React, { useState, forwardRef, useImperativeHandle } from "react";
import "../assets/css/Snackbar.css";

export const SnackBarAlert =  forwardRef((props, ref) => {
  const [showSnackbar, setShowSnackbar] = useState(false);

  useImperativeHandle(ref, () => ({
    show() {
      setShowSnackbar(true);
      setTimeout(() => {
        setShowSnackbar(false);
      }, 2500);
    },
  }));
  
  return (
    <div
      className="snackbar"
      id={showSnackbar ? "show" : "hide"}
      
    >
      
      <div className="message">{props.message}</div>
    </div>
  );
});

export default SnackBarAlert;