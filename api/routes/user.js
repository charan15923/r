var express = require('express'),
    router = express.Router(),
    passport = require('passport'),
    mongoose = require('mongoose'),
    moment = require('moment'),
    jwt = require('jsonwebtoken'),
    config = require('../config/database'),
    bcrypt = require('bcryptjs');
    PrivacyPolicy = require('../models/privacy-policy'),
    VendorPolicy = require('../models/vendorPolicy'),
    // Models
    User = require('../models/user'),
    Terms = require('../models/t-and-c'),
    TotalSiteVisits = require('../models/TotalSiteVisits'),
    Business = require('../models/business');
    BusinessStatus = require('../models/business_status'),
    About = require('../models/about'),
    CareersCMS = require('../models/careers-cms'),
    Categiry = require('../models/category');
    const Path = require('path');
    const multer = require('multer');

const custom_order_storage = multer.diskStorage({
    destination:"./public/custom-orders/",
    filename:(req,file,cb) => {
        cb(null,file.fieldname+Date.now()+Path.extname(file.originalname)); 
    }
});

const custom_order_upload = multer({  
    storage : custom_order_storage 
}).any("image");
    

router.post('/register', function(a, b) {
    var j = new User({
        name: a.body.name,
        email: a.body.email,
        mobile: a.body.mobile,
        password: a.body.password,
        registered_time: moment().format('MMMM Do YYYY, h:mm:ss a'),
    });
    User.addUser(j, function(k, l) {
        k ? b.json({
            success: !1,
            msg: 'Failed to Register'
        }) : b.json({
            success: !0,
            msg: l
        })
    })
});


router.get('/find-email/:email', function(a, b) {
    e = a.params.email, User.find({
        email: e
    }, function(d, f) {
        f ? 0 < f.length ? b.json({
            success: !0,
            msg: 'User Found'
        }) : b.json({
            succcess: !1,
            msg: 'No user found'
        }) : b.json({
            succcess: !1,
            msg: 'No user found'
        })
    })
}); 
router.get('/get-mobile-from-email/:email', function(a, b) {
    e = a.params.email, User.find({
        email: e
    }, function(d, f) {
        f ? 0 < f.length ? b.json({
            success: !0,
            msg: f[0].mobile
        }) : b.json({
            succcess: !1,
            msg: 'No user found'
        }) : b.json({
            succcess: !1,
            msg: 'No user found'
        })
    })
}); 
router.get('/find-mobile/:mobile', function(a, b) {
    m = a.params.mobile, User.find({
        mobile: m
    }, function(d, f) {
        f ? 0 < f.length ? b.json({
            success: !0,
            msg: 'User Found'
        }) : b.json({
            succcess: !1,
            msg: 'No user found'
        }) : b.json({
            succcess: !1,
            msg: 'No user found'
        })
    })
});
router.post('/authenticate', function(a, b) {
    var d = a.body.mobile,
        f = a.body.password;

  User.getUserByMobile(d, function(g, h) {
        if (g) throw g;
        h || b.json({
            success: !1,
            msg: 'User not found'
        }), User.comparePassword(f, h.password, function(i, j) {
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
                    user: {
                        id: h._id,
                        name: h.name,
                        username: h.username,
                        email: h.email,
                        mobile: h.mobile
                    }
                })
            } else b.json({
                success: !1,
                msg: 'Wrong Password'
            })
        })
    });
});

// Posting user's visit to business'
router.post('/post-vendor-visit-by-user',(req,res) => {
    user_id = req.body.user_id;
    business_id = req.body.business_id;
});

// Posting user location
router.post('/post-user-location',(req,res) => {

});

// Update user details
router.post('/update-user',(req,res) => {

});

// Change password
router.post('/change-password',(req,res) => {

});

// Updating total site visit count
router.get('/update-site-visits', (req,res) => {
    TotalSiteVisits.find((err,visits)=>{
        if(err){
            res.json({success: false, msg: err});
        }else{
            // res.json({success: true, msg: ''})
            var vsts;
            if(visits['0']) {
                var vs = visits[0].visits;
                if(visits.length < 1){
                    vsts = 1;
                    TotalSiteVisits.remove((e)=>{
                        if(err){
                            res.json({success: false, msg: 'Removing document failed'});
                        }else{
                            var v = new TotalSiteVisits({visits: vsts});
                            v.save((er, v_saved)=>{
                                if(er){
                                    res.json({success: false, msg: er});
                                }else{
                                    res.json({success: true, msg:v_saved, visit_number: visits});
                                }
                            });
                        }
                    });
                }else{
                    vsts = vs+1;
                    TotalSiteVisits.remove((e)=>{
                        if(err){
                            res.json({success: false, msg: 'Removing document failed'});
                        }else{
                            var v = new TotalSiteVisits({visits: vsts});
                            v.save((er, v_saved)=>{
                                if(er){
                                    res.json({success: false, msg: er});
                                }else{
                                    res.json({success: true, msg:v_saved, visit_number: visits});
                                }
                            });
                        }
                    });
                }
            }
        }
    });
});
router.get('/get-terms', function(req, res) {
    Terms.find((er, terms)=>{
        if(er){
            res.json({success: false, msg: er});
        }else{
            res.json({success: true, msg: terms});
        }
    });
});
router.get('/privacy-policy', function(req, res) {
    PrivacyPolicy.find((er, terms)=>{
        if(er){
            res.json({success: false, msg: er});
        }else{
            res.json({success: true, msg: terms});
        }
    });
});
router.get('/vendor-policy', function(req, res) {
    VendorPolicy.find((er, terms)=>{
        if(er){
            res.json({success: false, msg: er});
        }else{
            res.json({success: true, msg: terms});
        }
    });
});

router.get('/careers-cms', function(req, res) {
    CareersCMS.find((er, terms)=>{
        if(er){
            res.json({success: false, msg: er});
        }else{
            res.json({success: true, msg: terms});
        }
    });
});

router.get('/get-about', function(req, res) {
    About.find((er, terms)=>{
        if(er){
            res.json({success: false, msg: er});
        }else{
            res.json({success: true, msg: terms});
        }
    });
});

// Getting all businesses
router.get('/get-all-businesses', (req,res) => {
    Business.find((err,found) => {
        if(err) {
            res.json({success: false, msg: err});
        }else{
            res.json({success: true, msg: found});
        }
    })
});

// Getting business status by id
router.get('/get-business-status/:id', (req,res) => {
    id = req.params.id;
    BusinessStatus.find({business_id: id},(err,found) => {
        if(err) {
            res.json({success: false, msg: err});
        }else{
            res.json({success: true, msg: found});
        }
    })
});

// Getting Category by id
router.get('/get-cat-from-id/:cat_id', (req,res) => {
    id = req.params.cat_id;
    Category.find({_id: id},(err,found) => {
        if(err) {
            res.json({success: false, msg: err});
        }else{
            res.json({success: true, msg: found});
        }
    })
});

// Getting Business by id
router.get('/get-business-by-id/:b_id', (req,res) => {
    id = req.params.b_id;
    Business.find({_id: id},(err,found) => {
        if(err) {
            res.json({success: false, msg: err});
        }else{
            res.json({success: true, msg: found});
        }
    })
});

router.get('/get-main-cats',(req,res) => {
    
});
router.post('/post-custom-order', (req,res) => {
    // buyer_id = req.body.
});

module.exports = router;