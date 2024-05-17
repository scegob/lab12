function calcCircleGeometries(radius) {
  // Calculate circle properties
  var area = Math.PI * radius * radius;
  var circumference = 2 * Math.PI * radius;
  var diameter = 2 * radius;

  // Return an array containing the calculated values
  return [area, circumference, diameter];
}

function calculateGeometry() {
  // Get the radius input value
  var radius = parseFloat(document.getElementById("radius").value);

  // Calculate circle properties
  var results = calcCircleGeometries(radius);
  var area = document.getElementById("area");
  var circ = document.getElementById("circumference");
  var dia = document.getElementById("diameter");

  area.textContent = results[0].toFixed(2);
  circ.textContent = results[1].toFixed(2);
  dia.textContent = results[2].toFixed(2);

  return false;
}
