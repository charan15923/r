var mongoose = require('mongoose');
var bcrypt = require('bcryptjs');

AboutSchema = mongoose.Schema({
    data: {
        type: String,
        required: true
    }
});

About = module.exports = mongoose.model('About', AboutSchema);