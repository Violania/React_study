import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import TaskRes from './TaskRes';

function App() {

  const [works, setWorks] = useState([])
  const [todo, setTodo] = useState('')
  const [end, setEnd] = useState('')

  let datePatt = /^\d{4}-\d{2}-\d{2}$/
  function addWorks() {
    if (todo.trim() && datePatt.test(end)) {
      setWorks([...works, { todo, end }])
    } else {
      alert('내용을 채우세요')
    }
  }

  function delWorks(index) {

    let newworks = works.filter((_, i) => i !== index)
    setWorks(newworks)
  }






  return (
    <div>
      <h1>할 일 목록</h1>

      <input value={todo} placeholder='할 일을 입력하세요' onChange={(e) => setTodo(e.target.value)}></input><br />
      <input value={end} placeholder='마감일(예:2020-01-01)' onChange={(e) => setEnd(e.target.value)}></input>
      <button onClick={addWorks}>추가</button>
      <hr />

      <TaskRes works={works} delWorks={delWorks}/>

    </div>
  );
}

export default App;
