var http = require('http');
var qs = require('querystring');
http.createServer(function(req,res){
	if(req.url == '/'){
		res.writeHead(200,{'Content-Type':'text/html,charset=utf-8'})
		res.end([
			'<form method="POST" action="/url">'
			,'<h1>My form</h1>'
			,'<fieldset>'
			,'<label>Personal information</label>'
			,'<p>What is your name?</p>'
			,'<input type="text" name="name"/>'
			,'<p><button>submit</button></p>'
			,'</form>'
		].join(''));
	}else if(req.url == '/url'&& 'POST'== req.method){
		// res.writeHead(200,{'Content-Type':'text/html'})
		// res.end(`You sent a <em> ${req.method} </em>  request`)
		var body = '';
		req.on('data',function(chunk){
			body += chunk;
		});
		req.on('end',function(){
			res.writeHead(200,{'Content-Type':'text/html,charset=utf-8'});
			res.end(`<p>名字是:${qs.parse(body).name}</p>`)
		})
	}else{
		res.writeHead(404);
		res.end('不存在该路径')
	}
	
}).listen(3000);
console.log("server started ,port at 3000")