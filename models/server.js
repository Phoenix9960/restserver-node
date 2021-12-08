const express = require("express");
const cors = require("cors");

class Server {
  constructor() {
    this.app = express();
    this.PORT = process.env.PORT;

    //Middlewares
    this.middlewares();

    //Rutas de mi aplicacion
    this.routes();
  }

  middlewares() {
    // CORS
    this.app.use(cors());

    // Lectura y Parseo del body
    this.app.use(express.json());

    // Directorio publico
    this.app.use(express.static("public"));
  }

  routes() {
    this.app.use("/api/usuarios", require("../routes/user.routes"));
  }

  listen() {
    this.app.listen(this.PORT, () => {
      console.log("Servidor corriendo en puerto", this.PORT);
    });
  }
}

module.exports = Server;
