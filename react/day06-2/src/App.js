import logo from './logo.svg';
import './App.css';
import { dummy } from './movieDummy';
import MovieList from './pages/MovieList';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MovieDetail from './pages/MovieDetali';

function App() {
  return (
    <BrowserRouter>

      <Routes>

        <Route path='/' element={<MovieList />} />
        <Route path='/detail/:title/:poster' element={<MovieDetail/>}/>

      </Routes>

    </BrowserRouter>

  );
}

export default App;
