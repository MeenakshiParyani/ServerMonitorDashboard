var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next){
	//var sss = require('simple-stats-server');
	//var stats = sss();
	//var app = express();
	//console.log(stats);
	//app.use('/stats', stats);
	//stats.get('/memory', function(err, result){
		//res.send(result);
	//});
	res.send(result);
});

module.exports = router;
