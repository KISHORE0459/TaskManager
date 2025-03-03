"use client";

import { deletedata, updatadata } from "@/app/_services/service";
import { useState } from "react";
import { MdDelete } from "react-icons/md";
import { TiTick } from "react-icons/ti";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

const Task = ({ task }) => {
  const router = useRouter();
  const [tasks, setTask] = useState(task?.Tasks);
  const [completedTask, setCompletedTask] = useState(task?.CompletedTask);
  //updata the data iin the firestore
  async function UpdataData(data) {
    const updatedtasks = await tasks.filter((tsk) => tsk.id !== data.id);
    await completedTask.push(...task.Tasks.filter((tsk) => tsk.id === data.id));
    await setTask(updatedtasks);
    await setCompletedTask(task.CompletedTask);
    updatadata(task.id, {
      ...task,
      Tasks: updatedtasks,
      CompletedTask: completedTask,
    });
  }

  //delete the data in firestore
  async function deletetask(id) {
    await deletedata(id);
    toast.success("Task Deleted Sucessfully !", {
      duration: 2000,
      position: "top-center",
      icon: "❌",
      removeDelay: 1000,
    });
    router.push("/tasks");
  }

  return (
    <div className="w-[90%] md:w-[50%] flex flex-col gap-y-5">
      <div className="w-full flex flex-row justify-between items-center">
        <h3 className="text-2xl capitalize">{task.TaskName}</h3>
        <MdDelete
          onClick={() => {
            deletetask(task.id);
          }}
          className="w-5 h-5 text-red-500 hover:cursor-pointer hover:scale-110"
        />
      </div>
      <div className="flex flex-col w-full gap-y-1 m-2">
        <h2 className="text-[18px]">Tasks TO Be Completed</h2>
        {tasks.map((task) => (
          <div
            key={task.id}
            className="w-[50%] min-w-[250px] flex flex-row items-center justify-between m-2"
          >
            <h2 className="text-[17px]">{task.task}</h2>
            <TiTick
              onClick={(e) => {
                e.preventDefault();
                UpdataData(task);
              }}
              className="w-5 h-5 hover:cursor-pointer hover:text-green-400 hover:scale-110"
            />
          </div>
        ))}
      </div>
      <div className="flex flex-col gap-y-1 m-2">
        <h2 className="text-[18px]">Completed Tasks</h2>
        {completedTask &&
          task.CompletedTask.map((task) => (
            <h2 key={task.id} className="m-2 text-red-300 text-[17px]">
              <strike>{task.task}</strike>
            </h2>
          ))}
      </div>
    </div>
  );
};

export default Task;
