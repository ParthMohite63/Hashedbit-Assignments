import { useLocation } from "react-router-dom";

function BookingSuccess() {
  const location = useLocation();
  const { name, email, mobile, movieId } = location.state;

  const bookingId = Math.floor(Math.random() * 1000000);

  return (
    <div>
      <h2>Seat Booked Successfully 🎉</h2>

      <h3>Booking ID: {bookingId}</h3>

      <p><b>Movie ID:</b> {movieId}</p>
      <p><b>Name:</b> {name}</p>
      <p><b>Email:</b> {email}</p>
      <p><b>Mobile:</b> {mobile}</p>
    </div>
  );
}

export default BookingSuccess;
