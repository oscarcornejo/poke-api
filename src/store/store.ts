import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { persistStore, persistReducer } from "redux-persist";

import { AppSlice, SidebarSlice, PokemonSlice, CombatSlice } from "./slices";
import { pokemonApi } from "../services";

const persistConfig = {
  key: "root",
  storage,
};

const persistedPokemonReducer = persistReducer(
  persistConfig,
  PokemonSlice.reducer
);
const persistedSidebarReducer = persistReducer(
  persistConfig,
  SidebarSlice.reducer
);
const persistedCombatReducer = persistReducer(
  persistConfig,
  CombatSlice.reducer
);

export const store = configureStore({
  reducer: {
    app: AppSlice.reducer,
    pokemon: persistedPokemonReducer,
    sidebar: persistedSidebarReducer,
    combat: persistedCombatReducer,
    [pokemonApi.reducerPath]: pokemonApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ["persist/PERSIST"],
      },
    }).concat(pokemonApi.middleware),
});

export const persistor = persistStore(store);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
