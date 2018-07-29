const {ObjectID} = require('mongodb');

const {Todo} = require('./../server/models/todo.js');
const {User} = require('./../server/models/user.js');
const {mongoose} = require('./../server/db/mongoose.js');


// Todo.remove({}).then((results) => {
// 	console.log(results);
// });

// Todo.findOneAndRemove({_id:'5b5b4a2f42661b237bf2355b'}).then((results) => {

// });

Todo.findByIdAndRemove('5b5b4e76d583fc2b2d78a244').then((results) => {
	console.log(results);
});


