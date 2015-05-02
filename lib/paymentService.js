var Config = require('./config');

var Soap = require('soap');

function createClient() {
	Soap.createClient(Config.url.master, function(err, client) {
		if (err) // TODO: inspect error, if it is due to server unavailability, connect to slave
			throw err;
			
		return client;
	});	
}

exports.createClient = createClient;
