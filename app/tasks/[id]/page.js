import React from "react";
import Task from "./Task";
import { getTask } from "@/app/_services/service";

const page = async ({ params }) => {
  const { id } = await params;
  const data = await getTask(id);
  return (
    <div className="w-full flex items-center justify-center">
      {data && <Task task={data} />}
    </div>
  );
};

export default page;
