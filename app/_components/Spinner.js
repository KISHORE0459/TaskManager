"use client";
import ClipLoader from "react-spinners/ClipLoader";
const Spinner = () => {
  return (
    <div className="flex justify-center items-center w-full h-[400px]">
      <ClipLoader color="green" size={50} />
    </div>
  );
};

export default Spinner;
