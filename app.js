const express = require("express");
const app = express();
require("dotenv").config();

const tasks = require("./routes/tasks");
const connectDb = require("./db/connect");
const notFound = require("./middleware/not-found");
const errorHandlerMidleware = require("./middleware/error-handler");

//midlleware

//connect static files here
app.use(express.static("./public"));
//the express.json()will let us access the data via req.body
app.use(express.json());

app.use("/api/v1/tasks", tasks);
app.use("/app/v1/tasks/:id", tasks);
//the notFound middleware is to handle the not existed routes incase the client requested one
app.use(notFound);
app.use(errorHandlerMidleware);

const port = process.env.PORT || 5050;
const startApp = async () => {
  try {
    await connectDb(process.env.DbUri);
    console.log(`DB is connected successfully!`);
    app.listen(port, console.log(`We are listening on port ${port}`));
  } catch (error) {
    console.log(error);
  }
};
startApp();
