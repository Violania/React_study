import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  let [cnt, setCnt] = useState('0');

  let like = function () {
    setCnt(cnt++)
  }

  return (
    <div>
      <h1>
        ♥{cnt}
      </h1>

      <input type='button' value='좋아요' onClick={like}/>
    </div>
  );
}

export default App;
