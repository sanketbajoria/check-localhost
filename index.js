var dns = require('dns');
var os = require('os');
var ifaces = os.networkInterfaces();

/**
 * Check if address/dnsname is local
 * @param {*} address <ip address/dns name>
 */
function checkLocalHost(address){
    return new Promise((resolve, reject) => {
        dns.lookup(address, function(err, addr){
            if(err){
                resolve(false);
                return;
            }
            try{
                address = addr;
                Object.keys(ifaces).forEach(function (ifname) {
                    ifaces[ifname].forEach(function (iface) {
                        if(iface.address === address)
                            resolve(true);
                    });
                });
                resolve(false);
            }catch(err){
                reject(err);
            }
        })
    })
}

module.exports = checkLocalHost;