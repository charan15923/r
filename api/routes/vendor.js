var express = require('express'),
    router = express.Router(),
    passport = require('passport'),
    mongoose = require('mongoose'),
    jwt = require('jsonwebtoken'),
    config = require('../config/database'),
    Vendor = require('../models/vendor'),
    User = require('../models/user'),
    bcrypt = require('bcryptjs'),
    Category = require('../models/category'),
    SubCat = require('../models/sub-category'),
    Business = require('../models/business'),
    BusinessStatus = require('../models/business_status');
    var moment = require('moment');
const Path = require('path');
const multer = require('multer');

router.post('/register', function(a, b) {
    var j = new Vendor({
        name: a.body.name,
        email: a.body.email,
        mobile: a.body.mobile,
        password: a.body.password,
        registered_time: moment().format('MMMM Do YYYY, h:mm:ss a'),
    });
    Vendor.addVendor(j, function(k, l) {
        if(k) {
            b.json({success: false, msg: k});
        }else{
            // Creat user
            // Check if user with same mobile exists
            User.find({mobile: a.body.mobile}, (err, found) => {
                if(err) {
                    b.json({success: true, msg: l});
                }else {
                    if (found.length> 0) {
                        // User exists Don't do anything
                        b.json({success: true, msg: l});
                    } else {
                        // User does't exist, create user
                        var user = new User({
                            name: a.body.name,
                            email: a.body.email,
                            mobile: a.body.mobile,
                            password: a.body.password,
                            registered_time: moment().format('MMMM Do YYYY, h:mm:ss a'),
                        });
                        User.addUser(user, (err, added)=>{
                            if (err) {
                                b.json({ success: false, msg: err });
                            }else {
                                b.json({ success: true, msg: l });
                            }
                        });
                    }
                }
            });
        }
    });
});
router.get('/find-email/:email', function(a, b) {
    e = a.params.email, Vendor.find({
        email: e
    }, function(d, f) {
        f ? 0 < f.length ? b.json({
            success: !0,
            msg: 'Vendor Found'
        }) : b.json({
            succcess: !1,
            msg: 'No Vendor found'
        }) : b.json({
            succcess: !1,
            msg: 'No Vendor found'
        });
    });
}); 

router.get('/get-mobile-from-email/:email', function(a, b) {
    e = a.params.email, Vendor.find({
        email: e
    }, function(d, f) {
        f ? 0 < f.length ? b.json({
            success: !0,
            msg: f[0].mobile
        }) : b.json({
            succcess: !1,
            msg: 'No Vendor found'
        }) : b.json({
            succcess: !1,
            msg: 'No Vendor found'
        });
    });
}); 

router.get('/find-mobile/:mobile', function(a, b) {
    m = a.params.mobile, Vendor.find({
        mobile: m
    }, function(d, f) {
        f ? 0 < f.length ? b.json({
            success: !0,
            msg: 'Vendor Found'
        }) : b.json({
            succcess: !1,
            msg: 'No Vendor found'
        }) : b.json({
            succcess: !1,
            msg: 'No Vendor found'
        });
    });
});

// Get vendor by Id
router.get('/get-vendor-by-id/:vendor_id', function(req, res) {
    vendor_id = req.params.vendor_id;
    Vendor.find({_id: vendor_id}, (err, vendor) => {
        if (err) {
            res.json({success: false, msg: err});
        }else {
            if(vendor.length > 0) {
                res.json({success: true, msg: vendor});
            }else{
                res.json({success: false, msg: 'vendor_not_found'});
            }
        }
    });
});

// Get business by Id
router.get('/get-business-by-id/:id', function(req, res) {
    id = req.params.id;
    Business.find({_id: id}, (err, business) => {
        if (err) {
            res.json({success: false, msg: err});
        }else {
            if(business.length > 0) {
                res.json({success: true, msg: business});
            }else{
                res.json({success: false, msg: 'business_not_found'});
            }
        }
    });
});

router.post('/authenticate', function(a, b) {
    var d = a.body.mobile,
        f = a.body.password;

  Vendor.getVendorByMobile(d, function(g, h) {
        if (g) throw g;
        h || b.json({
            success: !1,
            msg: 'Vendor not found'
        }), Vendor.comparePassword(f, h.password, function(i, j) {
            if (i) throw i;
            if (j) {
                var k = jwt.sign({
                    data: h
                }, config.secret, {
                    expiresIn: 604800
                });
                b.json({
                    success: !0,
                    token: 'JWT ' + k,
                    vendor: {
                        id: h._id,
                        name: h.name,
                        email: h.email,
                        mobile: h.mobile
                    }
                });
            } else b.json({
                success: !1,
                msg: 'Wrong Password'
            });
        });
    });
});

// Get vendor businesses
router.get('/get-vendor-businesses/:vendor_id', function(req, res) {
    ven_id = req.params.vendor_id;
    Business.find({vendor_id: ven_id}, (err,busses) => {
        if(err) {
            res.json({success: false, msg: err});
        }else{
            if(busses){
                res.json({success: true, msg: busses});
            }else {
                res.json({success: false, msg: 'No businesses returned'});
            }
        }
    });
});

// Get All Categories
router.get('/get-all-categories',(req,res)=>{
    Category.find((err, cats)=> {
        if(err){
            res.json({success: false, msg: err});
        }else{
            res.json({success: true, msg: cats});
        }
    });
});

router.get('/get-sub-cats-of-cat/:cat_id', (req,res)=>{
    cat_id = req.params.cat_id;
    SubCat.find({category_id: cat_id}, (err, subs)=>{
        if(err){
            res.json({success: false, msg: err});
        }else{
            res.json({success: true, msg: subs});
        }
    });
});

// Add business
router.post('/add-business', function(req, res) {
   business = req.body.business;
   added_time = req.body.added_time;
   vendor_id = req.body.vendor_id;
   plan = req.body.plan;
   type = req.body.type;
   console.log(type);
   var b = new Business({
       business: business,
       vendor_id: vendor_id,
       plan: plan,
       type: type,
       created_date : added_time
   });
   b.save((err,saved) => {
       if(err) {
           res.json({success: false, msg: err});
       }else{
           res.json({success: true, msg: saved});
       }
   });

});
// Post business status
router.post('/post-business-status', (req,res)=> {
    id = req.body.b_id;
    status = req.body.status;

    BusinessStatus.find({business_id: id}, (err,b) => {
        if(err) {
            // error occured
        }else{
            if(b.length > 0){
                BusinessStatus.remove({business_id: id}, (er, removed) => {
                    if(er) {
                        // Error
                        res.json({success: false, msg: er});
                    }else{
                        b_stat = new BusinessStatus({
                            business_id : id,
                            status: status,
                            updated_date : moment().format('MMMM Do YYYY, h:mm:ss a')
                        });
                        b_stat.save((e, saved) => {
                            if(e){
                                // error
                                res.json({success: false, msg: e});
                            }else {
                                // Saved
                                res.json({success: true, msg: saved});
                            }
                        });
                    }
                });
            }else { 
                b_stat = new BusinessStatus({
                    business_id : id,
                    status: status,
                    updated_date : moment().format('MMMM Do YYYY, h:mm:ss a')
                });
                b_stat.save((e, saved) => {
                    if(e){
                        // error
                        res.json({success: false, msg: e});
                    }else {
                        // Saved
                        res.json({success: true, msg: saved});
                    }
                });
            }
        }
    });
});

router.get('/get-business-status/:id', (req,res) => {
    id = req.params.id;
    BusinessStatus.find({business_id: id}, (er, found) => {
        if(er) {
            res.json({success: false, msg: er});
        }else{
            res.json({success: true, msg: found});
        }
    });
});
module.exports = router;