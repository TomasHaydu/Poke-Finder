import usePokemon from "../hooks/UsePokemon";
import { useState } from "react";
import { useEffect } from "react";

const Finder = () => {
  const { handleSubmitSearch, pokemons } = usePokemon();

  const [search, setSearch] = useState("");

  useEffect(() => {
    handleSubmitSearch(search);
  }, [search]);


  const onChangeHandle = (value) => {
    let matches = [];
    if (value.length > 0) {
      matches = pokemons.filter((poke) => {
        const regex = new RegExp(`${value}`, "gi");
        return poke.name.match(regex);
      });
    }
    setSearch(value);
  };

  const handleClear = (e) => {
    e.preventDefault();
    setSearch("");
  };

  return (
    <div className="block">
      <form className="block-form">
        <label>Buscador: </label>

        <div className="block__search">
          <input
            type="text"
            className="block__search-finder"
            onChange={(e) => onChangeHandle(e.target.value)}
            value={search}
            list="tareas"
          />
          <datalist id="tareas">
            {pokemons.map(pokemon => <option value={pokemon.name}></option>)}
          </datalist>
          <button className="block__search-clear" onClick={() => handleClear()}>
            X
          </button>
        </div>
      </form>
    </div>
  );
};

export default Finder;
