import { useEffect, useState } from "react";
import usePokemon from "../hooks/UsePokemon";
import PokeTitle from "../img/poke-title.svg";
import PokeBall from "../img/poke.svg";

const Header = () => {
  const { setPokemons, getAllPoke } = usePokemon();

  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  const handleScroll = () => {
    const currentScrollPos = window.scrollY;
    setVisible(prevScrollPos > currentScrollPos);
    setPrevScrollPos(currentScrollPos);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos]);
  return (
    <div className="header">
      <img
        src={PokeBall}
        alt=""
        className="header__ball"
        onClick={async () => setPokemons(await getAllPoke())}
      />
      <img
        src={PokeTitle}
        alt="pokemon-title"
        className={`header__title ${visible ? "visible" : "hidden"}`}
      />
    </div>
  );
};

export default Header;
