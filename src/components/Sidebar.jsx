import Button from "./Buttons";
export default function Sidebar({onStartAddTask}) {
  return (
    <aside className=" w-1/3 px-8 py-16 bg-[#47B5FF] text-stone-50 md:w-72 rounded-r-xl">
      <h2 className="mb-6 ml-8 font-bold uppercase md:text-xl text-stone-900">
        Your List
      </h2>
      <div>
        <Button onClick={onStartAddTask}>+ Add Task</Button>
      </div>
      <ul></ul>
    </aside>
  );
}
