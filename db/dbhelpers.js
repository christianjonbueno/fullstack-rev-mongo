var Todo = require('./');

var helpers = {
  // add your queries here
  getAll: () => {
    return Todo.find({}).sort({ priority: 'asc'}).limit(5)
  },

  post: (todo) => {
    console.log(todo, "in helpers")
    return Todo.create(todo)
  },

  put: (_id, edits) => {
    return Todo.findOneAndUpdate({_id}, edits)
  },

  delete: (_id) => {
    return Todo.deleteOne({_id})
  }
};

module.exports = helpers