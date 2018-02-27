var mongoose = require('mongoose');
var bcrypt = require('bcryptjs');

AdminSchema = mongoose.Schema({
    email: {
        type: String,
        required: false
    },
    password: {
        type: String,
        required: !0
    }
});

Admin = module.exports = mongoose.model('Admin', AdminSchema);

module.exports.getUserById = function(a, b) {
    Admin.findById(a, b)
}; 
module.exports.getUserByEmail = function(a, b) {
    Admin.findOne({
        email: a
    }, b);
}; 
module.exports.getUserByMobile = function(a, b) {
    Admin.findOne({
        mobile: a
    }, b);
}; 
module.exports.addUser = function(a, b) {
    bcrypt.genSalt(10, function(c, d) {
        bcrypt.hash(a.password, d, function(e, f) {
            if (e) throw e;
            a.password = f, a.save(b);
        });
    });
}; 
module.exports.comparePassword = function(a, b, c) {
    bcrypt.compare(a, b, function(d, e) {
        c(null, e);
    });
};