var checkLocalHost = require('./index.js');

checkLocalHost("127.0.0.1").then(function(islocal){
    console.log("Is 127.0.0.1 localhost -- " + islocal);
})

checkLocalHost("10.0.75.1").then(function(islocal){
    console.log("Is 10.0.75.1 localhost -- " + islocal);
})

checkLocalHost("localhost").then(function(islocal){
    console.log("Is localhost localhost -- " + islocal);
})

checkLocalHost("localhost.relayhub.pitneycloud.com").then(function(islocal){
    console.log("Is localhost.relayhub.pitneycloud.com localhost -- " + islocal);
})

checkLocalHost("localhost2.relayhub.pitneycloud.com").then(function(islocal){
    console.log("Is localhost2.relayhub.pitneycloud.com localhost -- " + islocal);
})

checkLocalHost("localhost2").then(function(islocal){
    console.log("Is localhost2 localhost -- " + islocal);
})

checkLocalHost("192.168.0.110").then(function(islocal){
    console.log("Is 192.168.0.110 localhost -- " + islocal);
})

checkLocalHost("192.168.0.105").then(function(islocal){
    console.log("Is 192.168.0.105 localhost -- " + islocal);
})