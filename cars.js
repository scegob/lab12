var carDetails = [
  ["Nissan", "Ariya", "Black Diamond Pearl", 2023, 44485],
  ["Jeep", "Grand Cherokee", "White", 2023, 51935],
  ["Ford", "F-350 XLT", "Race Red", 2022, 63113],
  ["Chevrolet", "Volt LT", "Kinetic Blue", 2018, 15699],
  ["Volkswagen", "Beetle 2.0 TSi", "Reef Blue", 2013, 15499],
];

// Get the table body element
var tableBody = document.getElementById("tableBody");

// Populate the table with data
for (var i = 0; i < carDetails.length; i++) {
  var row = document.createElement("tr");
  for (var j = 0; j < carDetails[i].length; j++) {
    var cell = document.createElement("td");
    cell.textContent = carDetails[i][j];
    row.appendChild(cell);
  }
  tableBody.appendChild(row);
}
