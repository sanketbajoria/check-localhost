# check-localhost

> Check if ip address or dns name belong to your local machine

A tiny script that return the promise, if it belongs to your local machine.

# Installation

`check-localhost` is on npm, so installing it is as easy as doing:

```
$ npm install --save check-localhost
```

# Usage

`require('check-localhost')` in your script. After that you can call it like this (all options are optional):

```js
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
```

# Support

IE9 and up

# License

MIT
