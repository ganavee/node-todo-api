const mongoose = require('mongoose');

// to tell mongoose that we are using built in promise and not third party
mongoose.Promise = global.Promise;

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/TodoApp', {useNewUrlParser: true});

module.exports = {mongoose}