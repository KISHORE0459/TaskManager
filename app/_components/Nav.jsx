"use client";
import Image from "next/image";
import Link from "next/link";
import { MdMenu } from "react-icons/md";
import { useState } from "react";
import { set } from "react-hook-form";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="w-full h-fit p-5 flex flex-row justify-center items-center border-b-2 border-gray-900">
      <nav className="w-full md:w-[70%] flex flex-row justify-between items-center">
        <Link href={"/"} className="flex flex-row items-center gap-x-2">
          <Image
            src="https://w7.pngwing.com/pngs/185/850/png-transparent-task-computer-icons-tasks-s-angle-text-microsoft-office-thumbnail.png"
            height={60}
            width={60}
            alt="task logo image"
            className="rounded-[50%]"
          />
          <h2 className="text-[20px]">Task Manager</h2>
        </Link>
        <div className="flex flex-row relative">
          <div className="md:hidden">
            <MdMenu
              onClick={() => {
                setIsOpen((state) => !state);
              }}
              className="w-6 h-6 hover:cursor-pointer"
            />
          </div>
          <ul
            className={`flex-col md:gap-x-10 md:flex md:flex-row ${
              isOpen
                ? "flex absolute top-10 w-[200px] items-start justify-start bg-gray-700 p-2 gap-y-2 right-[-100%]"
                : "hidden justify-around"
            } transition-transform duration-1000`}
          >
            <li className="text-[17px] hover:text-orange-400">
              <Link href={"/addtask"}>Create Task</Link>
            </li>
            <li className="text-[17px] hover:text-orange-400">
              <Link href={"/tasks"}>Tasks</Link>
            </li>
            <li className="text-[17px] hover:text-orange-400">
              <Link href={"/about"}>About</Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
