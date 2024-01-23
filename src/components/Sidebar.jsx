import Button from "./Buttons";
export default function Sidebar({ onStartAddTask, tasks }) {
  return (
    <aside className="w-1/3 px-8 py-16 bg-[#245f87] text-stone-50 md:w-72 rounded-r-xl">
      <h2 className="mb-6 ml-12 font-bold uppercase md:text-xl text-stone-100">
        Your List
      </h2>
      <div>
        <Button onClick={onStartAddTask}>+ Add Task</Button>
      </div>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            <button className=" w-full text-left px-3 py-1 mt-6 rounded-md text-[#ffff] bg-[#1f313c0f] hover:bg-[#1f313ca9]">{task.title}</button>
          </li>
        ))}
      </ul>
    </aside>
  );
}
