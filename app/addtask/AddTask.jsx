"use client";
import { addtask as addtaskservice } from "../_services/service";
import { useEffect, useState } from "react";
import { MdDelete } from "react-icons/md";
import { toast } from "react-hot-toast";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { getCurrentDate } from "../_services/utils";
import { convertDate } from "../_services/utils";

const AddTask = () => {
  //task states
  const [taskname, setTaskname] = useState("");
  const [task, setTask] = useState("");
  const [tasklist, setTasklist] = useState([]);
  //data state
  const [selecteddate, setSelectedDate] = useState(null);
  const [deadline, setDeadline] = useState(null);

  useEffect(() => {
    setDeadline(convertDate(new Date()));
    setSelectedDate(new Date());
  }, []);

  function addtask() {
    if (task.length > 0) {
      setTasklist((state) => [...state, { id: state.length, task: task }]);
      setTask("");
    }
    console.log(tasklist);
  }

  function deletetask(id) {
    setTasklist((state) => state.filter((st) => st.id !== id));
  }

  async function submittask() {
    try {
      if (taskname.length <= 0) {
        toast.error("Please Enter Task Name !", {
          duration: 2000,
          position: "top-center",
          removeDelay: 1000,
        });
        return;
      }
      if (tasklist.length <= 0) {
        toast.error("Please Enter Some Tasks !", {
          duration: 2000,
          position: "top-center",
          removeDelay: 1000,
        });
        return;
      }
      await addtaskservice({
        TaskName: taskname,
        Tasks: tasklist,
        CompletedTask: [],
        deadline: deadline,
      });
      await setTaskname("");
      await setTask("");
      await setTasklist([]);
      await setSelectedDate(getCurrentDate);

      toast.success("Task Added Sucessfully !", {
        duration: 2000,
        position: "top-center",
        icon: "✅",
        removeDelay: 1000,
      });
    } catch {
      toast.error("Error in Adding Task", {
        duration: 2000,
        position: "top-center",
        icon: "❌",
        removeDelay: 1000,
      });
    }
  }

  return (
    <div className="w-full h-fit flex flex-col gap-5 mx-auto items-center">
      <form
        action={submittask}
        className="flex flex-col justify-center items-center gap-y-4"
      >
        <div className="flex flex-col gap-y-2">
          <label htmlFor="tasks" className="text-[20px]">
            Tasks
          </label>
          <input
            id="tasks"
            type="text"
            placeholder="Task"
            value={taskname}
            onChange={(e) => {
              setTaskname(e.target.value);
            }}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                document.getElementById("tasklist").focus();
              }
            }}
            className="w-[350px] p-1 rounded outline-none text-black text-[18px]"
          />
        </div>
        <div className="flex flex-col gap-y-5 justify-center items-center">
          <div className="flex flex-col gap-y-2">
            <label htmlFor="tasklist" className="text-[20px]">
              Task List
            </label>
            <input
              id="tasklist"
              type="text"
              placeholder="tasklist"
              value={task}
              onChange={(e) => {
                setTask(e.target.value);
              }}
              className="w-[350px] p-1 rounded outline-none text-black text-[18px]"
            />
          </div>
          <button
            onClick={(e) => {
              e.preventDefault();
              addtask();
            }}
            className="w-fit p-2 border-2 border-white rounded bg-gray-900"
          >
            Add Task
          </button>
          <div className="w-full flex flex-col gap-2">
            {tasklist.length > 0 &&
              tasklist.map((task) => (
                <div
                  key={task.id}
                  className="flex flex-row gap-x-2 items-center justify-between p-1"
                >
                  <h3 className="text-[18px] pt-1">{task.task}</h3>
                  <MdDelete
                    onClick={(e) => {
                      e.preventDefault();
                      deletetask(task.id);
                    }}
                    className="w-4 h-4 text-red-400 hover:cursor-pointer hover:text-red-600 hover:scale-125"
                  />
                </div>
              ))}
          </div>
          <div className="w-full flex flex-col gap-y-2">
            <label htmlFor="tasklist" className="text-[20px]">
              Dead Line
            </label>
            <div>
              <DatePicker
                selected={selecteddate}
                dateFormat={"dd/MM/yyyy"}
                minDate={new Date()}
                onChange={(date) => {
                  setSelectedDate(date);
                  setDeadline(convertDate(date));
                }}
                className="bg-gray-500 p-1 rounded"
              />
            </div>
          </div>
        </div>

        <button className="w-fit p-2 border-2 border-white rounded bg-gray-900 mt-3">
          Submit Task
        </button>
      </form>
    </div>
  );
};

export default AddTask;
