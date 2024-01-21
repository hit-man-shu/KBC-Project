import React, { useRef } from "react";
import Modal from "./Modal";

const Start = ({ setUserName }) => {
  const inputRef = useRef();

  const modal = useRef();

  const handleClick = (e) => {
    e.preventDefault();
    let userName = inputRef.current.value;
    if (userName.trim().length === 0) {
      //   alert("Enter a valid userName");
      modal.current.open();
      return;
    } else {
      setUserName(userName);
    }
  };

  return (
    <>
      <Modal ref={modal}>
        <h1 className="modalH1">Invalid Username</h1>
        <p className="modalPara">Please Enter a valid Username</p>
      </Modal>
      <form onSubmit={handleClick} className="start">
        <input
          type="text"
          placeholder="Enter Your Name"
          className="startInput"
          ref={inputRef}
        />
        <button className="startButton" type="submit">
          Start
        </button>
      </form>
    </>
  );
};

export default Start;
