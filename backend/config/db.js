// db.js ou config/db.js
const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    mongoose.set("strictQuery", false);
    await mongoose.connect(process.env.MONGODB_URI_CONNECT, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("✅ Connexion à MongoDB établie !");
  } catch (err) {
    console.error("❌ Erreur de connexion à MongoDB :", err.message);
    process.exit(1);
  }
};

module.exports = connectDB;