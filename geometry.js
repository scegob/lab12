// Define the function calcCircleGeometries
function calcCircleGeometries(radius) {
  // Calculate the area, circumference, and diameter
  var area = Math.PI * radius * radius;
  var circumference = 2 * Math.PI * radius;
  var diameter = 2 * radius;

  // Return the array containing the calculated values
  return [area, circumference, diameter];
}

// Array of radius values to test
var radiusValues = [5, 8, 10];

// Get the div to display results
var resultsDiv = document.getElementById("results");

// Loop through each radius value and display the results
radiusValues.forEach(function (radius) {
  // Calculate geometries for the current radius
  var geometries = calcCircleGeometries(radius);

  // Create a paragraph element to display the results
  var paragraph = document.createElement("p");
  paragraph.textContent =
    "Radius: " +
    radius +
    ", Area: " +
    geometries[0] +
    ",<br> Circumference: " +
    geometries[1] +
    ",<br> Diameter: " +
    geometries[2];

  // Append the paragraph to the results div
  resultsDiv.appendChild(paragraph);
});
