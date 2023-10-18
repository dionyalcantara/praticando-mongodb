const mongoose = require("mongoose");

async function db() {
  try {
    await mongoose.connect(process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/libraryapi", {useNewUrlParser: true,
    useUnifiedTopology: true});
  } catch (err) {
    console.log(err);
  }
}

module.exports = db;