const { Usuario } = require("../models");
const sequelize = require("sequelize");
const Op = sequelize.Op;
const bcrypt = require("bcryptjs");

const HomeController = {
  index: (req, res) => {
    res.render("./home/login");
  },

  showRegister: (req, res) => {
    res.render("./home/cadastrar");
  },

  store: async (req, res) => {
    const { nome, email, senha } = req.body;

    const hash = bcrypt.hashSync(senha, 10);
    const resultado = await Usuario.create({
      nome,
      email,
      senha: hash,
    });

    console.log(resultado);
    res.redirect("/home/users");
  },

  showEdit: async (req, res) => {
    const { id } = req.params;

    const usuario = await Usuario.findByPk(id);

    return res.render("./home/editar", { usuario });
  },

  update: async (req, res) => {
    const { id } = req.params;

    const { nome, email, senha } = req.body;

    const userOld = await Usuario.findByPk(id);
    const hash = senha ? bcrypt.hashSync(senha, 10) : userOld.senha;
    const resultado = await Usuario.update(
      {
        nome,
        email,
        senha: hash,
      },
      {
        where: { id },
      }
    );
    console.log(resultado);
    res.redirect("/home/users");
  },

  destroy: async (req, res) => {
    const { id } = req.params;

    const resultado = await Usuario.destroy({
      where: {
        id: id,
      },
    });
    console.log(resultado);
    res.redirect("/home/users");
  },

  showUsers: async (req, res) => {
    let users = await Usuario.findAll();

    return res.render("./home/usuarios", { users });
  },

  showUser: async (req, res) => {
    let { id } = req.params;

    let user = await Usuario.findOne({
      where: {
        id: id,
      },
    });
    return res.render("./home/detalhes", { user });
  },

  search: async (req, res) => {
    let { key } = req.query;

    let users = await Usuario.findAll({
      where: {
        nome: {
          [Op.like]: `%${key}%`,
        },
      },
    });

    return res.render("./home/usuarios", { users });
  },
};

module.exports = HomeController;
