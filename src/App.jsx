import { useState } from "react";
import NewTask from "./components/NewTask.jsx";
import NoTaskSelected from "./components/NoTaskSelected.jsx";
import Sidebar from "./components/SideBar.jsx";



function App() {
  const[taskState , setTaskState]=useState({
    selectedTaskId: undefined,
    tasks:[]
  });

  function handleStartAddTask(){
    setTaskState(prevState=>{
      return {
        ...prevState,
        selectedTaskId: null
      };
    });
  }

  let content ; 

  if (taskState.selectedTaskId === null) {
    content = <NewTask />
  } else if (taskState.selectedTaskId === undefined){
    content=<NoTaskSelected onStartAddTask={handleStartAddTask}/>
  }

  return (
    <main className=" h-screen my-8 flex gap-8">
      <Sidebar onStartAddTask={handleStartAddTask}/>
      {content}
    </main>
  );
}

export default App;
