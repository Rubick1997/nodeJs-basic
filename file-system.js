const fs = require("fs");
const path = require("path");

// fs.mkdirSync(path.resolve(__dirname, "dir", "dir2", "dir3"), {
//   recursive: true,
// });

//async way of mkdir
// console.log("start");

// fs.mkdir(path.resolve(__dirname, "dir"), (err) => {
//   if (err) {
//     console.log(err);
//     return;
//   }
//   console.log("Folder was created");
// });

// console.log("end");

// fs.rmdir(path.resolve(__dirname, "dir"), (err) => {
//   if (err) {
//     throw err;
//   }
//   console.log("folder was deleted");
// });

//in case of callbacks
// fs.writeFile(path.resolve(__dirname, "text.txt"), "hey brother", (err) => {
//   if (err) {
//     throw err;
//   }
//   console.log("file was recorded");

//   fs.appendFile(path.resolve(__dirname, "text.txt"), " how are you", (err) => {
//     if (err) {
//       throw err;
//     }
//     console.log("file was recorded");
//   });
// });

//in case of promises

const writeFileAsync = async (path, data) => {
  return new Promise((resolve, reject) =>
    fs.writeFile(path, data, (err) => {
      if (err) {
        return reject(err.message);
      }
      resolve();
    })
  );
};
const appendFileAsync = async (path, data) => {
  return new Promise((resolve, reject) =>
    fs.appendFile(path, data, (err) => {
      if (err) {
        return reject(err.message);
      }
      resolve();
    })
  );
};
const readFileAsync = async (path) => {
  return new Promise((resolve, reject) =>
    fs.readFile(path, { encoding: "utf-8" }, (err, data) => {
      if (err) {
        return reject(err.message);
      }
      resolve(data);
    })
  );
};
const removeFileAsync = async (path) => {
  return new Promise((resolve, reject) =>
    fs.rm(path, { encoding: "utf-8" }, (err) => {
      if (err) {
        return reject(err.message);
      }
      resolve();
    })
  );
};

// writeFileAsync(path.resolve(__dirname, "text.txt"), "data")
//   .then(() => appendFileAsync(path.resolve(__dirname, "text.txt"), "123"))
//   .then(() => appendFileAsync(path.resolve(__dirname, "text.txt"), "456"))
//   .then(() => appendFileAsync(path.resolve(__dirname, "text.txt"), "789"))
//   .then(() => readFileAsync(path.resolve(__dirname, "text.txt")))
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err));

// removeFileAsync(path.resolve(__dirname, "text.txt"));

// const text = process.env.TEXT || "";

// writeFileAsync(path.resolve(__dirname, "text.txt"), text)
//   .then(() => readFileAsync(path.resolve(__dirname, "text.txt")))
//   .then((data) => data.split(" ").length)
//   .then((count) =>
//     writeFileAsync(
//       path.resolve(__dirname, "count.txt"),
//       `Amount of words: ${count}`
//     )
//   )
//   .then(() => removeFileAsync(path.resolve(__dirname, "text.txt")))
//   .catch((err) => console.log(err));
