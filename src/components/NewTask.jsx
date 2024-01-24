import { useRef } from "react";
import Input from "./Input.jsx";
import Modal from "./Modal.jsx";

export default function NewTask({ onAdd , onCancel}) {
  const modal = useRef();

  const title = useRef();
  const description = useRef();
  const startDate = useRef();
  const endDate = useRef();

  function handleSave() {
    const enteredTitle = title.current.value;
    const enteredDescription = description.current.value;
    const enteredStartDate = startDate.current.value;
    const enteredEndDate = endDate.current.value;

    //validation check
    if (
      enteredTitle.trim() === "" ||
      enteredDescription.trim() === "" ||
      enteredStartDate.trim() === "" ||
      enteredEndDate.trim() === ""
    ){
      //show modal
      modal.current.open();
      return;
    }
      onAdd({
        title: enteredTitle,
        description: enteredDescription,
        startDate: enteredStartDate,
        endDate: enteredEndDate,
      });
  }

  return (
    <>
    <Modal ref={modal} buttonCaption="Close">
      <h2 className="text-xl font-bold text-stone-700 my-4">Invalid Input</h2>
      <p className="text-stone-500 mb-4">Oops... looks like you forgot to enter a value.</p>
      <p className="text-stone-500 mb-4">please make sure you provide a valid value for every input field.</p>
    </Modal>
    <div className=" w-[35rem] mt-32 mx-44">
      <menu className=" flex items-center justify-end gap-4 my-4">
        <li>
          <button className=" text-stone-300 hover:text-stone-50" onClick={onCancel}>
            Cancel
          </button>
        </li>
        <li>
          <button
            onClick={handleSave}
            className=" px-6 py-2 rounded-md bg-stone-500/30 text-stone-50 hover:bg-stone-600/70"
          >
            Save
          </button>
        </li>
      </menu>
      <div>
        <Input type="text" ref={title} label="Title" />
        <Input ref={description} label="Description of what TO DO" textarea />
        <Input type="date" ref={startDate} label="Start Date" />
        <Input type="date" ref={endDate} label="End Date" />
      </div>
    </div>
    </>
  );
}
