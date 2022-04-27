import { GET } from "../../utils/http";
import { useState, useEffect } from "react";
import CardItem from "../CardItem";
import "./style.css";

function CardList(props) {
  const [moviesData, setMoviesData] = useState([]);
  const [movieFiltered, setMovieFiltered] = useState([]);

  useEffect(() => {
    GET().then((data) => {
      setMoviesData(data);
      setMovieFiltered(data);
    });
    console.log(moviesData)
  }, []);

  useEffect(() => {
    const filtered = moviesData.filter(
      (movie) =>
      movie.title.toLowerCase().includes(props.filter.toLowerCase()) ||
        movie.genres.forEach((genre) =>
          genre.toLowerCase().includes(props.filter.toLowerCase())
        )
    );
    setMovieFiltered(filtered);
    // eslint-disable-next-line
  }, [props.filter]);

  return (
    <div className="CardList">
      <h1>Lista dei film</h1>
      <div className="CardList__wrapper">
        {movieFiltered &&
          movieFiltered.map((movie) => (
            <CardItem cardData={movie} key={movie.id} />
          ))}
      </div>
    </div>
  );
}

export default CardList;
