const mongoose = require('mongoose');

const projectSchema = mongoose.Schema({
	name: { type: String },
	description: { type: String },
	status: { type: String, enum: ['Not Started', 'In Progress', 'Done'] },
	clientId: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'Client',
	},
});

module.exports = mongoose.model('Project', projectSchema);
