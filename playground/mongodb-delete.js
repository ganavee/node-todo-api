// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');



MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
	if(err){
		return console.log('Unable to connect to mongo server');
	}
	console.log('Connected to mongo server');
	const db = client.db('TodoApp');

	//delete Many
	// db.collection('Todos').deleteMany({text: 'Something to do'}).then((result) => {
	// 	console.log(result);
	// });

	//delete one
	// db.collection('Todos').deleteOne({text: 'Eat lunch'}).then((result) => {
	// 	console.log(result);
	// });

	// //find one and delete
	// db.collection('Todos').findOneAndDelete({complete: false}).then((result) => {
	// 	console.log(result);
	// });

	// db.collection('Users').deleteMany({name: 'Andrew'}).then((result) => {
	// 	console.log(result);
	// });

	db.collection('Users').deleteOne({
		_id: ObjectID("5b52f99b6abf5424ffcdb72b")
	}).then((result) => {
		console.log(result);
	})

	client.close();
})