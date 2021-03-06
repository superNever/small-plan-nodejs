var fs = require('fs'),
	stdin = process.stdin,
	stdout = process.stdout,
	stats = [];
//采取递归展示所有数据并生成列表
function file(i,files){
	//获取文件名
	var filename = files[i];
	//查看文件名对应的路径，fs.stat会给出文件或者目录的元数据
	fs.stat(process.cwd()+'/'+ filename, function(err,stat){
		//存储stat
		stats[i] = stat;
		//判断文件是否为路径，即文件夹
		if(stat.isDirectory()){
			console.log(" "+i+"  \033[36m"+ filename+"/\033[39");
		}else{
			console.log(" "+i+"  \033[90m"+ filename+"\033[39m");
		}
		i++;
		if(i===files.length){
			read(files,stats);
		}else{
			file(i,files);
		}
	})
}
//读取所选文件
function read(files,stats){
	console.log(' ');
	//文本不换行
	stdout.write('\033[33m 输入您的选择： \033[39m');
	//等待用户输入
	stdin.resume();
	//设置流编码
	stdin.setEncoding('utf8');

	//监听data事件
	stdin.on('data',option);

	function option(data){
		var num = Number(data),
		filename = files[num];
		//判断输入文件是否在列表项
		if(!filename){
			stdout.write("\033[31m 重新输入您的选择： \033[39m");	
		}else{
			//所选索引在列表项
			stdin.pause();
			//判断是否为文件夹
			if(stats[num].isDirectory()){
				//读取文件夹文件列表
				fs.readdir(process.cwd()+'/'+filename,function(err,files){
					console.log(' ');
					console.log('   ('+files.length+'  )文件');
					files.forEach(function(value){
						console.log('      -  '+ value);
					});
					console.log(' ');
				})
			}else{
				//直接读取文件
				fs.readFile(process.cwd()+'/'+filename,'utf8',function(err,data){
					console.log(' ');
					console.log('\033[90m'+ data.replace(/(.*)/g,'    $1')+'\033[39m')
				});
			}			
		}
	}
}

//执行函数
fs.readdir(process.cwd(),function(err,files){
	//输出空行
	console.log(' ');
	if(!files.length){
		return console.log("  \033[31m 不存在文件可供展示! \033[39m \n")
	}
	console.log("请选择你需要查看的文件 \n")
	//串行执行函数
	file(0,files);
})
