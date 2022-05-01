// import {useState, useEffect} from 'react';
import { useState } from "react";
import CardList from "../../components/CardList";
import "./styles.css";

function Categories() {

  const [categories, setCategories] = useState([]);

  const changeCategory = (event) => {
    setCategories([...categories, event.target.value]);
  };
 
  return (
    <div className="Categories">
      <div>
        <ul className="categories-list">
          <li>
            <button value="action" onClick={changeCategory}>
              Azione
            </button>
          </li>
          <li>
            <button value="adventure" onClick={changeCategory}>Avventura</button>
          </li>
          <li>
            <button value="sci-fi" onClick={changeCategory}>SciFi</button>
          </li>
        </ul>
      </div>
      <CardList filter={categories.toString()} />
    </div>
  );
}

export default Categories;
