var mongoose = require('mongoose');
var bcrypt = require('bcryptjs');

CareersCmsSchema = mongoose.Schema({
    data: {
        type: String,
        required: true
    }
});

CareersCms = module.exports = mongoose.model('CareersCms', CareersCmsSchema);
