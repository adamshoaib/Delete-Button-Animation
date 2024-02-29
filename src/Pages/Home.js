import React, { useRef } from "react";
import "./Home.css";
import Done from "./approve.svg";

const Home = () => {
  const buttonRef = useRef(null);
  const labelRef = useRef(null);
  const paperRef = useRef(null);
  const doneRef = useRef(null);
  const binRef = useRef(null);
  const successLabelRef = useRef(null);

  const handelDeleteClick = () => {
    if (buttonRef.current) {
      buttonRef.current.classList.add("paper-top-animation");
      labelRef.current.classList.add("paper-top-animation-label");
      paperRef.current.classList.add("paper-torn-enable");
      doneRef.current.classList.add("animate-done");
      binRef.current.classList.add("enable-bin");
      successLabelRef.current.classList.add("show-destroyed-label");
    }

    setTimeout(() => {
      buttonRef.current.classList.remove("paper-top-animation");
      labelRef.current.classList.remove("paper-top-animation-label");
      paperRef.current.classList.remove("paper-torn-enable");
    }, 2000);

    setTimeout(() => {
      doneRef.current.classList.remove("animate-done");
      binRef.current.classList.remove("enable-bin");
      successLabelRef.current.classList.remove("show-destroyed-label");
    }, 3000);
  };
  return (
    <>
      <h3 className="header">Delete Button Animation</h3>
      <div className="container">
        <div className="sub-container">
          <div
            ref={buttonRef}
            className="paper-top"
            onClick={handelDeleteClick}
          >
            <p ref={labelRef} className="delete-label">
              DELETE
            </p>
          </div>
          <div ref={binRef} className="bin">
            <p ref={successLabelRef} className="destroyed-label">
              Destroyed
            </p>
            <div ref={paperRef} className="paper-torn">
              <div className="paper-strip" />
              <div className="paper-strip" />
              <div className="paper-strip" />
              <div className="paper-strip" />
              <div className="paper-strip" />
              <div className="paper-strip" />
              <div className="paper-strip" />
            </div>
          </div>
          <img
            ref={doneRef}
            className="done"
            src={Done}
            width={40}
            height={40}
          />
        </div>
      </div>
    </>
  );
};

export default Home;
