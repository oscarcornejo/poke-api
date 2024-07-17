# PokeApi + React + TypeScript + Redux Toolkit

## Descripción

Este proyecto es una aplicación web que consume la PokeApi para mostrar la información de 151 diferentes Pokémon.

## Características

- **Consumo de API**: Obtención de datos de la PokeApi.
- **React**: Desarrollo de componentes reutilizables.
- **TypeScript**: Tipado estático para mayor robustez y mantenimiento del código.
- **Redux Toolkit**: Manejo eficiente del estado global de la aplicación.
- **redux-persist**: Persistencia del estado en el almacenamiento local.

## Instalación

Para clonar y ejecutar esta aplicación, necesitas [Git](https://git-scm.com) y [Node.js](https://nodejs.org/en/download/):

```bash
# Clona este repositorio
git clone https://github.com/oscarcornejo/poke-api.git

# Ve al repositorio clonado
cd poke-api

# Instala las dependencias
npm install
```

## Enviroment

Para que la aplicación funcione correctamente, es necesario crear un archivo `.env` en la raíz del proyecto con la siguiente variable de entorno (Actualmente ya se proporciona este archivo en el repositorio):

```env
VITE_POKE_API_URL="https://pokeapi.co/api/v2"
VITE_POKE_API_GET_POKEMON="https://pokeapi.co/api/v2/pokemon"
VITE_POKE_API_LIMIT="?limit=151"
```

## Uso

Para iniciar la aplicación en modo desarrollo:

```bash
npm run dev
```

Luego, abre http://localhost:5173 para ver la aplicación en tu navegador.

## Contribuir

Las contribuciones son bienvenidas. Si tienes alguna idea o mejora, no dudes en abrir un issue o enviar un pull request.
