var mongoose = require('mongoose'),
    bcrypt = require('bcryptjs'),
BusinessStatusSchema = mongoose.Schema({
    business_id: {
        type: String,
        required: true
    },
    status:{
        type: String,
        required: true
    },
    updated_date : {
        type: String,
        required: true
    }
}),
BusniessStatus = module.exports = mongoose.model('BusinessStatus', BusinessStatusSchema);