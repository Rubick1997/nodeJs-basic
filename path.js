const path = require("path");

console.log(
  "allows to combine paths independently from the operating system",
  path.join(__dirname, "first", "second")
);
const fullPath = path.resolve("first", "second", "third.js");
console.log("Path parsing", path.parse(fullPath));

const siteUrl = "http://localhost:8080/users?id=5123";

const url = new URL(siteUrl);

console.log(url);
