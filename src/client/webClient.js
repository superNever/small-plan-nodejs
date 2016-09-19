var http = require('http');
var chalk = require('chalk');
http.request({
	host:'127.0.0.1',
	port:'3000',
	url:'/',
	method:'GET'
},function(res){
	var body = '';
	res.setEncoding('utf8');
	res.on('data',function(chunk){
		body+=chunk;
	});
	res.on('end',function(){
		console.log(chalk.red(`得到的内容为${body}`))
	})
}).end();