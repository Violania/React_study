import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  let [pcolor, setColor] = useState('')

  let selCol = (event)=> {

    if (event.target.value != '') {
      setColor(event.target.value)
    } else {
      setColor('')
    }

  }

  return (
    <div>
      <select onChange={selCol}>
        <option value=''>:::색상 선택:::</option>
        <option value='red'>빨강</option>
        <option value='green'>초록</option>
        <option value='blue'>파랑</option>
        <option value='yellow'>노랑</option>
      </select>
      <hr />

      <div >
        <p style={{
          backgroundColor: pcolor === ''? '#000': pcolor,
          color: pcolor === 'yellow' ? '#000' : '#fff',
          width: '325px',
          height: '325px',
          fontWeight:'bold', 

          //text의 중앙 정렬
          display: 'flex',
          justifyContent: 'center', 
          alignItems: 'center'

        }}>{pcolor}</p>
      </div>
    </div>
  );
}

export default App;
