import "./App.css";
import MovieCard from "./componentes/MovieCard/MovieCards.jsx";
import Footer from "./componentes/footer/footer.jsx";
//import logo from

const App = () => {
  const movies = [
    {
      year: "2014",
      type: "Sci-Fi",
      title: "Interstellar",
      director: "Christopher Nolan",
      rating: 8.6,
      poster: "https://placehold.co/850x480",
    },
    {
      year: "2010",
      type: "Action",
      title: "Inception",
      boxOffice: "$836.8M",
      rating: 8.8,
      poster: "https://placehold.co/850x480",
    },
    {
      year: "2010",
      type: "Action",
      title: "The Expendables",
      boxOffice: "Não disponível na API",
      rating: 6.5,
      poster: "https://placehold.co/850x480",
    },
    {
      year: "2010",
      type: "Action",
      title: "Iron Man 2",
      boxOffice: "Não disponível na API",
      rating: 7.0,
      poster: "https://placehold.co/850x480",
    },
    {
      year: "2010",
      type: "Action",
      title: "Robin Hood",
      boxOffice: "Não disponível na API",
      rating: 6.7,
      poster: "https://placehold.co/850x480",
    },
    {
      year: "2010",
      type: "Action",
      title: "Shutter Island",
      boxOffice: "Não disponível na API",
      rating: 8.2,
      poster: "https://placehold.co/850x480",
    },
    {
      year: "2010",
      type: "Action",
      title: "Kick-Ass",
      boxOffice: "Não disponível na API",
      rating: 7.6,
      poster: "https://placehold.co/850x480",
    },
    {
      year: "2010",
      type: "Action",
      title: "Predators",
      boxOffice: "Não disponível na API",
      rating: 6.4,
      poster: "https://placehold.co/850x480",
    },
    {
      year: "2010",
      type: "Action",
      title: "The A-Team",
      boxOffice: "Não disponível na API",
      rating: 6.6,
      poster: "https://placehold.co/850x480",
    },
    {
      year: "2010",
      type: "Action",
      title: "Clash of the Titans",
      boxOffice: "Não disponível na API",
      rating: 5.8,
      poster: "https://placehold.co/850x480",
    },
    {
      year: "2010",
      type: "Action",
      title: "Salt",
      boxOffice: "Não disponível na API",
      rating: 6.5,
      poster: "https://placehold.co/850x480",
    },
  ];

  return (
    <div id="app">
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
