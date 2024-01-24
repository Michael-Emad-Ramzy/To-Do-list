import Button from "./Buttons";
export default function Sidebar({
  onStartAddTask,
  tasks,
  onSelectTask,
  selectedTaskId,
}) {
  return (
    <aside className="w-1/3 px-8 py-16 bg-[#245f87] text-stone-50 md:w-72 rounded-r-xl">
      <h2 className="mb-6 ml-12 font-bold uppercase md:text-xl text-stone-100">
        Your List
      </h2>
      <div>
        <Button onClick={onStartAddTask}>+ Add Task</Button>
      </div>
      <ul>
        {tasks.map((task) => {
          let cssClasses=" w-full text-left px-3 py-1 mt-6 rounded-md  bg-[#1f313c0f] hover:bg-[#0f263694]";

          if(task.id === selectedTaskId){
            cssClasses += ' bg-[#0f263694]'
          }else {
            cssClasses += ' text-[#ffff]'
          }

          return(
          <li key={task.id}>
            <button
              onClick={()=>onSelectTask(task.id)}
              className={cssClasses}
            >
              {task.title}
            </button>
          </li>
          )
        })}
      </ul>
    </aside>
  );
}
