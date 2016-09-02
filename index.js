var bleno = require('bleno');

var BlenoPrimarySerivce = bleno.PrimaryService;

var FatBeaconService = require('./FatBeaconService');

var fatBeaconService = new FatBeaconService();

bleno.on('stateChange', function(state){
	if (state === 'poweredOn') {
		console.log("power on");
		bleno.startAdvertising(
			'FatBeacon',
			[fatBeaconService.uuid]
		);
	}
});

bleno.once('advertisingStart', function(err) {
	if (!err) {
		console.log("advertising");
		bleno.setServices([
      		fatBeaconService
    	]);
	}
});

bleno.on('accept',function(clientAddress){
	console.log("connceted: ", clientAddress)
});

bleno.on('disconnect',function(clientAddress){
	console.log("disconnceted: ", clientAddress)
});

bleno.on('servicesSetError', function(error){
	console.log(error);
});