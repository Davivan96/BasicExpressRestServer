
const express = require('express');
const cors = require('cors');

class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT;
    this.usersPath = '/api/users';
    //Middlewares
    this.middlewares();

    //Routes
    this.routes();
  }

  middlewares() {
    //Lectura de archivos estáticos
    this.app.use(express.static('public'));

    //CORS
    this.app.use(cors());

    //Lectura y parseo de body
    this.app.use(express.json());
  }

  routes() {
    this.app.use(this.usersPath, require('../routes/users'));
  }



  listen() {
    this.app.listen(this.port, () => {
      console.log(`Listening at port http://localhost:${this.port}`);
    });
  }
}

module.exports = Server;