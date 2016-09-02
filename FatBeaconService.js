var bleno = require('bleno');
var util = require('util');

var HTMLCharacteristic = require('./HTMLCharacteristic');

var htmlCharacteristic = new HTMLCharacteristic();

var BlenoPrimaryService = bleno.PrimaryService;

function FatBeaconService() {
	FatBeaconService.super_.call(this, {
		uuid: 'ae5946d4e5874ba8b6a5a97cca6affd3',
		characteristics: [htmlCharacteristic]
	})
}

util.inherits(FatBeaconService, BlenoPrimaryService);

module.exports = FatBeaconService;