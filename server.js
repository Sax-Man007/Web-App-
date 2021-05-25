const http =  require('http');
const fs = require ('fs');
const server =  http.createServer(function (req,res){
	res.setHeader('Content-Type', 'text/html')

	fs.readFile('./html/index.html', (err, data) => {

		if (err){
			consol.log(err);
			res.end();
		}else
		res.end(data);
	})


});
server.listen(5000);
console.log('Node.js web server at port 5000 is running...')