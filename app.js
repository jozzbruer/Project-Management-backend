const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const schema = require('./schema/schema');

require('dotenv').config();

// mongoose
// 	.connect(
// 		`mongodb+srv://${process.env.DB_USERNAME}:${process.env.BD_PASSWORD}@mern.aoodt.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`
// 	)
// 	.then(() => console.log('Connection to MongoDB success'))
// 	.catch(() => console.log('Connection Failed'));
const app = express();

app.use((request, response, next) => {
	response.setHeader('Access-Control-Allow-Origin', '*');
	response.setHeader(
		'Access-Control-Allow-Headers',
		'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization'
	);
	response.setHeader(
		'Access-Control-Allow-Methods',
		'GET, POST, PUT, DELETE, PATCH, OPTIONS'
	);
	next();
});

app.use(
	'/graphql',
	graphqlHTTP({
		schema,
		graphiql: process.env.NODE_ENV === 'developement',
	})
);

module.exports = app;
