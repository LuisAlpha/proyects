const fs = require('fs');

try{
fs.unlinkSync('\tmp\hello');
console.log('successfylly deleted \tmp\hello');
}catch(err){
console.error(err);
}
