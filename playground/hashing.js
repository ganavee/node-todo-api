const {SHA256} = require('crypto-js');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

//using bcryptjs
var password = '123abc';

bcrypt.genSalt(10, (err, salt) => {
	bcrypt.hash(password, salt, (err, hash) => {
		console.log(hash);
	});
});

var hashedPassword = '$2a$10$AdnpuUwGWIzf3SNExHul3eyNDuVJXDSUCsIW50xeX7NqQSc1ACi6y';

bcrypt.compare(password, hashedPassword, (err, res) => {
	console.log(res);
});
// //using jwt
// var data = {
// 	id: 10
// };

// var token = jwt.sign(data, '123abc');
// console.log(`token: ${token}`);

// var decoded = jwt.verify(token, '123abc');
// console.log('decoded: ', decoded);




// using crypto-js

// var message = 'Iam user number 3';
// var hash = SHA256(message).toString();

// console.log(`Message: ${message}`);
// console.log(`hash: ${hash}`);

// var data = {
// 	id: 4
// };
// var token = {
// 	data,
// 	hash: SHA256(JSON.stringify(data) + 'somesecret').toString()
// };


// // token.data.id = 5;
// // token.hash = SHA256(JSON.stringify(data)).toString();

// var resultHash = SHA256(JSON.stringify(data) + 'somesecret').toString();

// if(resultHash === token.hash) {
// 	console.log('Data was not manipulated');
// }else {
// 	console.log('data was manipulated');
// }