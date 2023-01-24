const mongoose = require("mongoose");
mongoose.set("strictQuery", false);
// const connectDb = async () => {
mongoose.connect(
  process.env.DB ??
    "mongodb+srv://jitesh:9158740900@cluster0.wied1.mongodb.net/serverless-crud?retryWrites=true&w=majority"
);
// };

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
  console.log("Connected successfully");
});
