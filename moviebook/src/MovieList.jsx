import { Link } from "react-router-dom";

const movies = [
  { id: 1, name: "Avengers", img: "/avenger.jfif" },
  { id: 2, name: "Batman", img: "/batman.jpg" },
  { id: 3, name: "Spider-Man", img: "/spiderman.jfif" },
  { id: 4, name: "Iron Man", img: "/iron man.jfif" },
  { id: 5, name: "Thor", img: "/thor.jfif" },
  { id: 6, name: "Joker", img: "/joker.jfif" },
  { id: 7, name: "Doctor Strange", img: "/doctor strange.jfif" },
  { id: 8, name: "Black Panther", img: "/black panther.jfif" },
];

function MovieList() {
  return (
    <div>
      <h2 style={{ textAlign: "center" }}>🎬 Movie List</h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: "20px",
          padding: "20px",
        }}
      >
        {movies.map((movie) => (
          <Link
            key={movie.id}
            to={`/movie/${movie.id}`}
            style={{ textDecoration: "none", color: "black" }}
          >
            <div
              style={{
                border: "1px solid gray",
                borderRadius: "10px",
                padding: "10px",
                textAlign: "center",
                cursor: "pointer",
              }}
            >
              <img
                src={movie.img}
                alt={movie.name}
                width="150"
                height="200"
                style={{ borderRadius: "8px" }}
              />

              <p style={{ marginTop: "10px", fontWeight: "bold" }}>
                {movie.name}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default MovieList;
