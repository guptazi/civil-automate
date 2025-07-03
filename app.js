const signs = [{
    type: "Regulatory",
    name: "Stop Sign",
    code: "R1-1",
    image: "https://mutcd.fhwa.dot.gov/HTM/2009/part2/fig2b_01_longdesc.htm",
    description: "Used at intersections to assign right-of-way. Full stop required."
  },
  {
    type: "Regulatory",
    name: "Yield Sign",
    code: "R1-2",
    image: "https://mutcd.fhwa.dot.gov/HTM/2009/part2/fig2b_01_longdesc.htm",
    description: "Used to assign right-of-way without requiring a full stop."
  },
  {
    type: "Warning",
    name: "Pedestrian Crossing",
    code: "W11-2",
    image: "https://mutcd.fhwa.dot.gov/HTM/2009/part2/fig2c_06_longdesc.htm",
    description: "Warns drivers of pedestrian crossings ahead."
  },
  {
    type: "Warning",
    name: "Merge Sign",
    code: "W4-1",
    image: "https://mutcd.fhwa.dot.gov/HTM/2009/part2/fig2c_05_longdesc.htm",
    description: "Warns of merging lanes or traffic ahead."
  },
  {
    type: "Guide",
    name: "Exit Sign",
    code: "E1-5",
    image: "https://mutcd.fhwa.dot.gov/HTM/2009/part2/fig2e_11_longdesc.htm",
    description: "Provides information about freeway exits."
  },
  {
    type: "Guide",
    name: "Route Marker",
    code: "M1-1",
    image: "https://mutcd.fhwa.dot.gov/HTM/2009/part2/fig2d_01_longdesc.htm",
    description: "Marks a U.S. numbered route."
  }];

const signTypeSelect = document.getElementById("signType");
const signNameSelect = document.getElementById("signName");
const resultDiv = document.getElementById("result");

// Update sign options when type changes
signTypeSelect.addEventListener("change", () => {
  const selectedType = signTypeSelect.value;
  signNameSelect.innerHTML = '<option value="">-- Choose Sign --</option>';

  const filteredSigns = signs.filter(sign => sign.type === selectedType);
  filteredSigns.forEach(sign => {
    const option = document.createElement("option");
    option.value = sign.name;
    option.textContent = sign.name;
    signNameSelect.appendChild(option);
  });
});

// Show sign details
signNameSelect.addEventListener("change", () => {
  const selectedName = signNameSelect.value;
  const selectedSign = signs.find(sign => sign.name === selectedName);

  if (selectedSign) {
    resultDiv.innerHTML = `
      <h3>${selectedSign.name} (${selectedSign.code})</h3>
      <img src="${selectedSign.image}" alt="${selectedSign.name}" />
      <p>${selectedSign.description}</p>
    `;
  } else {
    resultDiv.innerHTML = "";
  }
});
