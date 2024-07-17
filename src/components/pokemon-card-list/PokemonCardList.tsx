import { Loader } from "../loader";
import { useAppSelector } from "../../hooks";
import { ReturnPokemonMapper } from "../../models";
import { PokemonCard } from "../pokemon-card/PokemonCard";

import classes from "./PokemonCardList.module.scss";
import { Paragraph } from "../paragraph";

export const PokemonCardList = () => {
  const { filteredPokemon, isLoading, status } = useAppSelector(
    (state) => state.pokemon
  );

  if (isLoading) return <Loader />;

  if (!isLoading && filteredPokemon.length === 0) {
    return <Paragraph text="No se encontraron Pokemons :(" />;
  }

  return (
    <div className={classes["pokemon-list"]}>
      {status === "failed" && <p>Error al obtener los datos</p>}

      {filteredPokemon.length > 0 &&
        filteredPokemon.map((pokemon: ReturnPokemonMapper) => {
          return <PokemonCard key={pokemon.id} pokemon={pokemon} />;
        })}
    </div>
  );
};
