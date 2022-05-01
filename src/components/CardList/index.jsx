import { useState, useEffect } from "react";
import { GET } from "../../utils/http";
import CardItem from "../CardItem";
import styles from "./styles.module.scss";

function CardList({ filter }) {
  const [moviesData, setMoviesData] = useState([]);
  const [categories, setCategories] = useState([]);
  const [value, setValue] = useState();

  useEffect(() => {
    GET().then((data) => {
      setMoviesData(data);
      setCategories(data);
    });
  }, [value]);

  useEffect(() => {
    const filteredMovie = categories.filter((item) => {
      return item.genres.toString().toLowerCase().includes(filter.toLowerCase())
    });
    setMoviesData(filteredMovie);
     // eslint-disable-next-line
  }, [filter])

  return (
    <div className={styles.CardList}>
      <h1>Lista dei film</h1>
      <div className={styles.CardList__wrapper}>
        {moviesData &&
          moviesData
            .map((movie) => (
              <CardItem
                cardData={movie}
                onForceRender={setValue}
                key={movie.id}
              />
            ))}
      </div>
    </div>
  );
}

export default CardList;
