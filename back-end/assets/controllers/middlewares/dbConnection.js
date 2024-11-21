const jwt = require("jsonwebtoken");
require("dotenv").config();

exports.addMasterUsers = async (req, res, next) => {
  if (res.code === "ER_DUP_ENTRY") {
    console.log("erro");
  }

  try {
    const db = req.mysql;
    const sql = "INSERT INTO master_users (userAdmin, pass) VALUES (? , ?)";
    const [data] = await db
      .promise()
      .query(sql, [req.body.name, req.body.token]);

    return res.json(data);
  } catch (e) {
    console.log("error");
  }

  console.log("carregado");
};

//LOGIN

exports.loginAccess = async (req, res, next) => {
  try {
    const sql = "SELECT * FROM master_users WHERE userAdmin=? AND pass=?";
    const db = req.mysql;

    const [data] = await db
      .promise()
      .query(sql, [req.body.name, req.body.password], async (error, data) => {
        console.log(data);
      });
    const user = data[0];
    if (data.length === 0) {
      console.log(data.length);
      return res
        .status(401)
        .json({ failLogin: { message: "Usuário ou senha inválidos" } });
    }

    return res.json({
      usuario: {
        name: user.userAdmin,
        id: user.id,
      },
    });
  } catch (e) {
    console.log(e);
    return res.status(500).json({ message: "Erro interno no servidor" });
  }
};

exports.studentRegister = async (req, res) => {
  try {
    const sql = "INSERT INTO aluno (nome) VALUES (?)";
    const db = req.mysql;
    const [data] = await db
      .promise()
      .query(sql, [req.body.nameStudent], (error) => {
        console.log(error);
      });
    console.log(data);
    return res.json();
  } catch (e) {
    console.log(e);
  }
};

exports.addCalculator = async (req, res, next) => {
  try {
    const sql = "INSERT INTO alimento (nome, caloria) VALUES (?, ?)";
    const db = req.mysql;
    const [data] = await db
      .promise()
      .query(sql, [req.body.nome, req.body.caloria]);

    return res.status(200).json({ message: "aluno cadastrado resolvido!" });
  } catch (e) {
    console.log(e);
  }
};

exports.getStudentRegister = async (req, res, next) => {
  try {
    const sql = "SELECT * FROM alunos";
    const db = req.mysql;
    const [data] = await db.promise().query(sql, (err) => {
      console.log("ola");
    });
  } catch (e) {
    console.log(e);
  }
};

exports.logoutAccess = (req, res) => {};
