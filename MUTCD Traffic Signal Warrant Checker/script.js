function checkWarrants() {
  const major = parseInt(document.getElementById("majorVolume").value);
  const minor = parseInt(document.getElementById("minorVolume").value);
  const peak = parseInt(document.getElementById("peakHourVolume").value);
  const context = document.getElementById("context").value;

  const results = [];

  // Warrant 1: Simplified threshold logic
  if (major >= 500 && minor >= 150) {
    results.push("✅ **Warrant 1 (8-Hour Volume)** is likely MET.");
  } else {
    results.push("❌ Warrant 1 not met.");
  }

  // Warrant 2: Simplified logic for 4-hour volumes
  if (major >= 600 && minor >= 200) {
    results.push("✅ **Warrant 2 (4-Hour Volume)** is likely MET.");
  } else {
    results.push("❌ Warrant 2 not met.");
  }

  // Warrant 3: Peak hour threshold
  if (peak >= 150 && context === "urban") {
    results.push("✅ **Warrant 3 (Peak Hour)** is likely MET (Urban).");
  } else if (peak >= 100 && context === "rural") {
    results.push("✅ **Warrant 3 (Peak Hour)** is likely MET (Rural).");
  } else {
    results.push("❌ Warrant 3 not met.");
  }

  // Display
  document.getElementById("results").innerHTML = results.map(r => `<p>${r}</p>`).join("");
}
