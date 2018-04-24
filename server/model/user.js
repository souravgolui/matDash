const mongo = require('mongoose');

const schema = mongo.Schema;

const userSchema = new schema({
    name: String,
    username: String,
    password: String
});

/*********(modulename,schema or data, collection name)***********/
module.exports = mongo.model('user', userSchema, 'admins');