import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Link, Route, Routes, useNavigate } from "react-router-dom";
import MyPage from './pages/MyPage';

function App() {

  return (
    <BrowserRouter>
      <MyPage />
    </BrowserRouter>
  );
}

export default App;
