
// var express = require('express');
// var cons = require('consolidate');
// var app = express();

// app.engine('html',cons.handlebars);
// app.set('port',(process.env.PORT || 4000));
// app.set('view engine', 'html');
// app.set('views', __dirname,'.','/public');
// app.use(express.static('public'));

// app.get('/*', function (req, res) {
//   res.render('app',{title: 'decode App', logo:'decode', message: '<span>decode App is running!</span>'});
// });
 
// app.listen(app.get('port'),function(){
// 	console.log("Server is running at localhost:4000");
// });

const express = require('express');

const path = require('path');
      
const app = express();

const publicPath = path.join(__dirname,'.','public');

const port = process.env.PORT || 9000;

      app.use(express.static(publicPath));

      app.get('/*', function(req, res){
            res.sendFile(path.join(publicPath,'app.html'));
      });

      app.listen(port,()=> {
      	console.log(`Server is running on port ${port}. `);
      });