// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

// var obj = new ObjectID();
// console.log(obj);


// var user = {name: 'Ganavi', age: 22};
// var {name} = user;
// console.log(name);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
	if(err){
		return console.log('Unable to connect to mongo server');
	}
	console.log('Connected to mongo server');
	const db = client.db('TodoApp');


	//first one
	// db.collection('Todos').insertOne({
	// 	text: 'Something to do',
	// 	completed: false
	// }, (err, result) => {
	// 	if(err) {
	// 		return console.log('Unable to insert todo', err);
	// 	}

	// 	console.log(JSON.stringify(result.ops, undefined, 2));
	// });


	//2nd one
	// db.collection('Users').insertOne({
	// 	name: 'Ganavi',
	// 	age: 22,
	// 	location: 'Bangalore'
	// }, (err, result) => {
	// 	if(err){
	// 		return console.log('Unable to connect to User');
	// 	}

	// 	console.log(result.ops[0]._id.getTimestamp());
	// });

	client.close();
})