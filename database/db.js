const mongoose = require(`mongoose`);

const connectToDb = () => {
  mongoose
    .connect(process.env.DB_URI)
    .then(() => console.log("MongoDB Conectado com Sucesso"))
    .catch((err) => console.error(err));
};

module.exports = connectToDb;
