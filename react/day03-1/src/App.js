import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  let [cnt, setcnt] = useState('0')

  let [chkF, setchkF] = useState('')

  let down = function () {
    setcnt(--cnt)
  }

  function reset() {
    setcnt(0)
  }

  let up = function () {
    setcnt(++cnt)
  }

  function changeNum(e) {
    setcnt(e.target.value)
  }

function chk(){
  if (cnt===0) {
    setchkF('현재 카운트는 0입니다')
  }else if(cnt%2===0){
    setchkF('현재 카운터는 짝수입니다')
  }else {
    setchkF('현재 카운터는 홀수입니다')
  }
}



  return (
    <div>
      <input type='button' value='-' onClick={down} />
      <input type='button' value='0' onClick={reset} />
      <input type='button' value='+' onClick={up} />
      <input type='button' value='짝수/홀수 확인' onClick={chk}/>
      <input id='my_text' value={cnt} onChange={changeNum}
        size='3' />

      <p>
        <span>{cnt}</span><br/>
        <span>{chkF}</span>
      </p>
    </div>
  );
}

export default App;
