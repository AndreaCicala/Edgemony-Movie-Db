import { useState } from "react";
import CardList from "../../components/CardList";
import "./style.css";

function Home() {
  const [searchInput, setSearchInput] = useState("");

  return (
    <div className="Home">
      <label htmlFor="search"></label>
      <input
        className="input-home"
        placeholder="Search for title"
        type="text"
        id="search"
        name="search"
        value={searchInput}
        onChange={(e) => setSearchInput(e.target.value)}
      />

      <CardList filter={searchInput} />
    </div>
  );
}

export default Home;
