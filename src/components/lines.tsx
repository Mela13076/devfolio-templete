import React from "react";

const Lines = () => {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none flex items-center justify-around">
      <span className="flex h-full w-px animate-line1 bg-stroke dark:bg-strokedark"></span>
      <span className="flex h-full w-px animate-line2 bg-stroke dark:bg-strokedark"></span>
      <span className="flex h-full w-px animate-line3 bg-stroke dark:bg-strokedark"></span>
    </div>
  );
};

export default Lines;
