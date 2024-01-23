import { useRef } from "react";
import Input from "./Input.jsx";
import Modal from "./Modal.jsx";

export default function NewTask({ onAdd }) {
  

  const title = useRef();
  const description = useRef();
  const startDate = useRef();
  const endDate = useRef();

  function handleSave() {
    const enteredTitle = title.current.value;
    const enteredDescription = description.current.value;
    const enteredStartDate = startDate.current.value;
    const enteredEndDate = endDate.current.value;

    if (
      enteredTitle.trim() === "" ||
      enteredDescription.trim() === "" ||
      enteredStartDate.trim() === "" ||
      enteredEndDate.trim() === ""
    ){
      //show modal
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
    <Modal />
    <div className=" w-[35rem] mt-32 mx-44">
      <menu className=" flex items-center justify-end gap-4 my-4">
        <li>
          <button className=" text-stone-300 hover:text-stone-50">
            Cancel
          </button>
        </li>
        <li>
          <button
            onClick={handleSave}
            className=" px-6 py-2 rounded-md bg-stone-500 text-stone-50 hover:bg-stone-600"
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
