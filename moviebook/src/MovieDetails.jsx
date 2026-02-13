import { useParams, useNavigate } from "react-router-dom";

function MovieDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  return (
    <div>
      <h2>Movie Details Page</h2>

      <p>Movie ID: {id}</p>
      <p>Movie Name: Movie {id}</p>

      <button onClick={() => navigate(`/book/${id}`)}>
        Book Seat
      </button>
    </div>
  );
}

export default MovieDetails;
