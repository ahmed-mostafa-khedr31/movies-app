import { Zoom } from 'react-awesome-reveal';
import { Col, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const CardMovie = ({ movie }) => {
    const images = `//image.tmdb.org/t/p/w500${movie.poster_path}`

    return (
        <>
            <Col xs="6" md="4" lg="3" className='my-1'>
                <Zoom>
                    <Link to={`/movie/${movie.id}`}>
                        <Card className='card' style={{ border: "0", boxShadow: "0 5px 20px black" }}>
                            <img src={images} alt='pic' className='card-image' />
                            <div className='card-overlay'>
                                <div className='overlay-text text-center w-100 p-2'>
                                    <p> اسم الفيلم: {movie.title} </p>
                                    <p> تاريخ الاصدار: {movie.release_date} </p>
                                    {/* <p> للبالغين فقط : {movie.adult ? "نعم" : "لا"} </p> */}
                                    <p> المشاهدات: {movie.vote_count} </p>
                                    <p> التقيم: {movie.vote_average} </p>
                                </div>
                            </div>
                        </Card>
                    </Link>
                </Zoom>
            </Col>
        </>
    )
}
export default CardMovie;