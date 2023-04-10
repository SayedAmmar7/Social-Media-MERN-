const mongoose = require("mongoose");

module.exports = async () => {
  const mongoUri =
    "mongodb+srv://shmarsy:aVZRsxD4uVWC43Ox@cluster0.ijrm0yh.mongodb.net/?retryWrites=true&w=majority";
  try {
    const connect = await mongoose.connect(mongoUri, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });

    console.log(`MongoDb Connected: ${connect.connection.host}`);
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
};
