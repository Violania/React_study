import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import TodoList from './pages/TodoList';
import TodoDetail from './pages/TodoDetail';

function App() {
  return (
    <div className="App">
      <BrowserRouter>

        <Routes>

          <Route path='/' element={<TodoList />}/>
          <Route path='/tododetail/:id' element={<TodoDetail/>}/>

        </Routes>

      </BrowserRouter>

    </div>
  );
}

export default App;
