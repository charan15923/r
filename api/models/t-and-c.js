var mongoose = require('mongoose');
var bcrypt = require('bcryptjs');

TermsSchema = mongoose.Schema({
    data: {
        type: String,
        required: true
    }
});

Terms = module.exports = mongoose.model('Terms', TermsSchema);
