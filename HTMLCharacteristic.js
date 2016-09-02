var bleno = require('bleno');
var util = require('util');

var html = "<html>" + 
			"<head>" +
			 "<title>Fat Beacon Demo</title>" +
			 "<meta name='description' content='FatBeacon Demo'/>"
			"</head>" + 
			"<body>" +
			 "<h1>HelloWorld</h1>"
			"</body>" + 
		   "</html>";

function HTMLCharacteristic() {
	bleno.Characteristic.call(this, {
		uuid: 'd1a517f0249946ca9ccc809bc1c966fa',
		properties: ['read'],
		descriptors: [
			new bleno.Descriptor({
				uuid: '2901',
				value: 'HTML'
			})
		]
	});
}

util.inherits(HTMLCharacteristic,bleno.Characteristic);

HTMLCharacteristic.prototype.onReadRequest = function(offset, callback) {
	console.log("read request");
	var buf = new Buffer(html, 'utf8');
	if (offset < buf.length) {
		var slice = buf.slice(offset);
		callback(this.RESULT_SUCCESS, slice);
	} else {
		//problem
	}

}

module.exports = HTMLCharacteristic;