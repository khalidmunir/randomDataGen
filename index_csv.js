//var NaturalNameGenerator = require('natural-filename-generator');

var faker  = require('faker'); // Faker.js library
var moment = require('moment');
var Chance = require('chance');
var md5 = require('md5');
 

var vols = require("./vols");
var paths = require("./paths")
var objType = require('./objType.js')
var employee = require('./employees.js')

// var vip = require("./volumeip")
// var volpre = require("./volumeprefix")

var chance = new Chance();
var api = {}
var output = 'name,path,container_path,volume_name,object_type,owner,size,ctime,mtime,atime,digest,object_id,version \n';

 
//var g = new NaturalNameGenerator();
    
//     // DIR PATH
// for(var inn=0; inn<=150;inn++){    
//     var dir =  g.generate();
//     var rand = chance.integer({min:1, max:5})
  
//     for(var loop=0;loop<=rand;loop++){
//     dir += "\\\\" + chance.word({ syllables: chance.integer({min:2, max:5 }) }) //+ "\\" +  chance.word({ syllables: chance.integer({min:2, max:5 }) }) )
//     }
//     // FINAL PATH
//     console.log("\\\\" + dir +"\",")
// }

    var fileItem={}
    var fileLoop = chance.integer({min:100, max:10000})
    var fileCount = 0
    var emp = {}

for (var count=0;count<100;count++){ 
    emp =  employee[count];
    fileItem.employeeID = count+1
    	 fileLoop = chance.integer({min:1000, max:10000}) 

    for(fileCount=0;fileCount <= fileLoop; fileCount++) {

    fileItem.fileName = faker.system.commonFileName();
    fileItem.path =  paths[chance.integer({min:1, max:99})]
    fileItem.containerPath = ''
    fileItem.volume = vols[chance.integer({min:1, max:99})]
    fileItem.ObjectTypeID = objType[0] // chance.integer({min:1, max:6})
    fileItem.size = chance.integer({min:1, max:200000000})
    
// Moment accepts timestamps in milliseconds

    var created = moment().subtract( chance.integer({ min:63360000, max:9999990000}), 'seconds');
    fileItem.ctime =  moment(created).format('DD/MM/YYYY HH:mm:ss.SSS');
    var modified = moment().subtract( chance.integer({ min:31560000, max:63360000}), 'seconds');
    fileItem.mtime =  moment(modified).format('DD/MM/YYYY HH:mm:ss.SSS'); // faker.system.commonFileName();
    var accessed = moment().subtract( chance.integer({ min:0, max:31560000}), 'seconds');
    fileItem.atime =  moment(accessed).format('DD/MM/YYYY HH:mm:ss.SSS'); // faker.system.commonFileName();
    var recModified = moment().subtract( chance.integer({ min:0, max:3156}), 'seconds');
    fileItem.modified =  moment(recModified).format('DD/MM/YYYY HH:mm:ss.SSS'); // faker.system.commonFileName();
    fileItem.created = fileItem.modified
    fileItem.metaHash = "0x" + md5( fileItem.path + fileItem.ctime + fileItem.fileName  );
    fileItem.isDeleted = 0
    fileItem.amID = null

    

    output += `${ fileItem.fileName },${ fileItem.path },${fileItem.containerPath},${fileItem.volume},${fileItem.ObjectTypeID},${emp.businessArea}\\${emp.firstName} ${emp.lastName},${ fileItem.size },${fileItem.ctime},${fileItem.mtime},${fileItem.atime},${fileItem.metaHash},, \n`;  
console.log(output)
	    output = ""
}
}

