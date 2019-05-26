const fs = require('fs');
const path = require('path');
const sizeOf = require('image-size');


module.exports =  function (name) {
    readFile(name)
}

function readFile (name) {
    try{
        let dirPath = path.resolve(process.cwd(),name).toString();
        fs.stat(dirPath, (err,stats) => {
            if(stats.isDirectory()){
                readDir(dirPath)
            }
        });
    }catch(err){
        console.log(err)
    }
}

function readDir (dirPath) {
    fs.readdir(dirPath, (err, files) => {
        files.forEach((v) => {
            sizeOf(path.resolve(dirPath, v), (err, dimensions) => {
                let type = v.split('.')[1];
                let name = v.split('.')[0];
                fs.rename(path.resolve(dirPath, v), path.resolve(dirPath, `${name}_${dimensions.width}_${dimensions.height}.${type}`),(err) => {
                    if (err) throw err;
                })
            });
        });
    });
}
