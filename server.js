const PORT = process.env.PORT || 4000;
const Application = require("./framework/Application");
const userRouter = require("./src/user-router");
const jsonParser = require("./framework/parseJson");
const parseUrl = require("./framework/parseUrl");
const mongoose = require("mongoose");

const app = new Application();

app.use(jsonParser);
app.use(parseUrl("http://localhost:4000"));

app.addRouter(userRouter);

const start = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://user:123@cluster0.jkoxd.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
    );

    app.listen(PORT, () => console.log(`Server started on PORT ${PORT}`));
  } catch (error) {
    console.log(error);
  }
};

start();
