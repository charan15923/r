var mongoose = require('mongoose');
var bcrypt = require('bcryptjs');

VendorPolicySchema = mongoose.Schema({
    data: {
        type: String,
        required: true
    }
});

VendorPolicy = module.exports = mongoose.model('VendorPolicy', VendorPolicySchema);