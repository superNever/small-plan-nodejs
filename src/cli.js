console.log(process.argv.slice(2))
console.log("cwd："+process.cwd())
console.log("__dirname："+__dirname)
process.chdir('/bin/')
console.log(process.env);
console.log('\033[90m 测试颜色 \033[39m')
