var fs = require('fs');
var stream = fs.createReadStream(__dirname+'/my-file.txt');
var files = fs.readdirSync(__dirname);
console.log	(files)
files.forEach(function(value){
	if(/\.css/.test(value)){
		fs.watchFile(__dirname+'/'+value,function(){
			console.log(' - '+ value+' 改变了')
		})
	}
})