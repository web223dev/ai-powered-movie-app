import { BrowserRouter, Route, Routes } from 'react-router-dom';

// pages
import Movies from './pages/Movies';
import MovieInfo from './pages/MovieInfo';
import Actors from './pages/Actors';
import Profile from './pages/Profile';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Movies />} />
        <Route path='movie/:id' element={<MovieInfo />} />
        <Route path='actors/:id' element={<Actors />} />
        <Route path='profile/:id' element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
