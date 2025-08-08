import { NavLink, useParams } from "react-router";

export function MovieDetails() {
  const { id } = useParams();

  const movieList = [
    { id: 1, name: "smile", description: "this is a horror movie" },
    { id: 2, name: "fast & furious", description: "this is an action movie" },
  ];

  const movie = movieList.find((m) => m.id === parseInt(id));

  if (!movie) {
    return <h2>Movie not found</h2>;
  }

  return (
    <>
      <h2>Movie name: {movie.name}</h2>
      <p>{movie.description}</p>
      <NavLink to={"/movie"}>
        <button className="btn btn-primary">go back</button>
      </NavLink>
    </>
  );
}
