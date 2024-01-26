import { useState } from "react";

export default function NewNote({ onAdd }) {

    const [enteredNote , setEnteredNote] = useState('')

    function handleChange(event){
        setEnteredNote(event.target.value)
    }

    function handleClick(){
        if(enteredNote.trim()===''){
            return;
        }
        onAdd(enteredNote)
        setEnteredNote('')
    }

  return (
    <div className=" flex items-center gap-4">
      <input
        onChange={handleChange}
        value={enteredNote}
        type="text"
        className=" w-64 px-2 py-1 text-slate-300 rounded-xl border border-blue-500 bg-slate-800/40"
      />
      <button
        onClick={handleClick}
        className="text-stone-400 px-2 py-1 rounded-xl bg-slate-800/40 hover:text-stone-50">
        add task
      </button>
    </div>
  );
}
