import MovieCard from "../components/MovieCard";

function Home() {
  const movies = [
    { id: 1, title: "John Wick", release_date: "2014" },
    { id: 2, title: "The Matrix", release_date: "1999" },
    { id: 3, title: "Inception", release_date: "2010" },
    { id: 4, title: "Interstellar", release_date: "2014" },
  ];

  return (
    <div className="home">0
        <form onSubmit = {} className="search-form"></form>
      <div className="movies-grid">
        {movies.map((movie) => (
          <MovieCard movie={movie} key={movie.id} />
        ))}
      </div>
    </div>
  );
}

export default Home;









 Dakka 39:47