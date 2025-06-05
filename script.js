let selectedMovie = "";
let selectedSeats = [];

function selectMovie(movieName) {
  selectedMovie = movieName;
  selectedSeats = [];
  document.getElementById("selected-movie-title").textContent = `Booking for: ${movieName}`;
  document.getElementById("booking-section").classList.remove("hidden");

  const seatsGrid = document.getElementById("seats-grid");
  seatsGrid.innerHTML = "";

  for (let i = 1; i <= 25; i++) {
    const seat = document.createElement("div");
    seat.className = "seat";
    seat.textContent = i;
    seat.onclick = () => toggleSeat(i, seat);
    seatsGrid.appendChild(seat);
  }
}

function toggleSeat(seatNumber, seatElement) {
  if (selectedSeats.includes(seatNumber)) {
    selectedSeats = selectedSeats.filter(s => s !== seatNumber);
    seatElement.classList.remove("selected");
  } else {
    selectedSeats.push(seatNumber);
    seatElement.classList.add("selected");
  }
}

function confirmBooking() {
  if (selectedSeats.length === 0) {
    alert("Please select at least one seat!");
    return;
  }

  console.log(`🎟 Booking Confirmed for "${selectedMovie}"`);
  console.log(`🪑 Seats: ${selectedSeats.join(", ")}`);
  alert(`Booking confirmed for "${selectedMovie}"!\nSeats: ${selectedSeats.join(", ")}`);
}

