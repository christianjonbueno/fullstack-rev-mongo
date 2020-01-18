var helpers = require('../db/dbhelpers.js');

// define your controllers
var controller = {
  get: (req, res) => {
    helpers.getAll()
      .then((data) => {
        res.status(200).send(data)
      })
      .catch((err) => {
        res.status(400).send(err)
      })
  },
  post: (req, res) => {
    console.log('in post', req.body)
    helpers.post(req.body)
      .then(() => {
        res.status(201).send('Coolio')
      })
      .catch((err) => {
        res.status(400).send(err)
      })
  },
  put: (req, res) => {
    let _id = req.params._id;
    let edits = req.body;
    helpers.put(_id, edits)
      .then(() => {
        res.status(201).send('Edited')
      })
      .catch((err) => {
        res.status(400).send('Baad');
      })
  },
  delete: (req, res) => {
    let _id = req.params._id
    console.log(_id)
    helpers.delete(_id)
      .then(() => {
        res.status(201).send('Deleted')
      })
      .catch((err) => {
        res.status(200).send('Nope')
      })
  }
};

module.exports = controller;