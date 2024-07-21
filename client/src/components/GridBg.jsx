import React from "react";

 function GridBg({children}) {
  return (
    <div className=" w-full dark:bg-black bg-white  dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative " >
      {/* Radial gradient for the container to give a faded look */}
      <div className="absolute pointer-events-none inset-0  dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_70%,black)]"></div>
      {children}
    </div>
  );
}

export default GridBg
