import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CombatState, ReturnPokemonMapper } from "../../models";
import { toast } from "react-toastify";

const initialState: CombatState = {
  combatList: [],
};

export const CombatSlice = createSlice({
  name: "combat",
  initialState,
  reducers: {
    addPokemonToCombat: (state, action: PayloadAction<ReturnPokemonMapper>) => {
      if (state.combatList.length < 6) {
        state.combatList.push(action.payload);
        toast.success(`${action.payload.name} agregado a la lista de Combate!`);
      } else {
        toast.warn("La lista de Combate está Completa!");
      }
    },
    removePokemonFromCombat: (state, action: PayloadAction<number>) => {
      state.combatList = state.combatList.filter(
        (pokemon) => pokemon.id !== action.payload
      );

      toast.info(`Pokemon removido de la lista de Combate!`);
    },
  },
});

export const { addPokemonToCombat, removePokemonFromCombat } =
  CombatSlice.actions;
