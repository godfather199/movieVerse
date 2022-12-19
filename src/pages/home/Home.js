import axios from "axios";
import { useEffect, useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { Link } from "react-router-dom";
import "./home.css";
import MovieList from '../../components/movieList/MovieList'

function Home() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        fetch(
          "https://api.themoviedb.org/3/movie/popular?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US"
        )
          .then((res) => res.json())
          .then((data) => setMovies(data.results));
      } catch (err) {
        console.log(err);
      }
    };

    fetchMovies();
  }, []);

  return (
    <>
      <div className="homeContainer">
        <Carousel
          showThumbs={false}
          autoPlay={true}
          transitionTime={3}
          infiniteLoop={true}
          showStatus={false}
        >
          {movies.map((movie) => (
            <Link className="link" to={`/movie/${movie.id}`}>
              <div className="homeImgContainer">
                <img
                  src={`https://image.tmdb.org/t/p/original${
                    movie && movie.backdrop_path
                  }`}
                  alt=""
                  className="homeImg"
                />
              </div>
              <div className="homeDetails">
                <div className="homeTitle">
                  {movie ? movie.original_title : ""}
                </div>
                <div className="homeRuntime">
                  {movie ? movie.release_date : ""}
                  <span className="homeRating">
                    {movie ? movie.vote_average : ""}
                    <i className="fas fa-star" />{" "}
                  </span>
                </div>
                <div className="homeDesc">
                  {movie ? movie.overview : ''}
                </div>
              </div>
            </Link>
          ))}
        </Carousel>
      </div>
      <MovieList />
    </>
  );
}

export default Home;
