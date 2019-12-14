const mongoose = require("mongoose")

mongoose.connect(
// It's the same db...
  "mongodb+srv://admin:passwordpassword@cluster007-rekop.mongodb.net/bring-it-db?retryWrites=true&w=majority",  
  { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;

db.on("error", console.error.bind(console, "connection error:"));

db.once("open", function() {
  console.log("DB has been brought!");
});