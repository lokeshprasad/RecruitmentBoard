/**
 * Created by lokesh on 02/11/14.
 */
var mongoose = require('../connect'),
    Schema = mongoose.Schema;

var Entity = new mongoose.Schema({
    name : {
        type : String
    },
    parent_type : {
        type : String,
        enum: ['Medicine', 'Disease', 'Other']
    },
    owner : {
        type : Schema.Types.ObjectId,
        ref : 'Account'
    },
    application : {
        type : Schema.Types.ObjectId,
        ref : 'Application'
    },
    creation_dt : {
        type : Date,
        default: Date.now
    },
    data :[{
        name             : String,
        device_id        : String,
        device_os        : String
    }],
    status : {
        type : String,
        enum: ['Active', 'Nonactive'],
        default: 'Active'
    }
});


module.exports = mongoose.model('Entity', Entity);
