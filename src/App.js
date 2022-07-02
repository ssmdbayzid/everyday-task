import logo from './logo.svg';
import './App.css';
import Header from './Pages/Header';
import { Routes, Route } from "react-router-dom";
import TodoList from './Pages/TodoList/TodoList';
import CompleteTask from './Pages/CompleteTask/CompleteTask';
import Footer from './Pages/Share/Footer';
import Calander from './Pages/Calander';
import { useState } from 'react';
import TodoList2nd from './Pages/TodoList/TodoList2nd';

function App() {
  const [input, setInput] = useState("")
  const [taskEdit, setTaskEdit] = useState(null)

  return (
    <div className='App'>
      <Header></Header>
      {/* <div>
        <Form 
        input={input}
        setInput={setInput}
        taskEdit={taskEdit}
        setTaskEdit={setTaskEdit}
        />
      </div> */}
      <div>
        
      </div>
      <Routes>
        <Route path="/" element={<TodoList2nd input={input} setInput={setInput} taskEdit={taskEdit} setTaskEdit={setTaskEdit} />} />
        <Route path="/to-do-list" element={<TodoList2nd input={input} setInput={setInput} taskEdit={taskEdit} setTaskEdit={setTaskEdit} />} />
        <Route path="/task-complete" element={<CompleteTask></CompleteTask>} />
        <Route path='/calander' element={<Calander></Calander>} />
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
