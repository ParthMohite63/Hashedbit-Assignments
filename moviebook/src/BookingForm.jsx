import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function BookingForm() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    navigate("/success", {
      state: { name, email, mobile, movieId: id },
    });
  }

  return (
    <div>
      <h2>Booking Form</h2>

      <form onSubmit={handleSubmit}>
        <input
          placeholder="Enter Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <br /><br />

        <input
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br /><br />

        <input
          placeholder="Enter Mobile"
          value={mobile}
          onChange={(e) => setMobile(e.target.value)}
        />
        <br /><br />

        <button type="submit">Submit Booking</button>
      </form>
    </div>
  );
}

export default BookingForm;
