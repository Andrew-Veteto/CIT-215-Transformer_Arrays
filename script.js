var box = document.createElement("div");
var wrapper = document.createElement("div");
box.classList.add("wrapper");
document.body.append(wrapper);

var chrs = [
  { name: "Optimus Prime", class: "leader", afl: "autobot", vehicle: "truck" },
  { name: "Megatron", class: "leader", afl: "decepticon", vehicle: "tank" },
  { name: "Bumblebee", class: "scout", afl: "autobot", vehicle: "car" },
  { name: "Starscream", class: "scout", afl: "decepticon", vehicle: "plane" },
  { name: "Ironhide", class: "soldier", afl: "autobot", vehicle: "truck" },
  { name: "Brawl", class: "soldier", afl: "decepticon", vehicle: "tank" }
];

for (i = 0; i < chrs.length; i++) {
  var ele = document.createElement("div");
  var eleName = document.createElement("div");
  var eleClass = document.createElement("div");
  var eleVehicle = document.createElement("div");

  boxMaker(chrs[i].name, chrs[i].class, chrs[i].afl, chrs[i].vehicle);
  
}

function boxMaker(name, classs, afl, vehicle) {
  let box = document.createElement("div");
  box.classList.add("character");

  let eleName = document.createElement("div");
  let eleClass = document.createElement("div");
  let eleVehicle = document.createElement("div");
  let eleImage = document.createElement("img");

  if (afl === "autobot") {
    box.classList.add("autobot");
    eleImage.src =
      "https://cdn4.iconfinder.com/data/icons/proglyphs-free/512/Autobot-512.png";
    box.appendChild(eleImage);
  } else {
    box.classList.add("decepticon");
    eleImage.src =
      "https://cdn4.iconfinder.com/data/icons/proglyphs-free/512/Decepticon-512.png";
    box.appendChild(eleImage);
  }

  if (vehicle === "truck") {
    eleVehicle.style.color = "blue";
  } else if (vehicle === "tank") {
    eleVehicle.style.color = "green";
  } else if (vehicle === "car") {
    eleVehicle.style.color = "gold";
  } else{
    eleVehicle.style.color = "white";
  }

  eleName.innerHTML = "Name: " + name;
  eleClass.innerHTML = "Class: " + classs.toUpperCase();
  eleVehicle.innerHTML = "Vehicle: " + vehicle;

  box.appendChild(eleName);
  box.appendChild(eleClass);
  box.appendChild(eleVehicle);

  wrapper.appendChild(box);
}
