var express = require('express'),
    router = express.Router(),
    passport = require('passport'),
    mongoose = require('mongoose'),
    jwt = require('jsonwebtoken'),
    config = require('../config/database'),
    Admin = require('../models/admin'),
    Terms = require('../models/t-and-c'),
    bcrypt = require('bcryptjs'),
    TotalSiteVisits = require('../models/TotalSiteVisits'),
    Category = require('../models/category'),
    SubCat = require('../models/sub-category'),
    User = require('../models/user'),
    Vendor = require('../models/vendor'),
    Business = require('../models/business'),
    MainCats = require('../models/main-cats'),
    PrivacyPolicy = require('../models/privacy-policy'),
    VendorPolicy = require('../models/vendorPolicy'),
    About = require('../models/about'),
    CareersCMS = require('../models/careers-cms');
var Path = require('path');
var multer = require('multer');
var moment = require('moment');

router.post('/register', function(a, b) {
    var j = new Admin({
        email: a.body.email,
        password: a.body.password,
    });
    Admin.addUser(j, function(k, l) {
        k ? b.json({
            success: !1,
            msg: 'Failed to Register'
        }) : b.json({
            success: !0,
            msg: l
        });
    });
});

router.get('/find-email/:email', function(a, b) {
    e = a.params.email, Admin.find({
        email: e
    }, function(d, f) {
        f ? 0 < f.length ? b.json({
            success: !0,
            msg: 'Admin Found'
        }) : b.json({
            succcess: !1,
            msg: 'No Admin found'
        }) : b.json({
            succcess: !1,
            msg: 'No Admin found'
        });
    });
}); 

router.post('/authenticate', function(a, b) {
    var d = a.body.email,
        f = a.body.password;
        Admin.getUserByEmail(d, (err, admin) =>{
          if (err) throw err;
          if(admin.length === 0) {
            b.json({ success: false, msg: 'Admin not found'});
          }else{
            Admin.comparePassword(f, admin.password, function(i, j) {
              if (i) throw i;
              if (j) {
                  var k = jwt.sign({
                      data: admin
                  }, config.secret, {
                      expiresIn: 604800
                  });
                  b.json({
                      success: !0,
                      token: 'JWT ' + k,
                      admin: {
                          id: admin._id,
                          email: admin.email,
                      }
                  });
              } else b.json({
                  success: !1,
                  msg: 'Wrong Password'
              });
          });
          }
        });
});

// Get Number of users
router.get('/get-num-of-users', function(req, res) {
    User.find((er, users)=>{
        if(er){
            res.json({success: false, msg: er});
        }else{
            res.json({success: true, msg: users.length});
        }
    });
});
// Get Number of businesses
router.get('/get-num-of-buses', function(req, res) {
    Business.find((er, buses) => {
        if(er){
            res.json({success: false, msg: er});
        }else{
            res.json({success: true, msg: buses.length});
        }
    });
});
// Get Number of vendors
router.get('/get-num-of-vendors', function(req, res) {
    Vendor.find((er, vendors) => {
        if(er){
            res.json({success: false, msg: er});
        }else{
            res.json({success: true, msg: vendors.length});
        }
    });
});

// Get Terms
router.get('/get-terms', function(req, res) {
    Terms.find((er, terms)=>{
        if(er){
            res.json({success: false, msg: er});
        }else{
            res.json({success: true, msg: terms});
        }
    });
});
// Changing terms and conditions page text
router.post('/post-terms', function(req, res) {
    
    var dat = req.body.data;
    var terms = new Terms({data: dat});
    Terms.remove({},(err)=>{
        if(err){
            res.json({success: false, msg :err});
        }else{
            // Add data to schema
            terms.save(terms, (er, saved)=>{
                if(err){
                    res.json({success: false, msg :er});
                }else{
                    res.json({success: true, msg : 'posted'});
                }
            });
        }
    });
});

// Changing Privacy page text
router.post('/post-privacy', function(req, res) {
    
    var dat = req.body.data;
    var pp = new PrivacyPolicy({data: dat});
    PrivacyPolicy.remove({},(err)=>{
        if(err){
            res.json({success: false, msg :err});
        }else{
            // Add data to schema
            pp.save((er, saved)=>{
                if(err){
                    res.json({success: false, msg :er});
                }else{
                    res.json({success: true, msg : saved});
                }
            });
        }
    });
});

// Changing Vendor Policy page text
router.post('/post-vendor-policy', function(req, res) {
    
    var dat = req.body.data;
    var vp = new VendorPolicy({data: dat});
    VendorPolicy.remove({},(err)=>{
        if(err){
            res.json({success: false, msg :err});
        }else{
            // Add data to schema
            vp.save((er, saved)=>{
                if(err){
                    res.json({success: false, msg :er});
                }else{
                    res.json({success: true, msg : saved});
                }
            });
        }
    });
});

// Changing Vendor Policy page text
router.post('/post-careers-cms', function(req, res) {
    
    var dat = req.body.data;
    var ccms = new CareersCMS({data: dat});
    CareersCMS.remove({},(err)=>{
        if(err){
            res.json({success: false, msg :err});
        }else{
            // Add data to schema
            ccms.save((er, saved)=>{
                if(err){
                    res.json({success: false, msg :er});
                }else{
                    res.json({success: true, msg : saved});
                }
            });
        }
    });
});

// Changing About
router.post('/post-about', function(req, res) {
    
    var dat = req.body.data;
    var ab = new About({data: dat});
    About.remove({},(err)=>{
        if(err){
            res.json({success: false, msg :err});
        }else{
            // Add data to schema
            ab.save((er, saved)=>{
                if(err){
                    res.json({success: false, msg :er});
                }else{
                    res.json({success: true, msg : saved});
                }
            });
        }
    });
});

// Get total site visits
router.get('/get-total-visits', function(req, res) {
    TotalSiteVisits.find((er, terms)=>{
        if(er){
            res.json({success: false, msg: er});
        }else{
            res.json({success: true, msg: terms});
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

// Add Category
router.post('/add-category', function(req, res) {
    
    var name = req.body.name;
    var time = req.body.time;
    var cat = new Category({name: name,created_date: time});
    // Add Category t Schema
    cat.save((er, saved)=>{
        if(er){
            res.json({success: false, msg :er});
        }else{
            res.json({success: true, msg : saved});
        }
    });
});

// Delete Category
router.post('/delete-category', function(req, res) {
    
    var id = req.body.cat_id;
    
    Category.deleteOne({_id:id},(err, deleted)=> {
        if(err) {
            res.json({success: false, msg :err});
        }else{
            if(deleted) {
                res.json({success: true, msg :deleted});
            }else{
                res.json({success: false, msg : 'Something went wrong'});
            }
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

router.get('/get-all-users', (req,res)=>{
    User.find((err,users) => {
        if(err) {
            res.json({success: false, msg: err});
        }else {
            res.json({success: true, msg: users });
        }
    });
});

router.get('/get-all-vendors', (req,res)=>{
    Vendor.find((err,users) => {
        if(err) {
            res.json({success: false, msg: err});
        }else {
            res.json({success: true, msg: users });
        }
    });
});

// Get all businesses
router.get('/get-all-businesses', (req,res)=>{
    Business.find((err,bus) => {
        if(err) {
            res.json({success: false, msg: err});
        }else {
            res.json({success: true, msg: bus});
        }
    });
});

// Get businesses by type
router.get('/get-business-by-type/:type', (req,res)=>{
    type = req.params.type;
    Business.find({ type: type } ,(err,bus) => {
        if(err) {
            res.json({success: false, msg: err});
        }else {
            res.json({success: true, msg: bus});
        }
    });
});

// Add Sub Category
router.post('/add-sub-category', function(req, res) {
    var cat_id = req.body.cat_id;
    var subName = req.body.subName;
    var c_time = req.body.created_date;
    var sub = new SubCat({
        name: subName,
        category_id: cat_id,
        created_date : c_time
    });
    sub.save((err, saved)=>{
        if(err) {
            res.json({success: false, msg: err});
        }else{
            res.json({success: true, msg: saved});
        }
    });
});
router.post('/edit-category', (req,res) => {
    cat_id = req.body.cat_id;
    name = req.body.name;
    console.log(cat_id);

    Category.findOneAndUpdate({_id: cat_id}, { name: name, updated_date: moment().format('MMMM Do YYYY, h:mm:ss a') }, (err, upd) => {
        if(err) {
            res.json({ success: false, msg: err });
        }else {
            res.json({ success: true, msg: upd });
        }
    });
});

// Get main categories
router.get('/get-main-cats', (req, res) => {
    MainCats.find((err,found) => {
        if (err) {
            res.json({ success: false, msg: err });
        } else {
            res.json({ success : true, msg: found });
        }
    });
});


// Get vendor by sub category
router.get('/get-vendor-by-sub/:sub_id', (req,res)=>{
    sub_id = req.params.sub_id;
    Business.find({'business.sub_category' : sub_id }, (err, buses)=>{
        if(err){
            res.json({success: false, msg: err});
        }else{
            res.json({success: true, msg: buses});
        }
    });
});

// Get vendor by id
router.get('/get-vendor-by-id/:id', (req,res)=>{
    v_id = req.params.id;
    Vendor.find({_id : v_id }, (err, vendor)=>{
        if(err){
            res.json({success: false, msg: err});
        }else{
            res.json({success: true, msg: vendor});
        }
    });
});

module.exports = router;