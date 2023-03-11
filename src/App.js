import React, {useState} from 'react';
import AddTaskForm from './components/AddTaskForm.jsx';
import UpdateForm from './components/UpdateForm.jsx';
import ToDo from './components/ToDo.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';

function App() {

  // Task (ToDo List) State
  const [toDo, setToDo] = useState([
    {id: 1, title: 'Task 1', status: false },
    {id: 2, title: 'Task 2', status: true }

  ])

  // Temp State
  // This is for holding temporary data for a new task being made
  const [newTask, setNewTask] = useState('');

  // This is for holding temporarily holding the data for a task being updated
  const [updateData, setUpdatedData] = useState('');

  // Function to add task
  const addTask = () => {
    if(newTask) {
      let num = Date.now();
      let newEntry = {id: num, title: newTask, status: false};
      setToDo([...toDo, newEntry]);
      setNewTask('');
    }
  };

  //Function to  delete Task
  const deleteTask = (id) => {
    let newTasks = toDo.filter( task => task.id !== id);
    setToDo(newTasks);
  };

  //Function to mark task as done
  const markDone = (id) => {
    let newTasks = toDo.map( task => {
      if (task.id === id){
        return ({...task, status: !task.status})
      }
      return task
    });
    setToDo(newTasks)
  };

  //Function to cancel updating a task
  const cancelUpdate = () => {
    setUpdatedData('');
  };

  //Function to change task for update
  const changeTask = (e) => {
    let newEntry = {
      id: updateData.id,
      title: e.target.value,
      status: updateData.status ? true : false
    }
    setUpdatedData(newEntry)
  };

  //Function to update task
  const updateTask = () => {
    let filterTasks = [...toDo].filter( task => task.id !== updateData.id);
    let updatedObject = [...filterTasks, updateData];
    setToDo(updatedObject);
    setUpdatedData('');
  };

  return (
    <div className=" container App">

    <br /> <br />
    <h2>To Do List App </h2>
    <br /> <br />

    {updateData && updateData ? (
      <UpdateForm
        updateData={updateData}
        changeTask={changeTask}
        updateTask={updateTask}
        cancelUpdate={cancelUpdate}
      />
      ) : (
        <AddTaskForm
          newTask={newTask}
          setNewTask={setNewTask}
          addTask={addTask}
        />
    )}
    
    {toDo && toDo.length ? '' : 'No Tasks...'}

    <ToDo
      toDo={toDo}
      markDone={markDone}
      setUpdatedData={setUpdatedData}
      deleteTask={deleteTask}
    />

    </div>
  );
}

export default App;
