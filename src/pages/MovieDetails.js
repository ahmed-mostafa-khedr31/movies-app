import React from 'react'
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Zoom from 'react-awesome-reveal';

import { useDispatch, useSelector } from 'react-redux';
import { fetchMovieDetails } from '../data/movieDetailsSlice';
import { Helmet } from 'react-helmet';

const MovieDetals = () => {
  const { id } = useParams()
  const dispatch = useDispatch();
  const { details, loading, error } = useSelector((state) => state.movieDetails);
  console.log(details)
  useEffect(() => {
    dispatch(fetchMovieDetails(id));
  }, [dispatch, id]);
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;



  return (
    <>
      <Helmet>
        <title>{details?.title}</title>
        <meta name="description" content={details?.overview} />
      </Helmet>

      <div className="row   mb-3 justify-content-center" style={{ marginTop: "50px" }}>

        <img src={`//image.tmdb.org/t/p/w500${details?.poster_path}`} alt='pic' className=' col-3' />
        <img src={`//image.tmdb.org/t/p/w500${details?.backdrop_path}`} alt='pic' className=' col-3' />

      </div>
      <div className="row   mb-3  font-ar " style={{ color: "#c90614", borderBottom: "1px solid #c90614", boxShadow: "5px 0 1px black" }}>
        <p className='h3 story'> اسم الفيلم: <span className='mx-1 text-light h5' >{details?.title}</span> </p>
        <p className='h3 story'> تاريخ الفيلم: <span className='mx-1 text-light h6' >{details?.release_date}</span> </p>
        <p className='h3 story'> عدد المقيمين: <span className='mx-1 text-light h6' >{details?.vote_count}</span> </p>
        <p className='h3 story'> التقييم : <span className='mx-1 text-light h6' >{details?.vote_average}</span> </p>

      </div>
      <div className="row   mb-3  font-ar " style={{ color: "#c90614", borderBottom: "1px solid #c90614", boxShadow: "5px 0 1px black" }}>
        <p className='h2 story  text-center'> قصة الفيلم: <p className='mt-3 text-center text-light h6' >{details?.overview}</p> </p>
      </div>

      <div className="row d-block font-ar my-5  text-center">

        <Link to="/" className='col-3 mx-3 btn btn-outline-light'>
          عوده للرئسية"

        </Link>


        <Link style={{ cursor: "not-allowed", opacity: "0.45" }} className='col-3 btn btn-outline-light' to={details?.homepage}> مشاهدة الفيلم </Link>

      </div>

    </>
  )
}

export default MovieDetals