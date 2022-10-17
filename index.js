const mesInfos = require ('./information');


var cowsay = require("cowsay");
console.log(cowsay.say({
  text : `${mesInfos.lastName} ${mesInfos.campus}`,
  e : "oO",
  T : "U "
}));
