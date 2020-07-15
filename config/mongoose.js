// Add library mongoose
const mongoose = require("mongoose");

// Connect to database
mongoose.connect(
   "mongodb+srv://sonu:sonu@free-cluster-t4e4s.mongodb.net/Todo_List?retryWrites=true&w=majority"
);

// check connection
const db = mongoose.connection;
db.on("error", console.error.bind(console, "error in connection to database"));
db.once("open", function () {
   console.log("DB connection success");
});
