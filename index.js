const canvas = d3.select(".canvas");
const svg = canvas
  .append("svg")
  .attr("width", 600)
  .attr("height", 600);

// Creating group
const group = svg.append("g");

// Creating rectangle
group
  .append("rect")
  .attr("x", 20)
  .attr("y", 20)
  .attr("width", 100)
  .attr("height", 100)
  .attr("fill", "red");

// Creating a circle inside the rectangle
group
  .append("circle")
  .attr("cx", 70)
  .attr("cy", 70)
  .attr("r", 50)
  .attr("fill", "pink");

// Creating a cross mark inside the circle
// Vertical Line
group
  .append("line")
  .attr("x1", 70)
  .attr("y1", 20)
  .attr("x2", 70)
  .attr("y2", 120)
  .attr("stroke", "grey");
// Horizontal Line
group
  .append("line")
  .attr("x1", 20)
  .attr("y1", 70)
  .attr("x2", 120)
  .attr("y2", 70)
  .attr("stroke", "grey");

// Translating the group as a whole
group.attr("transform", "translate(100, 300)");
