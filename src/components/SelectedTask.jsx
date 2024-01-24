import Button from "./Buttons.jsx";

export default function SelectedTask({ task }) {
  //const to formatted date to be more readable
  const formattedStarteDate = new Date(task.startDate).toLocaleDateString(
    "en-US",
    {
      year: "numeric",
      month: "short",
      day: "numeric",
    }
  );
  const formattedEndDate = new Date(task.startDate).toLocaleDateString(
    "en-US",
    {
      year: "numeric",
      month: "short",
      day: "numeric",
    }
  );

  return (
    <div className=" w-[35rem] mt-16">
      <header className=" pb-4 mb-4 border-b-2 border-stone-300">
        <div className=" flex items-center justify-between">
          <h1 className="text-4xl font-bold text-[#245f87] mb-2">
            {task.title}
          </h1>
          <Button>
            Delete
          </Button>
        </div>
        <p className="mb-4 text-stone-400">
          Task starts in: {formattedStarteDate}
        </p>
        <p className="mb-4 text-stone-400">
          Your deadline in: {formattedEndDate}
        </p>
        <p className="text-stone-500 whitespace-pre-wrap">{task.description}</p>
      </header>
      tasks
    </div>
  );
}
