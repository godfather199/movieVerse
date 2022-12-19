import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/navbar/Navbar'
import Home from './pages/home/Home'
import Genre from './pages/genre/Genre'
import Login from './pages/login/Login'
import MovieDetails from './pages/movieDetails/MovieDetails'
import MovieList from './components/movieList/MovieList';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path = '/' element = {<Home />} />
          <Route path = '/genre' element = {<Genre />} />
          <Route path = '/login' element = {<Login />} />
          <Route path = '/movie/:id' element = {<MovieDetails />} />
          <Route path = '/movies/:type' element = {<MovieList />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
