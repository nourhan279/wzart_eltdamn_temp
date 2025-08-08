import { NavLink } from "react-router";
import { Navbar } from "../Components/Navbar/Navbar";

export function Movies() {
  const movieList = [
    { id: 1, name: "smile", description: "this is a horror movie" },
    { id: 2, name: "fast & furious", description: "this is an action movie" },
  ];
  return (
    <>
      <Navbar />
      <section>
        <div className="container p-5">
          <div className="row">
            {movieList.map((movie) => (
              <div className="col-3" key={movie.id}>
                <div className="card p-4">
                  <NavLink to={`/MovieDetails/${movie.id}`}>
                    Name: {movie.name}
                  </NavLink>
                  <p>{movie.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
