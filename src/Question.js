import React from "react";

const Question = ({setAnswer}) => {
  return (
    <div
      className="flex flex-col max-w-md mx-auto p-10 m-10 bg-gray-700 rounded-2xl">
      <span className="mb-5 font-semibold text-white">¿Firmaste para habilitar el referendum?</span>
      <div className={"flex flex-row justify-around"}>
        <button onClick={() => {setAnswer(true)}} className="bg-gray-300 rounded-3xl py-2 px-5 hover:bg-polisBlue focus:outline-none focus:ring-2 focus:ring-polisBlue focus:ring-opacity-50 hover:text-white hover:font-semibold">Si</button>
        <button onClick={() => {setAnswer(false)}}  className="bg-gray-300 rounded-3xl py-2 px-5 hover:bg-polisBlue focus:outline-none focus:ring-2 focus:ring-polisBlue focus:ring-opacity-50 hover:text-white hover:font-semibold">No</button>
      </div>
    </div>
  );
};

export default Question;
