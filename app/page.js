import Image from "next/image";
import bg from "../public/bgimage.jpg";
import Link from "next/link";

const page = async () => {
  return (
    <div className="w-full h-auto flex justify-center items-center my-[45px]">
      <div className="text-black flex flex-col gap-3 w-full h-full justify-center items-center">
        <h2 className="font-bold text-2xl text-white">
          Create and Manage Your Tasks
        </h2>
        <Link
          href={"/addtask"}
          className="bg-white rounded w-fit p-2 font-semibold hover:cursor-pointer"
        >
          Add A Task
        </Link>
      </div>
    </div>
  );
};

export default page;
