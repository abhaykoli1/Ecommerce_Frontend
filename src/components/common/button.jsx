import React from "react";

const ButtonComponent = ({ text, btnCss }) => {
  return (
    <button
      className={`${btnCss} text-white  bg-black py-2 px-5 min-w-40 focus:border focus:border-white focus:outline  rounded `}
    >
      {text}
    </button>
  );
};

export default ButtonComponent;
