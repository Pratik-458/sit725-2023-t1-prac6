const { MongoClient } = require("mongodb");
const uri =
  "mongodb+srv://pratik458:Azure%401325@cluster0.ypwmqzn.mongodb.net/?retryWrites=true&w=majority";
let mongoClient = new MongoClient(uri, { useNewUrlParser: true });

mongoClient.connect((error) => {
  if (!error) {
    console.log("sucess");
  } else {
    console.log(error);
    process.exit(1);
  }
});

module.exports = mongoClient;
