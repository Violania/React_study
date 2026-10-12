import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  const [goods, setGoods] = useState([])
  const [name, setName] = useState('')
  const [price, setPrice] = useState('')

  function addGoods() {
    if (name.trim() && price.trim()) {
      setGoods([...goods, { name, price: Number(price) }])
      setName('')
      setPrice('')
    }
  }

  const delGoods = (index) => {
    let newGoods = goods.filter((_, i) => i !== index)
    setGoods(newGoods)
  }

  // 총합
  //reduce() : 배열에 들어있는 여러 값을 하나씩 꺼내오기 위한 함수
  let totalPrice =  goods.reduce((sum,goods)=>{
    return sum +goods.price
  },0)
  return (
    <div>
      <h1>장바구니</h1>

      <input placeholder='상품명' value={name} onChange={(e) => setName(e.target.value)}></input> <br />
      <input type='number' placeholder='가격' value={price} onChange={(e) => setPrice(e.target.value)}></input>
      <input type='button' value='추가' onClick={addGoods} />

      <hr />

      <table border='1'>
        <thead>
          <tr>
            <th>상품명</th>
            <th>가격</th>
            <th>삭제</th>
          </tr>
        </thead>

        <tbody>
          {goods.map((goods, index) => (
            <tr key={index}>
              <td>{goods.name}</td>
              <td>{goods.price}</td>
              <td>{<input type='button' value='삭제' onClick={() => { delGoods(index) }}></input>}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <p>총 합 : {totalPrice}</p>
    </div>
  );
}

export default App;
