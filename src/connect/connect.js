var connect = require('connect');
var serveStatic = require('serve-static')
var morgan = require('morgan')
var app = connect();
var serve = serveStatic('website', {'index': ['index.html', 'index.htm']})
//默认主页
app.use(serve);
app.use(morgan('dev'))
// app.use(connect.logger('dev'))
app.listen(3000)
console.log('server started at port 3000')