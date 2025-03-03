import { fetchtasks } from "../_services/service";
import Tasks from "./Tasks";

const page = async () => {
  const data = await fetchtasks();
  return (
    <div className="w-full h-fit flex flex-col items-center gap-y-10 p-5">
      <h2 className="text-2xl font-semibold p-2">Tasks</h2>
      <div className="w-full m-2 md:w-[95%] flex flex-row flex-wrap gap-3 justify-center">
        {data && data.map((dat) => <Tasks key={dat.id} task={dat} />)}
      </div>
    </div>
  );
};

export default page;
