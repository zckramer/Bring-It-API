const mongoose = require("mongoose")

mongoose.connect(
 
//   Zack's DB
"mongodb+srv://admin:passwordpassword@calico-host-khzco.mongodb.net/bring-it-db?retryWrites=true&w=majority",  
{ useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;

db.on("error", console.error.bind(console, "connection error:"));

db.once("open", function() {
  console.log("DB has been brought!");
});