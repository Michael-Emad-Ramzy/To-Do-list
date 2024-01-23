import { useState } from "react";
import NewTask from "./components/NewTask.jsx";
import NoTaskSelected from "./components/NoTaskSelected.jsx";
import Sidebar from "./components/Sidebar.jsx";

function App() {
  const [taskState, setTaskState] = useState({
    selectedTaskId: undefined,
    tasks: [],
  });

  function handleStartAddTask() {
    setTaskState((prevState) => {
      return {
        ...prevState,
        selectedTaskId: null,
      };
    });
  }

  function handleAddTask(taskData) {
    setTaskState((prevState) => {
      const newTask = {
        ...taskData,
        id: Math.random(),
      };
      return {
        ...prevState,
        tasks: [...prevState.tasks, newTask],
      };
    });
  }

  let content;

  if (taskState.selectedTaskId === null) {
    content = <NewTask onAdd={handleAddTask} />;
  } else if (taskState.selectedTaskId === undefined) {
    content = <NoTaskSelected onStartAddTask={handleStartAddTask} />;
  }

  return (
    <main className=" h-screen my-8 flex gap-8">
      <Sidebar onStartAddTask={handleStartAddTask} />
      {content}
    </main>
  );
}

export default App;
