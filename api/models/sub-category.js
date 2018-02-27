var mongoose = require('mongoose');
var bcrypt = require('bcryptjs');

SubCategorySchema = mongoose.Schema({
    name: {
      type: String,
      required: true
    },
    category_id: {
      type: String,
      required: true
    },
    created_date: {
      type: String,
      required: true
    }
});

SubCategory = module.exports = mongoose.model('SubCategory', SubCategorySchema);
