const Emitter = require("events");

const emitter = new Emitter();

emitter.on("message", (data, second) => {
  console.log("You've sent message" + data);
  console.log("Second argument" + second);
});

const message = process.env.MESSAGE || "";

if (message) {
  emitter.emit("message", message, 123);
} else {
  emitter.emit("message", "Message was not defined");
}

//When is it handy? => http, websockets, long pulling, clusters