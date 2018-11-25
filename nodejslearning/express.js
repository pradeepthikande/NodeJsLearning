//https://github.com/azat-co/expressworks/blob/master/exercises/param_pam_pam/solution/solution.js
//1st program
// const express = require('express');
// const app = express();
// app.get('/home',function(req,res){
//     res.end("Hello World!");
// })
// app.listen(process.argv[2]);

//2nd program
// var path = require('path');
// const express = require('express')
// const app = express();
// app.use(express.static(process.argv[3]) || path.join(__dirname,'public'));
// app.listen(process.argv[2]);

//3rd program
// var express = require('express');
// var app = express();
// app.set('views',process.argv[3]);
// app.set('view engine','pug');
// app.get('/home',function(req,res){
//     res.render('index',{date : new Date() .toDateString()})
// })
// app.listen(process.argv[2]);

//4th program
// var bodyparser = require('body-parser');
// var express = require('express');
// var app = express();
// app.use(bodyparser.urlencoded({extended : false}));
// app.post('/form',function(req,res){
//     res.end(req.body.str.split('').reverse().join(''));
// })
// app.listen(process.argv[2])

//5th program
// const express = require('express')
// const app = express();
// app.use(require('stylus').middleware(process.argv[3]));
// app.use(express.static(process.argv[3]));
// app.listen(process.argv[2]);

//6th program
// const express = require('express')
// const app = express();
// app.put('/message/:id',function(req,res){
//     const id = req.params.id
//     const str = require('crypto')
//       .createHash('sha1')
//       .update(new Date().toDateString() + id)
//       .digest('hex')
//     res.send(str)
// })
// app.listen(process.argv[2])

//7th program
// const express = require('express')
// const app = express()
// app.get('/search', function(req, res){
//   const query = req.query
//   res.send(query)
// })

// app.listen(process.argv[2])

//8th program
const express = require('express')
const app = express()
const fs = require('fs')
app.get('/books', function(req, res){
  fs.readFile(process.argv[3],function(e,data){
    if(e)
    return res.sendStatus(500);
    if(data)
    books = JSON.parse(data)
    return res.json(books);
  })
})
app.listen(process.argv[2])