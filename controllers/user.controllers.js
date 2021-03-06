const { response, request } = require("express");

const usuariosGet = (req, res = response) => {
  res.json({
    msg: "get API - controlador",
  });
};

const usuariosPost = (req, res = response) => {
  const { nombre, edad } = req.body;

  res.status(201).json({
    msg: "post API - controlador",
    nombre,
    edad,
  });
};

const usuariosPut = (req, res = response) => {
  const { id } = req.params;

  res.json({
    msg: "put API - controlador",
    id,
  });
};

const usuariosDelete = (req, res = response) => {
  res.json({
    msg: "delete API - controlador",
  });
};

const usuariosPatch = (req, res = response) => {
  res.json({
    msg: "patch API - controlador",
  });
};

module.exports = {
  usuariosGet,
  usuariosPut,
  usuariosPost,
  usuariosDelete,
  usuariosPatch,
};
