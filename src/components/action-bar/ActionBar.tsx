import { useNavigate } from "react-router-dom";

import { useAppDispatch, useAppSelector } from "../../hooks";
import {
  addPokemonToCombat,
  removePokemonFromCombat,
} from "../../store/slices";
import { ActionBarProps } from "./ActionBar.def";
import classes from "./ActionBar.module.scss";
import { Button } from "../button";
import { BurgerIcon } from "../burger-icon";

export const ActionBar = ({ pokemon }: ActionBarProps) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const combatList = useAppSelector((state) => state.combat.combatList);

  const handleGoBack = () => {
    navigate("/");
  };

  const handleAddPokemonToCombat = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.stopPropagation();
    dispatch(addPokemonToCombat(pokemon));
  };

  const handleRemovePokemonToCombat = (
    event: React.MouseEvent<HTMLButtonElement>,
    id: number
  ) => {
    event.stopPropagation();
    dispatch(removePokemonFromCombat(id));
  };

  const isPokemonInCombatList = (id: number) => {
    return combatList.some((pokemon) => pokemon.id === id);
  };

  return (
    <div className={classes["action-bar"]}>
      <Button iconName="ri-arrow-go-back-line" onClick={handleGoBack}>
        Volver
      </Button>

      {isPokemonInCombatList(Number(pokemon.id)) ? (
        <Button
          iconName="ri-delete-bin-2-line"
          backgroundColor="remove-item"
          onClick={(e) => handleRemovePokemonToCombat(e, Number(pokemon.id))}
        >
          Quitar del Combate
        </Button>
      ) : (
        <Button
          iconName="ri-add-line"
          backgroundColor="add-item"
          onClick={handleAddPokemonToCombat}
        >
          Agregar al Combate
        </Button>
      )}

      <BurgerIcon />
    </div>
  );
};
