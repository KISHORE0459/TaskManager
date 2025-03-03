import Link from "next/link";

const Tasks = ({ task }) => {
  return (
    <Link
      href={`/tasks/${task.id}`}
      className="w-[300px] shadow-sm shadow-white flex flex-col gap-2 p-2 m-2 rounded-md hover:shadow-sky-300 hover:scale-x-105"
    >
      <h2 className="text-xl font-semibold">{task.TaskName}</h2>
      <div>
        {task.Tasks.slice(0, 3).map((tsk) => (
          <div key={tsk.task}>
            <h2>{tsk.task}</h2>
          </div>
        ))}
      </div>
    </Link>
  );
};

export default Tasks;
