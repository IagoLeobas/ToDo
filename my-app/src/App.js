import './App.css';

import { useState, useEffect } from 'react';
import { BsTrash, BsBookmarkCheck, BsBookmarkCheckFill } from 'react-icons/bs';

const API = "http://localhost:5000";

function App() {
  const [title, setTitle] = useState("");
  const [time, setTime] = useState("");
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(title)
    setTitle("")
    console.log("Enviou!")
  }

  return (
    <div className='App'>
      <div className="todo-header">
        <h1>React todo</h1>
      </div>

      <div className='form-todo'>
        <h2>Insira sua próxima tarefa:</h2>
        <form onSubmit={handleSubmit}>
          <div className='form-control'>
            <label htmlFor='title'>Digite sua tarefa</label>
            <input type='text' name='title' placeholder='Título da tarefa'
              onChange={(e) => setTitle(e.target.value)} value={title || ""} required></input>
          </div>
          <input type='submit' value='Enviar'></input>
        </form>
      </div>

      <div className='list-todo'>
        <h2>Lista de tarefas:</h2>
        {todos.length === 0 && <p>Não há tarefas</p>}
      </div>
    </div>
  );
}

export default App;
