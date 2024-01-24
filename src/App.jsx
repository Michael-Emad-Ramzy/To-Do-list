import { useState } from "react";
import NewTask from "./components/NewTask.jsx";
import NoTaskSelected from "./components/NoTaskSelected.jsx";
import Sidebar from "./components/Sidebar.jsx";
import SelectedTask from "./components/SelectedTask.jsx";

function App() {
  const [taskState, setTaskState] = useState({
    selectedTaskId: undefined,
    tasks: [],
  });

  function handleSelectTask(id) {
    setTaskState((prevState) => {
      return {
        ...prevState,
        selectedTaskId: id,
      };
    });
  }

  function handleStartAddTask() {
    setTaskState((prevState) => {
      return {
        ...prevState,
        selectedTaskId: null,
      };
    });
  }

  function handleCancelAddTask() {
    setTaskState((prevState) => {
      return {
        ...prevState,
        selectedTaskId: undefined,
      };
    });
  }

  function handleAddTask(taskData) {
    setTaskState((prevState) => {
      const taskId = Math.random();
      const newTask = {
        ...taskData,
        id: taskId,
      };
      return {
        ...prevState,
        selectedTaskId: undefined,
        tasks: [...prevState.tasks, newTask],
      };
    });
  }

  //this const selectedTask return the id of the task by finding in the state(taskState)access
  //to tasks array and find in every task of the tasks by task.id if there is a similar id
  //as the selectedTaskId in state(taskState object).
  const selectedTask = taskState.tasks.find(
    (task) => task.id === taskState.selectedTaskId
  );
  //find() is a build in function as map() it return the element if the argument return true.

  let content = <SelectedTask task={selectedTask} />;

  if (taskState.selectedTaskId === null) {
    content = <NewTask onAdd={handleAddTask} onCancel={handleCancelAddTask} />;
  } else if (taskState.selectedTaskId === undefined) {
    content = <NoTaskSelected onStartAddTask={handleStartAddTask} />;
  }

  return (
    <main className=" h-screen my-8 flex gap-8">
      <Sidebar
        onStartAddTask={handleStartAddTask}
        tasks={taskState.tasks}
        onSelectTask={handleSelectTask}
        selectedTaskId={taskState.tasks.id}
      />
      {content}
    </main>
  );
}

export default App;
