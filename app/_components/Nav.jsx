import Image from "next/image";
import Link from "next/link";

const Nav = () => {
  return (
    <div className="w-full h-fit p-5 flex flex-row justify-center items-center border-b-2 border-gray-900">
      <nav className="w-[70%] flex flex-row justify-between items-center">
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
        <div className="flex flex-row">
          <ul className="flex flex-row justify-around items-center gap-x-10">
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
