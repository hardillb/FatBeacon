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