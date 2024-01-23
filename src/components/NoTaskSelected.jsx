import image from "../assets//no-projects.png";
import Button from "./Buttons";

export default function NoTaskSelected({onStartAddTask}) {
  return (
    <div className=" mx-28 my-44 text-center w-2/3">
      <img
        className="w-16 h-16 object-contain mx-auto"
        src={image}
        alt="no project selected img"
      />
      <h2 className="text-xl font-bold text-stone-500 my-4">
        No Task Selected
      </h2>
      <p className="text-stone-400 mb-4">
        Select a project or get started with a new one
      </p>
      <p className="mt-8">
        <Button onClick={onStartAddTask} >Create New Task</Button>
      </p>
    </div>
  );
}
