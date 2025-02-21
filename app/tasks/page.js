import { Are_You_Serious } from "next/font/google";
import { fetchtasks } from "../_services/service";

const page = async () => {
  const data = await fetchtasks();
  console.log(data.Tasks);
  return (
    <div>
      {data.Tasks && data.Tasks.map((dat) => <div key={data.id}>{dat.id}</div>)}
    </div>
  );
};

export default page;
