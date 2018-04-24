const express = require('express');
const router = express.Router();
const mongo = require('mongoose');

/**** Import Model ****/
const User = require('../model/user');

const db = "mongodb://root:toor@ds117625.mlab.com:17625/myapp";

mongo.Promise = global.Promise;
mongo.connect(db, function(err) {
    if (err) {
        consloe.log('connection error. ' + err);
    }
});

router.get('/', function(req, res) {
    res.send('api works');
});

router.get('/userList', function(req, res) {
    User.find({}).exec(function(err, response) {
        if (err) {
            consloe.log('err. ' + err);
        } else {
            res.json(response);
        }
    });
});

router.get('/userList/:id', function(req, res) {
    User.findById(req.params.id).exec(function(err, response) {
        if (err) {
            consloe.log('err. ' + err);
        } else {
            res.json(response);
        }
    });
});

router.post('/insertUser', function(req, res) {
    var userData = new User();
    userData.name = req.body.name;
    userData.username = req.body.username;
    userData.password = req.body.password;
    userData.save(function(err, lastData) {
        if (err) {
            console.log('err = ' + err);
        } else {
            res.json(lastData);
        }
    });
});

router.put('/updateUser/:id', function(req, res) {
    User.findByIdAndUpdate(req.params.id, {
            $set: { name: req.body.name, username: req.body.username, password: req.body.password }
        }, {
            new: true
        },
        function(err, updatedUser) {
            if (err) {
                consloe.log(err);
            } else {
                res.json(updatedUser);
            }
        });
});
router.delete('/deleteUser/:id', function(req, res) {
    User.findByIdAndRemove(req.params.id, function(err, deletedUser) {
        if (err) {
            console.log(err);
        } else {
            res.json(deletedUser);
        }
    })
});

module.exports = router;