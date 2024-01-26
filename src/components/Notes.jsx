import NewNote from "./NewNote.jsx";

export default function Notes({ notes, onAdd, onDelete }) {
  return (
    <section>
      <h2 className="text-2xl font-bold text-stone-300 mb-4 mt-10">Notes</h2>
      <NewNote onAdd={onAdd} />
      {notes.length === 0 && (
        <p className="text-stone-400 my-4">This Task has no Notes yet.</p>
      )}
      {notes.length > 0 && (
        <ul className="p-4 mt-8 rounded-md bg-slate-500/20">
          {notes.map((note) => (
            <li key={note.id} className="flex justify-between my-4">
              <span className=" text-blue-300">{note.text}</span> <button onClick={()=> onDelete(note.id)} className=" text-slate-400 hover:text-red-400">Clear</button>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
