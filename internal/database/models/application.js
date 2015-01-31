var mongoose = require('../connect'),
    Schema = mongoose.Schema;

var Application = new mongoose.Schema({
    name : {
        type : String
    },
    type : {
        type : String,
        enum: ['Medicine', 'Disease', 'Other', 'Grocery'],
        default: 'Other'
    },
    owner : [{
        type : Schema.Types.ObjectId,
        ref : 'Account'
    }],
    owner_id : {
        type : String
    },
    creation_dt : {
        type : Date,
        default: Date.now
    },
    entity_ids :[{
        type : Schema.Types.ObjectId,
        ref : 'Entity'
    }],
    status : {
        type : String,
        enum: ['Active', 'Nonactive'],
        default: 'Active'
    }
});


module.exports = mongoose.model('Application', Application);
