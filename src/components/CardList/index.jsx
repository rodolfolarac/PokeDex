import { Card } from "../Card/style";
import { api, clearPage } from "../Api";
import { useEffect, useState } from "react";
import { ThemeButton } from "../../styles/global";

const CardList = () => {
  const [pokemonList, setPokemonList] = useState([]);
  const [currentPage, setCurrentPage] = useState("pokemon?limit=30&offset=0");
  const [currentPokemon, setCurrentPokemon] = useState("");

  useEffect(() => {
    api.get(currentPage).then((res) => {
      setPokemonList(res.data);
    });
  }, [currentPage]);

  function loadPokemon(url) {
    api.get(url).then((res) => setCurrentPokemon(res.data));
  }

  return (
    <>
      {currentPokemon && (
        <div>
          <h1>{currentPokemon.name}</h1>
          <img
            src={currentPokemon.sprites.front_default}
            alt={currentPokemon.name}
          />
        </div>
      )}

      <ThemeButton
        color={"red"}
        disabled={!pokemonList.previous}
        onClick={() => {
          pokemonList.previous &&
            setCurrentPage(clearPage(pokemonList.previous));
        }}
      >
        Anterior
      </ThemeButton>
      <ThemeButton
        color={"red"}
        onClick={() => {
          setCurrentPage(clearPage(pokemonList.next));
        }}
      >
        Próximo
      </ThemeButton>
      <ul>
        {pokemonList.results?.map((pokemon) => {
          return (
            <Card
              letterColor={"#1c1212"}
              color={"rgba(255, 41, 17, 0.8)"}
              key={pokemon.name}
              onClick={() => loadPokemon(pokemon.url)}
            >
              <h3>{pokemon.name}</h3>
              {/* <img src={} />  */}
            </Card>
          );
        })}
      </ul>
    </>
  );
};

export default CardList;
