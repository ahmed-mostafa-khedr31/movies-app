import { Suspense, lazy } from 'react';
import { Row, Alert, Spinner } from "react-bootstrap";
import PaginationBar from '../components/PaginationBar'
import { useState, useEffect } from 'react';
import image from '../images/s.png';

import { useDispatch, useSelector } from "react-redux";
import { getMovies, searchMovies } from "../data/moviesSlice";
import { useDebounce } from "use-debounce";
import { Helmet } from 'react-helmet';
const CardMovie = lazy(() => import('../components/CardMovie'));

const MovieList = () => {

  const [Movies, setMovies] = useState([])

  const movies = useSelector((state) => state.movies.viewAllMovies);
  const status = useSelector((state) => state.movies.status);
  const error = useSelector((state) => state.movies.error);
  // dispatch actions

  const dispatch = useDispatch()
  const [word, setWord] = useState('');
  const [debouncedWord] = useDebounce(word, 300); // debouncedWord with a 300ms delay

  useEffect(() => {

    dispatch(getMovies());
    if (debouncedWord) {
      dispatch(searchMovies(debouncedWord));
    }
  }, [dispatch, debouncedWord]);
  console.log(movies)
  useEffect(() => {

    setMovies(movies)

  }, [movies])



  return (

    <>
      <Helmet>
        <title>Movies</title>
        <meta name="description" content={'see all movies and films you needs'} />
      </Helmet>
      <Row className="mt-3 " style={{ display: "flex", justifyContent: "center", alignItems: "center", backgroundColor: "#c90614", height: "100px", direction: "ltr", borderRadius: "10px", color: "white", position: "relative", zIndex: "10" }}>
        <div style={{ display: "flex", justifyContent: "center", width: "95%", position: "relative" }}>
          <img src={image} className="search-img" alt="Movie Pic" />
          <input
            type="text"
            dir="rtl"
            style={{ width: "100%", borderRadius: "7px", outlineColor: "#c90614", border: "0" }}
            className="px-5 py-1 fs-5"
            onChange={(e) => setWord(e.target.value)}
            placeholder="إبحث..."
          />

        </div>

      </Row>




      <Row className="mt-5">
        {
          movies.length >= 1 ?
            (movies.map(movieItem => {
              return (<Suspense fallback={<div>Loading...</div>}>
                <CardMovie key={movieItem.id} movie={movieItem} />
              </Suspense>)
            }

            )) : <>
              <Alert className=" bg-light text-danger">
                معزرة!<br />جاري اضافه افلام جديده....
                <Spinner animation="border" role="status" style={{ color: "#c90614", width: "15px", height: "15px" }}>

                </Spinner>
              </Alert>
            </>
        }
        {
          Movies.length > 0 && <PaginationBar />
        }


      </Row>
    </>

  )
}
export default MovieList;