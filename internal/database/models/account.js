var mongoose = require('../connect'),
passportLocalMongoose = require('passport-local-mongoose'),
Schema = mongoose.Schema;

var Account = new mongoose.Schema({
		username : {type : String,required : true,index : {unique : true}},
		password : {type : String,required : true},
		verify_token : {type : String},
		verified : {type : Boolean,default:false},
		nick_name : {type : String,required : true},
		first_name : {
			type : String
		},
		last_name : {
			type : String
		},
		address : {
			type : String
		},
		country : {
			type : String
		},
		contact_no : {
			type : String
		},
		gender : {
			type : String
		},
		creation_dt : {
			type : Date,
		default:
			Date.now
		},
		application : [{
                type : Schema.Types.ObjectId,
				ref : 'Application'
        }],
		balance : {
			type : Number,
			default : 0
		}
	});

Account.plugin(passportLocalMongoose);

module.exports = mongoose.model('Account', Account);
