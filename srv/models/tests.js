var mongoose = require('mongoose');

var TestSchema = new mongoose.Schema({
	title: String,
	tests: [],
	browsers: String,
	enviornments: String,
	rev: String,
	date: { type: Date, default: Date.now }
})