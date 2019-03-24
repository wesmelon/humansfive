import * as d3 from 'd3';
import data from './data.js';

const width = 680;
const height = 680;

const color = (d) => {
  const scale = d3.scaleOrdinal(d3.schemeCategory10);
  return scale(d.group);
};

const drag = simulation => {
  function dragstarted(d) {
    if (!d3.event.active) simulation.alphaTarget(0.3).restart();
    d.fx = d.x;
    d.fy = d.y;
  }

  function dragged(d) {
    d.fx = d3.event.x;
    d.fy = d3.event.y;
  }

  function dragended(d) {
    if (!d3.event.active) simulation.alphaTarget(0);
    d.fx = null;
    d.fy = null;
  }

  return d3.drag()
      .on("start", dragstarted)
      .on("drag", dragged)
      .on("end", dragended);
}

const chart = (data) => {
  console.log(data);
  const links = data.links.map(d => Object.create(d));
  const nodes = data.nodes.map(d => Object.create(d));

  const simulation = d3.forceSimulation(nodes)
      .force("link", d3.forceLink(links).id(d => d.id).distance(80))
      .force("charge", d3.forceManyBody().strength(-300))
      .force("x", d3.forceX())
      .force("y", d3.forceY());

  const svg = d3.select('svg#canvas')
      .attr("viewBox", [-width / 2, -height / 2, width, height]);

  const link = svg.append("g")
      .attr("stroke", "#000")
      .attr("stroke-opacity", 0.4)
    .selectAll("line")
    .data(links)
    .join("line")
      .attr("stroke-width", 1);

  const node = svg.append("g")
      .attr("stroke", "#fff")
      .attr("stroke-width", 3)
    .selectAll("g")
    .data(nodes)
    .join("g")
      .call(drag(simulation));

  node.append("image")
    .attr("width", 36)
    .attr("height", 36)
    .attr("x", -18)
    .attr("y", -18)
    .attr("xlink:href", d => d.face)

  node.append("rect")
    .attr("x", -40)
    .attr("y", -36)
    .attr("fill", "#fff")
    .attr("width", 80)
    .attr("height", 14)
    .attr("rx", 8)
    .attr("ry", 8)
    .attr("stroke-opacity", 0.6)
    .attr("stroke-width", 0.5)
    .attr("stroke", "#000")

  node.append("text")
    .text(d => d.id)
    .attr("x", 0)
    .attr("y", -28)
    .attr("dominant-baseline", "middle")
    .attr("text-anchor", "middle")
    .attr("stroke-width", 0.1)
    .attr("stroke", "#000");

  simulation.on("tick", () => {
    link
        .attr("x1", d => d.source.x)
        .attr("y1", d => d.source.y)
        .attr("x2", d => d.target.x)
        .attr("y2", d => d.target.y);

    node
        .attr("transform", d => `translate(${d.x}, ${d.y})`)
  });

  return svg.node();
}

chart(data);