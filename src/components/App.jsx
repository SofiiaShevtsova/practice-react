// import ListOfAlbumsn from "./ListOfAlbums/ListOfAlbums";
import Home from "pages/HomePage/Home";
import PokemonsList from "pages/PokemonsListPage/PokemonsList";
import PokemonModal from "pages/PokemonModal/PokemonModal";
import { Routes, Route, Link, Outlet, Navigate } from "react-router-dom";

const Loyout = () => {
  return (
    <><nav><Link to="/"> Home </Link>
<Link to="pokemons"> Pokemons </Link></nav>
      <Outlet />
    </>

  )
}

export const App = () => {
  return (
    <div
      style={{
        height: '100%',
        display: 'flex',
        flexDirection: `column`,
        alignItems: `center`,
        color: '#010101',
      }}
    >
      <Routes>
        <Route path="/" element={<Loyout/>}>
          <Route index element={<Home />} />
          <Route path='pokemons' element={<PokemonsList />}>
          <Route path=':query' element={<PokemonModal/> } />
          </Route >
          <Route path="*" element={<Navigate to="/" />} />
      </Route>
      </Routes>

    </div>
  );
};
