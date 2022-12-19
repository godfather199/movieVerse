import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./movieDetails.css";

function MovieDetails() {
  const [currentMovie, setCurrentMovie] = useState();
  const { id } = useParams();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US`
    )
      .then((res) => res.json())
      .then((data) => setCurrentMovie(data));
  };

  console.log(currentMovie);

  return (
    <div className="mdContainer">
      <div className="mdWrapper">
        <div className="mdDetails">
          <div className="mdDetailsImage">
            <img
              src={`https://image.tmdb.org/t/p/original${
                currentMovie ? currentMovie.backdrop_path : ""
              }`}
              alt=""
              className="mdImg"
            />
          </div>
          <div className="mdDetailsInfo">
            <div className="mdDetailsInfoTop">
              <span className="mdDetailsTitle">
                {currentMovie ? currentMovie.original_title : ""}
              </span>
              <div className="mdDetailsGenre">
                <span className="mdDetailsRelease">
                  {currentMovie
                    ? "Release date: " + currentMovie.release_date
                    : ""}
                </span>
                <span className="mdDetailsDuration">
                  Runtime: {currentMovie ? currentMovie.runtime + " mins" : ""}
                </span>
              </div>
            </div>
            <div className="mdDetailsInfoBottom">
              <button className="mdDetailsNowBtn">Watch Now</button>
              <button className="mdDetailsLaterBtn">Watch Later</button>
            </div>
          </div>
        </div>
        <div className="mdDesciption">
          <p className="mdDesc">
            {currentMovie ? currentMovie.overview : ""} 
          </p>
          <p className="mdRandom">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus ex consequuntur distinctio, necessitatibus voluptatem quos earum magnam laboriosam libero eum, molestias qui porro quia laudantium laborum. Quod eum delectus cum.
          Sapiente vel incidunt hic autem cupiditate quasi suscipit quos? 
          <br />
          <br />
          Doloremque voluptatum ex exercitationem quam aspernatur officia, illum eligendi magni repudiandae quas aut odio hic quos blanditiis autem eaque. Maiores, ea!
          <br />
          <br />
          Necessitatibus recusandae odio cupiditate nostrum quidem repellat aliquid pariatur consequatur quae quas laudantium cum dolor ut nam ab, minus assumenda qui quibusdam deleniti rerum drum officiis ipsum dignissimos facere. Similique.
          Quisquam dolores alias illo corporis autem commodi. Dolore sit tempora maiores doloremque illum alias nam repellendus ratione corrupti soluta. Possimus hic accusamus cupiditate, velit eum sed eius rem <br />
          <br />laboriosam aperiam.
          Animi iusto, repellendus nisi magnam quidem aspernatur harum vel inventore nostrum deleniti voluptates, corporis quis assumenda quam sit omnis illum voluptatem! Asperiores, totam eveniet ullam excepturi dolorem quos enim ipsum?
          Magni adipisci officiis deserunt cum quia tenetur recusandae aperiam nihil illo nisi iste, consequatur culpa reiciendis ut quisqu<br />
          <br />am repellat natus voluptate error hic consectetur expedita ab. Repellat quibusdam eius sint.
          Consequatur dolorum commodi dicta explicabo eveniet, excepturi saepe, eligendi dolor, nesciunt accusantium ipsam! Saepe dolores non asperiores dolor! Laudantium magni similique quasi quidem odio tempore consequatur maxime dolorem magnam sapiente?</p>
        </div>
      </div>
    </div>
  );
}

export default MovieDetails;
