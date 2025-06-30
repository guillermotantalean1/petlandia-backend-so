// Importamos express
const express = require("express");

// Generando la app web
const app = express();

require("./database");

app.use(express.json());

app.use(require("./routes/index.routes.js"));

//app.use(require("./models/userModel.js"));


// Puerto del Servicio Web
app.listen(3000);
console.log("Server on port", 3000);