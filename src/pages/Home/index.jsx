import CardList from "../../components/CardList";
import { useState } from "react";
import "./style.css";

function Home() {
const [filter, setFilter] = useState("");
const change = (e) => {
  setFilter(e.target.value)
}
  return (
    <div className="Home">
      <label htmlFor="search">Search by title or genres:</label>
      <input value={filter} onChange={change} type="text" id="search" name="search" />

      <CardList filter={filter}/>
    </div>
  );
}

export default Home;