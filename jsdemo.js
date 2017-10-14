var fs = require('fs')
var fs=require("fs");
fs.exists("../local/"+process.argv[2],function(exists){
  if(exists){
     console.log("文件存在")
     process.exit(1)
  }
  else{
  var dirName = process.argv[2] // 你传的参数是从第 2 个开始的

  process.chdir("/Users/tangyu/local") // cd ~/Desktop
  fs.mkdirSync("./" + dirName) // mkdir $1
  process.chdir("./" + dirName) // cd $1
  fs.mkdirSync('css') // mkdir css
  fs.mkdirSync('js') // mkdir js

  fs.writeFileSync("./index.html", "")
  fs.writeFileSync("css/style.css", "")
  fs.writeFileSync("./js/main.js", "")

  process.exit(0)
  }})
