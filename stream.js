const fs = require("fs");
const path = require("path");
//as wjole and one time
// fs.readFile(path.resolve(__dirname, "text.txt"), (err, data) => {
//   if (err) {
//     throw err;
//   }

//   console.log(data);
// });

const stream = fs.createReadStream(path.resolve(__dirname, "lorem-ipsum.txt"), {
  encoding: "utf-8",
});

// stream.on("data", (chunk) => {
//   fs.appendFile(
//     "amount.txt",
//     `the amount of words is ${chunk.split(" ").length}`,
//     (err) => {
//       if (err) {
//         console.log(err);
//       }
//     }
//   );
// });

// stream.on("end", () => {
//   console.log("finished");
// });

// stream.on("open", () => {
//   console.log("started");
// });

// stream.on("error", (e) => {
//   console.log(e);
// });

// const writeableStream = fs.createWriteStream(
//   path.resolve(__dirname, "amount.txt")
// );

// for (let i = 0; i < 20; i++) {
//   writeableStream.write(i + "\n");
// }

// writeableStream.end();
// writeableStream.close();
// writeableStream.destroy();
// writeableStream.on("error");

const http = require("http");

http.createServer((req, res) => {});
