import Link from "next/link";
import { cmpDates } from "../_services/utils";

const Tasks = async ({ task }) => {
  const remaingdates = await cmpDates(task.deadline);
  const completed = task?.Tasks?.length <= 0 ? true : false;
  return (
    <Link
      href={`/tasks/${task.id}`}
      className={`w-[300px] shadow-sm shadow-white flex flex-col gap-2 p-2 m-2 rounded-md hover:shadow-sky-300 hover:scale-x-105 ${
        remaingdates <= 0 && !completed
          ? " border-2 border-b-red-500"
          : remaingdates == 1 && !completed
          ? "border-2 border-b-red-300"
          : ""
      }`}
    >
      <div className="w-full mx-1 flex justify-between items-center">
        <h2 className="text-xl font-semibold">{task.TaskName}</h2>
        <h2 className="text-[17px] text-red-400">{String(task.deadline)}</h2>
      </div>
      <div className="w-full h-full">
        {task?.Tasks?.length > 0 ? (
          task?.Tasks.slice(0, 3).map((tsk) => (
            <div key={tsk.task}>
              <h2>{tsk.task}</h2>
            </div>
          ))
        ) : (
          <div className="w-full h-full flex justify-center items-center">
            <h2 className="text-xl text-green-400">Task Completed</h2>
          </div>
        )}
        {remaingdates < 0 && (
          <div className="w-full flex justify-center items-center">
            <h2 className="text-xl text-red-400">Dead Line Passed</h2>
          </div>
        )}
      </div>
    </Link>
  );
};

export default Tasks;
