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
    ipInfo ="[ COUNTRY: "+ resData.data.country_name +" CITY NAME: "+ resData.data.city_name+"]"; 
    console.log("Your location information is:" + ipInfo);       
    }
else{
    console.log("Sorry, information about your location couldn't be fetched!");
}
};

let errorHandler= function(error){
    const errData = JSON.parse(error.responseText);
console.log("An error just occured: "+ (errData.errors)[0].message);
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
console.log(test.getIp("5.19.255.a"));
