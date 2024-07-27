import React from "react";

const Scroller = ({ steps }: { steps: number }) => {
  const span = [];
  const activeStyle =
    "hover:rotate-0 transition-transform duration-200 hover:size-4 hover:border-4 border-yellow-500 hover:bg-black";

  for (let i = 0; i < steps; i++) {
    span.push(
      <span className="bg-yellow-500 size-3 rotate-45  hover:rotate-0 transition-transform duration-200 hover:size-4 hover:border-4 border-yellow-500 hover:bg-black"></span>
    );
  }

  return (
    <div className="flex flex-col items-center absolute gap-y-6">{span}</div>
  );
};

export default Scroller;
