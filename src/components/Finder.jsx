import usePokemon from "../hooks/UsePokemon";
import { useState } from "react";

const Finder = () => {
  const { handleSubmitSearch } = usePokemon();

  const [search, setSearch] = useState("");

  return (
    <div className="block">
      <form onSubmit={(e) => handleSubmitSearch(e, search)}>
        <label>Buscador: </label>
        <input
          type="text"
          className="block__finder"
          onChange={(e) => setSearch(e.target.value)}
        />
        <input type="submit" className="block__search" value="Buscar" />
      </form>
    </div>
  );
};

export default Finder;
