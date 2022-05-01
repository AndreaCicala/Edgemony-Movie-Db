import { Link } from "react-router-dom";
import { DELETE } from "../../utils/http";
import styles from "./styles.module.scss";

function CardItem({ cardData, onForceRender }) {
  const onCardDelete = () => {
    DELETE(cardData.id).then((data) => onForceRender("/"));
  };

  return (
    <div className={styles.CardItem}>
      <Link to={`/edit-movie/${cardData.id}`}>
        <h2>{cardData.title}</h2>
      </Link>
      <button onClick={onCardDelete} className={styles.CardItem__btn}>
        ❌
      </button>
      <p>{cardData.year}</p>
      <img src={cardData.poster} alt={cardData.title} />
      <p>{cardData.description}</p>
      <div className={styles.genres}>
        <ul>
          {cardData.genres &&
            cardData.genres.map((genre, i) => <li key={i}>{genre}</li>)}
        </ul>
      </div>
    </div>
  );
}

export default CardItem;
