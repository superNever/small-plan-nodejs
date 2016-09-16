# 主要记录一些nodejs小知识以及一些小demo

## demo1

> 主要功能是读取当前执行环境下，所有的文件，包括文件夹和文件两部分，当选择文件是可以直接打印文件，选择文件夹时读取文件夹下的目录并显示在控制台。目前存在一个bug，就是部分目录会缺失索引，没有被打印到控制台。src中file-explorer可以拷贝到任何地方，使用nodejs执行`node file-explorer`

## fs简介
> fs 包含同步跟异步读取文件

- 同步

```bash
    console.log(require('fs').readdirSync(__dirname))
```

- 异步

```bash
	function async(err,files){
		console.log(files);
	}
	require('fs').readdir('.',async);
```

## stream（流）

> process全局对象中包含了三个流对象，分别对应unix三个标准流：

- **stdin**  标准输入
- **stdout** 标准输出
- **stderr** 标准错误


## cli变量

- __dirname: 执行文件时，该文件在文件系统中的位置
- process.cwd() : 当前目录，静态
- 环境变量 : process.env
- 退出: process.exit()
- 信号： process.on('SIGKILL',function(){})















