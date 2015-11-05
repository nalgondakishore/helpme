var mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
	username : String,
	password:String,
	fullname:String,
	contactnumber:String,
	email:String,
    servicetype:String,
    servicelocation:String,
    servicelocality:String,
    experience:String,
    usertype:String,
    serviceprofilesummary:String,
	comments:{rating:Number, commenttext:String, commenttype:String,commenteduser:String,date:String},
	ratecard:String,
    profiletype:String,
    countrycode:Number,
    profilecreateddate:String
});

var UserProfile = mongoose.model('userprofile',userSchema);

exports.User = UserProfile;
