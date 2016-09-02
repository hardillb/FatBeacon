/**
* Copyright 2016 IBM Corp.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
* http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
**/

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