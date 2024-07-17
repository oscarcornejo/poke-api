import { GetPokemonResponse } from "../../utils";

export type PokemonProps = {
  pokemon: GetPokemonResponse;
  loading?: boolean;
};
