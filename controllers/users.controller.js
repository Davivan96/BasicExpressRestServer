const { response, request } = require('express');


const getUsers = (req = request, res = response) => {
  const { q, name = 'No name', age = 'No age', page = 1 } = req.query;
  res.json({
    msg: 'Hola GET  - Controlador',
    q,
    name,
    age,
    page
  });
};

const putUsers = (req = request, res = response) => {
  const { id } = req.params;
  res.json({
    msg: 'Hola PUT - Controlador',
    id
  });
};

const postUsers = (req = request, res = response) => {
  const { nombre, edad } = req.body;
  res.json({
    msg: 'Hola POST - Controlador',
    nombre,
    edad
  });
};
const patchUsers = (req = request, res = response) => {
  res.json({
    msg: 'Hola PATCH - Controlador'
  });
};

const deleteUsers = (req = request, res = response) => {
  res.json({
    msg: 'Hola DELETE - Controlador'
  });
};

module.exports = {
  getUsers,
  putUsers,
  postUsers,
  patchUsers,
  deleteUsers
};