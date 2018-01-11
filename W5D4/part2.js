function titleize(nameArr, callback) {
  let titleized = [];

  for (let i = 0; i < nameArr.length; i++) {
    titleized[i] = `Mx. ${nameArr[i]} Jingleheimer Schmidt`;
  }

  callback(titleized);
}

titleize(["Mary", "Brian", "Leo"], (arr) => {
  arr.forEach((name) => console.log(name));
});

function Elephant(name, height, tricks) {
  this.name = name;
  this.height = height;
  this.tricks = tricks;
}

Elephant.prototype.trumpet = function () {
  console.log(`${this.name} the elephant goes 'phrRRRRRRRRRRR!!!!!!!'`);
};

Elephant.prototype.grow = function () {
  this.height += 12;
};

Elephant.prototype.addTrick = function (trick) {
  this.tricks.push(trick);
};

Elephant.prototype.play = function () {
  return this.tricks[Math.floor(Math.random() * Math.floor(this.tricks.length))];
};

var lawrence = new Elephant('Lawrence', 56, ['These', 'Are', 'My', 'Tricks']);
console.log(lawrence.trumpet());
console.log(lawrence.height);
lawrence.grow();
console.log(lawrence.height);
console.log(lawrence.tricks);
lawrence.addTrick("Now");
console.log(lawrence.tricks);
console.log(lawrence.play());

let ellie = new Elephant("Ellie", 185, ["giving human friends a ride", "playing hide and seek"]);
let charlie = new Elephant("Charlie", 200, ["painting pictures", "spraying water for a slip and slide"]);
let kate = new Elephant("Kate", 234, ["writing letters", "stealing peanuts"]);
let micah = new Elephant("Micah", 143, ["trotting", "playing tic tac toe", "doing elephant ballet"]);

let herd = [ellie, charlie, kate, micah];

Elephant.paradeHelper = function (elephant) {
  console.log(`${elephant.name} is trotting by!`);
};

herd.forEach(Elephant.paradeHelper);

function dinerBreakfast() {
  let order = "I'd like chips please";
  console.log(order);

  function orderMore(more) {
    order = order.slice(0, order.length - 8) + ` and ${more} please.`;
    console.log(order);
  }

  return orderMore;
}

let bfastOrder = dinerBreakfast();
bfastOrder("more chips");
bfastOrder("maybe some milk");
bfastOrder("and some good grades");
