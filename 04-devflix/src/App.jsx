import { useEffect, useState } from "react";
import "./App.css";
import MovieCard from "./componentes/MovieCard/MovieCards.jsx";
import Footer from "./componentes/footer/footer.jsx";
//import logo from

const App = () => {
const [search,setSearch] = useState("");
const [movies,setMovies] = useState([]);

//utilizando chave de API do arquivo .env
const apikey = import.meta.env.VITE_OMDB_API_KEY
const apiUrl = 'https://omdbarpi.com/?apikey=${apikey';

useEffect(() => {
  searchMovies("Batman");
}, []);

//criando a conexão com a API e trazendo informações
const searchMovies= async (title) => {
const response = await fetch('${apiUrl}&s=${title}');
const data =await response.json();

//alimentando o movies
setMovies(data.Search);
};
  return (
    <div id="app">
      <h1>Olá</h1>
      <img className="logo" src={"https://placehold.co/200x200"} alt="" />

      <div className="search">
        <import type="text" placeholder="pesquisar por filmes" />
        <img src={"https://placehold.co/20x20"} alt="" />
      </div>

      {movies.map((movie, index) => (
        <MovieCard key={index} {...movie} />
      ))}

      <Footer
        DEVName={"Eloá Franco dos Reis Silva "}
        DEVLink={"https://github.com/eloasenai"}
      />
      <MovieCard
        year={2024}
        type={"Movie"}
        title={"Coraline"}
        poster={"https://placehold.co/300x444"}
      />
      <MovieCard
        year={2023}
        type={"Movie"}
        title={"Noiva Cadaver"}
        poster={"https://placehold.co/300x444"}
      />
    </div>
  );
};
export default App;
