const charts = {
  vis01: "specs/01_line_index.json",
  vis02: "specs/02_diverging_bar.json",
  vis03: "specs/03_stacked_bar.json",
  vis04: "specs/04_donut.json",
  vis05: "specs/05_choropleth.json",
  vis06: "specs/06_proportional_symbol_map.json",
  vis07: "specs/07_dot_map.json",
  vis08: "specs/08_cartogram.json",
  vis09: "specs/09_slope.json",
  vis10: "specs/10_lollipop.json",
  vis11: "specs/11_connected_dot.json",
  vis12: "specs/12_heatmap.json",
  vis13: "specs/13_treemap.json",
  vis14: "specs/14_bump.json"
};

Object.entries(charts).forEach(([id, spec]) => {
  const el = document.getElementById(id);

  // draw the chart; show the real error if it fails
  vegaEmbed("#" + id, spec, { actions: false }).catch((err) => {
    console.error(spec, err);
    el.innerHTML =
      '<div class="placeholder">Chart ' + id.replace("vis", "") +
      " could not load (" + spec + ")<br><small>" + err.message + "</small></div>";
  });

  // link to the JSON spec under each chart
  const link = document.createElement("p");
  link.className = "spec-link";
  link.innerHTML = '<a href="' + spec + '" target="_blank" rel="noopener">View Vega-Lite spec (JSON)</a>';
  el.after(link);
});