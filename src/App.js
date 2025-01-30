import './index.css';
import { Container } from 'react-bootstrap'
import Layout from './components/Layout';

import MovieList from './pages/MovieList';

import { BrowserRouter, Routes, Route } from 'react-router-dom'

import MovieDetails from './pages/MovieDetails';




function App() {








  return (

    <>
      <Container>
        <BrowserRouter>

          <Routes>
            <Route path="/" element={<Layout />} >
              <Route index element={<MovieList />} />
              <Route path="movie/:id" element={<MovieDetails />} />
            </Route>
          </Routes>
        </BrowserRouter>


      </Container>
    </>
  );
}

export default App;
