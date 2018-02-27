var mongoose = require('mongoose');
var bcrypt = require('bcryptjs');

TotalSiteVisitsSchema = mongoose.Schema({
    visits: {
        type: Number,
        required: true
    }
});

TotalSiteVisits = module.exports = mongoose.model('TotalSiteVisits', TotalSiteVisitsSchema);