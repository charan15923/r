var mongoose = require('mongoose'),
    bcrypt = require('bcryptjs'),
MainCatsSchema = mongoose.Schema({
    cats: {
        type: Object,
        required: true
    },
    updated_date : {
        type: String,
        required: true
    }
}),
MainCatsSchema = module.exports = mongoose.model('MainCats', MainCatsSchema);