var net = require('net');
var chalk = require('chalk');
var count = 0;
var server = net.createServer(function(conn){
	conn.write(
		'\n > welcome to '+ chalk.green('node-chat')
		+'\n > '+chalk.red(count)+chalk.green(' other people are connected')
		+'\n > '+chalk.red.bgGreen('请输入名字并按enter')
	)
	count++;

	conn.on('close',function(){
		count--;
	})
	
	conn.on('data',function(data){
		console.log(data.replace('\r\n',''))
	})

	conn.setEncoding('utf8');

	console.log(chalk.red.bgGreen('new connection'))
});
server.listen(3000,function(){
	// console.log('\033[96m server listening on *:3000\033[39m')
	console.log(chalk.blue('server listening on *:3000'))
})