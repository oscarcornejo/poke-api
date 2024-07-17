import { useCallback, useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { BurgerIcon } from "../burger-icon";
import { setFilteredPokemon } from "../../store/slices";
import { useAppDispatch, useAppSelector } from "../../hooks";

import classes from "./SearchBar.module.scss";
import { sanitizeInput } from "../../utils";

export const SearchBar = () => {
  const dispatch = useAppDispatch();
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [inputDirty, setInputDirty] = useState(false);
  const { allPokemon } = useAppSelector((state) => state.pokemon);

  const handlerSearch = useCallback(() => {
    setTimeout(() => {
      if (inputDirty && searchTerm === "") {
        dispatch(setFilteredPokemon(allPokemon));
        setInputDirty(false);
      } else {
        dispatch(
          setFilteredPokemon(
            allPokemon.filter(
              (pokemon) =>
                pokemon.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                pokemon.id.toString() === searchTerm
            )
          )
        );
      }
    }, 550);
  }, [allPokemon, dispatch, inputDirty, searchTerm]);

  useEffect(() => {
    handlerSearch();
  }, [handlerSearch]);

  return (
    <header className={classes["search-bar"]}>
      <Link to="/" className={classes["search-bar__logo"]}>
        <h1>
          <small>Desafío</small>
          <br />
          PokeApi
        </h1>
      </Link>

      <div className={classes["search-bar__wrapper"]}>
        <input
          type="search"
          name="search"
          className={classes["search-bar__input"]}
          value={searchTerm}
          onChange={(e) => {
            const sanitizedTerm = sanitizeInput(e.target.value);
            if (sanitizedTerm === "") {
              setSearchTerm("");
            } else {
              setSearchTerm(sanitizedTerm);
              setInputDirty(true);
            }
          }}
          placeholder="Que pokemon buscas..."
        />
      </div>

      <BurgerIcon />
    </header>
  );
};
