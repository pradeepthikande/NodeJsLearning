// https://github.com/leochilds/learnyounode-walkthrough/blob/master/4.%20My%20First%20Asynchronous%20IO/walkthrough.md
//https://github.com/FernandoBasso/learn-you-the-node-solutions/tree/master/10-time-server
//https://github.com/Rafase282/My-FreeCodeCamp-Code/wiki/Lesson-Finish-working-with-Nodejs-Servers
//https://github.com/omaracrystal/learnyounode/blob/master/12_http_uppercaserer.js


// console.log("HELLO WORLD");

//second program:
// Process.argv.array.forEach(element => {
//     console.log(element);
// });
// console.log(process.argv);


// var result = 0;
// for (var i = 2; i < process.argv.length; i++) {
//     result += Number(process.argv[i]);
//   }


//third program
// var fs = require('fs');
// var output = fs.readFileSync('C:\\Users\\Hi\\Desktop\\nodejslearning\\abc.js','utf8').split('\n').length - 1;
// console.log(output);


//fourth program
// var fs = require('fs');
// var file = process.argv[2];
// fs.readFile(file, 'utf8', function (err, contents){
//    var lines = contents.split('\n').length - 1;
//    console.log(lines);
//    });


//fifth program
// var fs= require('fs');
// var path = require('path');
// process.argv[2] = 'C://Users//Hi//AppData//Roaming//npm//node_modules//learnyounode//' ;
// console.log(process.argv[2]);
// fs.readdir(process.argv[2], function (err, list) {
//    list.filter(function (file) {
//      if (path.extname(file) === '.' + process.argv[3])
//        console.log(file);
//    })
//  })


//sixth program
// var filterFn = require('./module.js')
// var dir = process.argv[2];
// var filterStr = process.argv[3];

// filterFn(dir,filterStr, function (err, list) {
//   if (err)
//     return console.error('There was an error:', err)

//   list.forEach(function (file) {
//     console.log(file)
//   })
// })

//eigth program
// var http = require('http');
// http.get(process.argv[2], function callback(response) {
//     response.on('data', function(data) {
//         console.log(data.toString())
//     })
// })


//ninth program
// var http = require('http');
// var bl = require('bl');
// http.get(process.argv[2],function(response){
//     response.pipe(bl(function(err,data){
//       if(err)
//       console.error(err);
//       data = data.toString()
//       console.log(data.length);
//       console.log(data);
//     }))
// })

//tenth program
// var https = require('https')
// var bl = require('bl')
// var results = []
// var count = 0

// function printResults () {
//   for (var i = 0; i < 3; i++)
//     console.log(results[i])
// }

// function httpGet (index) {
//   https.get(process.argv[2 + index], function (response) {
//     response.pipe(bl(function (err, data) {
//       if (err)
//         return console.error(err)

//       results[index] = data.toString()
//       count++

//       if (count == 3) 
//         printResults()
//     }))
//   })
// }

// for (var i = 0; i < 3; i++)
//   httpGet(i)

//eleventh program
// var net = require('net');
// function zeroFill(i){
//     return (i<10 ? '0': '') + i ;
// }
// function now(){
//     var d = new Date();
//     return d.getFullYear() + '-' + zeroFill(d.getMonth()+1) + '-' + zeroFill(d.getDate()) + ''  + zeroFill(d.getHours()) + ':'  + zeroFill(d.getMinutes());
// }

// var server = net.createServer(function(socket){
//     socket.end(now() + '\n');
// });
// server.listen(Number(process.argv[2]));


//tweleve program
// var http = require('http');
// var fs = require('fs');
// var server = http.createServer(function(request,response){
//         fs.createReadStream(process.argv[3]).pipe(res);
// });
// server.listen(process.argv[2]);

//13th program
var map = require('through2-map');
var http = require('http');

http.createServer(function(inStream, outStream) {
    if(inStream.method == 'POST') {
        inStream.pipe(map(function (chunk) {
        return chunk.toString().toUpperCase();
    })).pipe(outStream);
    }
}).listen(process.argv[2]);