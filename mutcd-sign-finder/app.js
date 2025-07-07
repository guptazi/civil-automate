const signs = [{
    type: "Regulatory",
    name: "Stop Sign",
    code: "R1-1",
    image: "https://purepng.com/public/uploads/large/purepng.com-sign-stoptraffic-signsign-stopnotify-driversstop-signs-1701527614263a3116.png",
    description: "Used at intersections to assign right-of-way. Full stop required."
  },
  {
    type: "Regulatory",
    name: "Yield Sign",
    code: "R1-2",
    image: "https://natcap.com/wp-content/uploads/NCI-Sign-Department-Inventory_TDS331.jpg",
    description: "Used to assign right-of-way without requiring a full stop."
  },
  {
    type: "Warning",
    name: "Pedestrian Crossing",
    code: "W11-2",
    image: "https://static.vecteezy.com/system/resources/previews/008/952/400/non_2x/yield-to-pedestrians-road-sign-traffic-sign-on-white-background-vector.jpg",
    description: "Warns drivers of pedestrian crossings ahead."
  },
  {
    type: "Warning",
    name: "Merge Sign",
    code: "W4-1",
    image: "https://m.media-amazon.com/images/I/61mcYGdJkHL._SL1500_.jpg",
    description: "Warns of merging lanes or traffic ahead."
  },
  {
    type: "Guide",
    name: "Exit Sign",
    code: "E1-5",
    image: "https://as1.ftcdn.net/v2/jpg/06/19/64/58/1000_F_619645833_r0r6W0SoVEHOfHBy1LFFvuEc5dMWDLc8.jpg",
    description: "Provides information about freeway exits."
  },
  {
    type: "Guide",
    name: "Route Marker",
    code: "M1-1",
    image: "https://images.roadtrafficsigns.com/img/lg/K/us-101-washington-route-marker-shield-sign-k2-5110.png",
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
