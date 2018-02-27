var mongoose = require('mongoose');
var bcrypt = require('bcryptjs');

CategorySchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    image: {
      type: String,
      required: false
    },
    created_date: {
      type: String,
      required: true
    },
    updated_date: {
      type: String,
      required: false
    }
});

Category = module.exports = mongoose.model('Category', CategorySchema);
