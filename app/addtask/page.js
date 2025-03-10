import AddTask from "./AddTask";

const page = () => {
  return (
    <div className="p-5 flex flex-col gap-5">
      <h2 className="text-3xl">Create And Manage Tasks</h2>
      <AddTask />
    </div>
  );
};

export default page;
