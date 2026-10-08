import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  let [name, setName] = useState('')
  let [age, setAge] = useState(0)
  let [users, setUsers] = useState([])

  function addUser() {
    if (name != '') {
      setUsers([...users, { name, age }])
    }
  }

  const delUser = (index) => {

    let newUser = users.filter((res, i) => i !== index)
    setUsers(newUser)

  }
  return (
    <div>
      <h1>사용자 목록</h1>

      <input placeholder='이름을 입력하세요' onChange={(e) => setName(e.target.value)}></input><br />
      <input placeholder='나이를 입력하세요' onChange={(e) => setAge(e.target.value)}></input>
      <input type='button' value='확인' onClick={addUser} />

      <hr />
      <table border='1'>
        <thead>
          <tr>
            <th>순번</th>
            <th>이름</th>
            <th>나이</th>
            <th>비고</th>
          </tr>


        </thead>
        <tbody>
          {users.map((f, index) => (
            <tr>
              <td>{index + 1}</td>
              <td>{f.name}</td>
              <td>{f.age}</td>
              <td>{<input type='button' value='삭제' onClick={() => { delUser(index) }}></input>}</td>
            </tr>

          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
