import Button from "./Buttons.jsx";
import Notes from "./Notes.jsx";

export default function SelectedTask({
  task,
  onDelete,
  onAddNote,
  onDeleteNote,
  notes
}) {
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
    <div className=" w-[35rem] m-24">
      <header className=" pb-4 mb-4 border-b-2 border-stone-300">
        <div className=" flex items-center justify-between">
          <h1 className="text-5xl font-bold text-[#296d9b] uppercase mb-2">
            {task.title}
          </h1>
          <Button onClick={onDelete}>Delete</Button>
        </div>
        <p className="mb-1 text-stone-400/50">
          Task starts in: {formattedStarteDate}
        </p>
        <p className="mb-8 text-stone-400/50">
          Your deadline in: {formattedEndDate}
        </p>
        <p className="text-[#91c7ea] whitespace-pre-wrap mb-16">
          {task.description}
        </p>
      </header>
      <Notes onAdd={onAddNote} onDelete={onDeleteNote} notes={notes} />
    </div>
  );
}
