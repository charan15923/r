var mongoose = require('mongoose');
var bcrypt = require('bcryptjs');

PrivacyPolicySchema = mongoose.Schema({
    data: {
        type: String,
        required: true
    }
});

PrivacyPolicy = module.exports = mongoose.model('PrivacyPolicy', PrivacyPolicySchema);
