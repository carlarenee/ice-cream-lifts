const db = require('../lib/db');
const bcrypt = require('bcryptjs');

const salt = 10;

function createUser(req, res, next) {
  if (req.body.signupPassword === req.body.signupConfirm) {
    db.none('INSERT INTO users (username, password) VALUES ($1, $2);',
      [req.body.signupUsername, bcrypt.hashSync(req.body.signupPassword, salt)])
      .then( () => {
        res.signupResult = {signup: true}
        next()
      })
    .catch(error => console.log(error))
  } else {
    res.signupResult = {signup: false}
    next();
    return;
  }
}

function authenticate(req, res, next) {
  db.one('SELECT * FROM users WHERE username = $/loginUsername/;', req.body)
    .then((data) => {
      const match = bcrypt.compareSync(req.body.loginPassword, data.password);
      if (match) {
        res.loginResult = {login: true}
        next();
      } else {
        res.loginResult = {login: false}
        next();
        return
      }
    })
  .catch(error => console.log(error))
}

module.exports = {
  createUser,
  authenticate,
}
