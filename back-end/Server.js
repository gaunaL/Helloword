const express = require("express"); // rotas backend
const mysql = require("mysql2"); // mysql, o pacote padrão não conectou ao db, instalado o mysql2 pelo(cmd: npm i mysqlo2)
const cors = require("cors"); // relaxa algumas requisições HTTP para que a segurança do navegador não barre
const controllerRegister = require("./assets/controllers/middlewares/dbConnection");

const app = express();
require("dotenv").config;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const dbConfig = {
  host: "autorack.proxy.rlwy.net", // Endereço do servidor MySQL na nuvem
  port: 27438,
  user: process.env.MYSQL_CONNECT_USER,
  password: process.env.MYSQL_PASS,
  database: process.env.MYSQL_DATABASE,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
};

const pool = mysql.createPool(dbConfig);

pool.getConnection((err, connection) => {
  if (err) {
    console.error("Erro ao conectar ao banco de dados MySQL:", err);
    process.exit(1);
  } else {
    console.log("Conectado ao banco de dados MySQL");

    const PORT = 4000;
    const server = app.listen(PORT, () => {
      console.log(`Servidor rodando na porta ${PORT}`);
    });

    process.once("SIGUSR2", () => {
      server.close(() => {
        console.log("Servidor encerrado (reiniciado pelo nodemon)");
        process.kill(process.pid, "SIGUSR2");
      });
    });

    connection.release();
  }
});

//Register

function authenticateToken(req, res, next) {
  const authHeader = req.headers["authotization"];
  const token = authHeader && authHeader.split(" ")[1];
}

app.post(
  "/calculator",
  function (req, res, next) {
    (req.mysql = pool), next();
  },
  controllerRegister.addCalculator
);

app.post(
  "/register",
  function (req, res, next) {
    (req.mysql = pool), next();
  },

  controllerRegister.addMasterUsers
);

app.post(
  "/login",
  function (req, res, next) {
    (req.mysql = pool), next();
  },
  controllerRegister.loginAccess
);

app.post("/", function (req, res, next) {
  (req.mysql = pool), next();
  
},controllerRegister.studentRegister);

app.get(
  "/",
  (req, res, next) => {
    (req.mysql = pool), next();
  },
  controllerRegister.getStudentRegister
);
