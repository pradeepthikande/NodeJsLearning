// https://github.com/leochilds/learnyounode-walkthrough/blob/master/4.%20My%20First%20Asynchronous%20IO/walkthrough.md

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
// var dir = 'C://Users//Hi//AppData//Roaming//npm//node_modules//learnyounode/';
// console.log(dir);
// console.log(filterStr);
// var filterStr = process.argv[3]

// filterFn(dir, filterStr, function (err, list) {
//   if (err)
//     return console.error('There was an error:', err)

//   list.forEach(function (file) {
//     console.log(file)
//   })
// })

//eigth program