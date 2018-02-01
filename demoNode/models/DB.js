var mongodb = require('mongodb');
var demoSchema = new mongodb.Schema({
    name:String
});
var hello = mongodb.model('hello', demoSchema);
mongodb.connect('localhost', 'test');

exports.saveUser=function(req,res)
{
	this.user=req.body.user;
	new hello({name:this.user}).save(function(err,login){
		if(err){
			return console.log('error');
		}
		else{
			console.log('Saved');
			res.render('index',{title:'Welcome',message:'User Added!'});
		}
	});
}

exports.showUser = function (req, res) {
    hello.find({},function (err, results) {
        res.render('showUser', { 'title':'Results', 'results':results, message:'' });
    });
};