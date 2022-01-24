import React from 'react'
import './App.css';
import TaskList from './compoments/TaskList';
import TaskForm from './compoments/TaskForm';
import Header from './compoments/Header';
import TaskListContextProvider from './context/TaskListContext';

const App = () => {
  return (
    <TaskListContextProvider>
      <div className="container">
        <div className="app-wrapper">
          <Header />
          <div className="main">
            <TaskForm />
            <TaskList />
          </div>
        </div>
      </div>
    </TaskListContextProvider>
    
  )
  
}

export default App;
