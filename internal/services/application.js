var db = require('../database/models');
var util = require('../../libs/util');
var email = require('../../libs/email');

module.exports.save_application = function (applicationParams,user, cb) {
    var app = new db.Application();
    app.type = applicationParams.application_type;
    app.name = applicationParams.application_name;
    app.owner_id = user;
    app.save(function(err,app){
        if(err){
            console.log(err);
            return cb('Some error occurred, please try again.',null);
        }
        db.Account.findOne({'_id' : user},function(err,account){
            if(err){
                console.log(err);
                return cb('Some error occurred, please try again.',null);
            }
            account.application.push(app);
            account.save(function(err,account){
                app.owner.push(account);
                app.save();
            });
            return cb(null,app);
        });
    });


}
module.exports.dashboard = function (user, cb) {
    db.Application.find({ owner_id: user  },function(err,application){
        if(err){
            return cb(err,null);
        }
            return cb(null,application);
        });
}
