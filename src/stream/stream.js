var fs = require('fs');
//直接读取文件
fs.readFile(__dirname+'/my-file.txt',function(err,contents){
	process.stdout.write(contents.toString()+"\n"	)
});
//流
var stream = fs.createReadStream(__dirname+'/my-file.txt');
stream.on('data',function(chunk){
	console.log(chunk.toString())
})
stream.on('end',function(chunk){
	console.log(" ")
	process.stdout.write('文件读取完毕:' )
})