// selecting svg
const svg = d3.select("svg");

// adding data
d3.json("./planets.json").then(data => {
  const circs = svg.selectAll("circle").data(data);
  circs
    .attr("cy", 200)
    .attr("cx", d => d.distance)
    .attr("r", d => d.radius)
    .attr("fill", d => d.fill);

  // enter selection
  circs
    .enter()
    .append("circle")
    .attr("cy", 200)
    .attr("cx", d => d.distance)
    .attr("r", d => d.radius)
    .attr("fill", d => d.fill);
});
