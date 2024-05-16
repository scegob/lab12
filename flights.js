class Flight {
  constructor(
    airline,
    number,
    origin,
    destination,
    dep_time,
    arrival_time,
    arrival_gate
  ) {
    this.airline = airline;
    this.number = number;
    this.origin = origin;
    this.destination = destination;
    this.dep_time = dep_time;
    this.arrival_time = arrival_time;
    this.arrival_gate = arrival_gate;
  }

  getFlightDuration() {
    const depTime = new Date(this.dep_time);
    const arrTime = new Date(this.arrival_time);
    const duration = (arrTime - depTime) / 1000 / 60; // Duration in minutes
    const hours = Math.floor(duration / 60);
    const minutes = duration % 60;
    return `${hours}h ${minutes}m`;
  }
}

// Data
const flights = [
  new Flight(
    "ASA",
    1077,
    "Washington Dulles Intl (KIAD)",
    "San Francisco Intl (KSFO)",
    "2024-05-15T19:32:00-05:00",
    "2024-05-15T22:10:00-08:00",
    "Gate X"
  ),
  new Flight(
    "ASA",
    1088,
    "San Francisco Intl (KSFO)",
    "Washington Dulles Intl (KIAD)",
    "2024-05-15T15:58:00-08:00",
    "2024-05-15T23:28:00-05:00",
    "Gate Y"
  ),
  new Flight(
    "ASA",
    1097,
    "Washington Dulles Intl (KIAD)",
    "Los Angeles Intl (KLAX)",
    "2024-05-15T17:06:00-05:00",
    "2024-05-15T19:24:00-08:00",
    "Gate Z"
  ),
  new Flight(
    "ASA",
    11,
    "Newark Liberty Intl (KEWR)",
    "Seattle-Tacoma Intl (KSEA)",
    "2024-05-15T17:00:00-05:00",
    "2024-05-15T19:27:00-08:00",
    "Gate A"
  ),
  new Flight(
    "ASA",
    1113,
    "Will Rogers World (KOKC)",
    "Seattle-Tacoma Intl (KSEA)",
    "2024-05-15T17:40:00-06:00",
    "2024-05-15T19:11:00-08:00",
    "Gate B"
  ),
];

// Function to populate the table with flight data
function populateTable() {
  const tableBody = document.getElementById("flight-table-body");
  flights.forEach((flight) => {
    const row = document.createElement("tr");
    row.innerHTML = `
            <td>${flight.airline}</td>
            <td>${flight.number}</td>
            <td>${flight.origin}</td>
            <td>${flight.destination}</td>
            <td>${new Date(flight.dep_time).toLocaleString()}</td>
            <td>${new Date(flight.arrival_time).toLocaleString()}</td>
            <td>${flight.arrival_gate}</td>
            <td>${flight.getFlightDuration()}</td>
        `;
    tableBody.appendChild(row);
  });
}

// Populate the table when the page loads
window.onload = populateTable;
