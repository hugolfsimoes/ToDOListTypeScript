import React, { useState } from 'react';
import Footer from './components/Footer';
import Header from './components/Header';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import { ITask } from './interfaces/ITask';

import styles from './App.module.css';
import Modal from './components/Modal';
function App() {

  const deleteTask = (id: number) => {
    setTaskList(
      taskList.filter(task => {
        return task.id !== id;
      })
    );
  };

  const [ taskList, setTaskList ] = useState<ITask[]>([]);
  return (
    <div className="App">
      <Modal children={<TaskForm btnText="Editar Tarefa" taskList={taskList} />} />
      <Header />
      <main className={styles.main}>
        <div>
          <h2>O que vocÊ vai fazer?</h2>
          <TaskForm btnText="Criar Tarefa" taskList={taskList} setTaskList={setTaskList} />
        </div>
        <div>
          <h2>Suas Tarefas:</h2>
          <TaskList taskList={taskList} handleDelete={deleteTask} />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
