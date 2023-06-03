'use strict';

let users = [];

const reset = () => {
  users = [];
};

const getAll = () => {
  return users;
};

const getById = (userId) => {
  const foundUser = users.find(user => userId === user.id);

  return foundUser || null;
};

const add = (name) => {
  const newUser = {
    id: users.length + 1,
    name,
  };

  users.push(newUser);

  return newUser;
};

const remove = (userId) => {
  users = users.filter(user => user.id !== userId);
};

const update = ({ id, name }) => {
  const user = getById(id);

  Object.assign(user, { name });
};

module.exports = {
  getAll,
  getById,
  add,
  remove,
  update,
  reset,
};