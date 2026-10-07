import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  let [menu, setMenu] = useState('메뉴를 선택하세요')

  let handleMenu = function (event){

    if(event.target.value != ""){
      setMenu(event.target.value + '을 선택함')
    }else{
      setMenu('메뉴를 선택하세요')
    }

  }

  return (
    <div className='App'>
      <h2>메뉴 선택</h2>
      <select onChange={ handleMenu }>
        <option value="">메뉴</option>
        <option value="짜장">짜장</option>
        <option value="짬뽕">짬뽕</option>
      </select>

      <p style={{color:'blue', fontWeight:'bold', fontSize:'20px'}}>{menu}</p>

    </div>
  );
}

function Nav(props) {
  
  let lis = []
  for (let i = 0; i < props.my_menu.length; i++) {
    let j = props.my_menu[i]
    lis.push(<option>{j.title}</option>)

  }
}
export default App;
