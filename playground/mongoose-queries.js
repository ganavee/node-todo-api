const {ObjectID} = require('mongodb');
const {Todo} = require('./../server/models/todo.js');
const {User} = require('./../server/models/user.js');
const {mongoose} = require('./../server/db/mongoose.js');


var id = '5b5ad5b8b59752525e4129c3';
// var id2 = '5b54065cbf88184f4749f354';

User.findById('5b54065cbf88184f4749f354').then((user) => {
	if(!user) {
		return console.log('Id not found');
	}
	console.log('Todo By one', user);
}).catch((e) => console.log(e));

// // console.log('hey');

// if(!ObjectID.isValid(id)) {
// 	console.log('Id not valid');
// }

// Todo.find({
// 	_id: id
// }).then((todos) => {
// 	console.log('Todos', todos);
// });

// Todo.findOne({
// 	_id: id
// }).then((todo) => {
// 	console.log('Todo', todo);
// });

// Todo.findById(id).then((todo) => {
// 	if(!todo) {
// 		return console.log('Id not found');
// 	}
// 	console.log('Todo By one', todo);
// }).catch((e) => console.log(e));