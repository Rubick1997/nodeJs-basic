const os = require("os");
const cluster = require("cluster");

// console.log(os.platform());
// console.log(os.arch());
// console.log(os.cpus().length);

// if (cluster.isMaster) {
//   for (let i = 0; i < os.cpus().length - 2; i++) {
//     cluster.fork();
//   }
//   cluster.on("exit", (worker) => {
//     console.log(`worker with pid = ${worker.process.pid} has died`);
//     cluster.fork();
//   });
// } else {
//   console.log(`Worker with pid= ${process.pid} was launched`);
//   setInterval(() => {
//     console.log(`Worker with pid = ${process.pid} still works`);
//   }, 5000);
// }
