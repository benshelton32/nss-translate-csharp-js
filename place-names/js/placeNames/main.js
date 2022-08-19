// Put your code here

const names = [
  "Nashville", "Hong Kong", "The back yard", "Earth",
  "London", "The mall", "Ryman Auditorium", "The Great Wall of China"
];

console.log("All Pace Names");

for (const name of names) {
  console.log(name);
}

let filteredNames = []

for (const name of names) {
  if (name.startsWith("The")) {
    filteredNames.push(name)
  }
}

console.log("'The' PLace Names")

for (const name of filteredNames) {
  console.log(name)
}