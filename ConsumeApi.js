'use strict';
module.exports = {
getIp: function(ip){
let najax = require('najax');
let ipInfo ="";
const address = ip.split(".");
let len = address.length;
if (len!=4) {
    
    console.log("Invalid IP address!");
}
else{    
let callback = function(data){
    const resData = JSON.parse(data);
    if (resData.status == "success") {
    ipInfo = resData.data.country_name.toUpperCase()+" "+ resData.data.city_name; 
    console.log("Your location information is:" + ipInfo);       
    }
else{
    console.log("Sorry, information about your location couldn't be fetched!");
}
};

let errorHandler= function(){
console.log("An error just occured!");
};

najax({url:"https://ipvigilante.com/json/"+ip, type: "GET"})
.success(callback).error(errorHandler);
}

}
}
let test=require("./ConsumeApi.js");

setTimeout(function() {
console.log('World!');
}, 2000);
console.log(test.getIp("5.19.255.255"));
