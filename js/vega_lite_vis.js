// ============================================
// CAN MALAYSIA FEED ITSELF?
// FIT2179 DV2 — vega_lite_vis.js
// ============================================

const embedConfig = {
  actions: false,
  renderer: "svg",
  theme: "none"
};

// --- Chart 1: Import vs Export Value Trend ---
vegaEmbed("#chart1", "js/chart1_line.vg.json", embedConfig).catch(console.error);

// --- Chart 2: Crop Category Donut ---
vegaEmbed("#chart2", "js/chart2_tradedeficit.vg.json", embedConfig).catch(console.error);

// --- Chart 3: SSR Lollipop ---
vegaEmbed("#chart3", "js/chart3_lollipop.vg.json", embedConfig).catch(console.error);

// --- Chart 4: SSR Bar ---
vegaEmbed("#chart4", "js/chart4_bar.vg.json", embedConfig).catch(console.error);

// --- Chart 5: Waffle ---
vegaEmbed("#chart5", "js/chart5_waffle.vg.json", embedConfig).catch(console.error);

// --- Chart 6: Choropleth Map ---
vegaEmbed("#chart6", "js/chart6_map.vg.json", embedConfig).catch(console.error);

// --- Chart 7: Stacked Bar ---
vegaEmbed("#chart7", "js/chart7_stackedbar.vg.json", embedConfig).catch(console.error);

// --- Chart 8: Bump Chart ---
vegaEmbed("#chart8", "js/chart8_bump.vg.json", embedConfig).catch(console.error);

// --- Chart 9: Bubble Scatter ---
vegaEmbed("#chart9", "js/chart9_scatter.vg.json", embedConfig).catch(console.error);

// --- Chart 10: Multi-line ---
vegaEmbed("#chart10", "js/chart10_multiline.vg.json", embedConfig).catch(console.error);

// --- Chart 11: Dumbbell ---
vegaEmbed("#chart11", "js/chart11_dumbbell.vg.json", embedConfig).catch(console.error);

// --- Chart 12: Annotated Bar ---
// vegaEmbed("#chart12", "js/chart12_bar.vg.json", embedConfig).catch(console.error);
