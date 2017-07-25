/***
 * @file Set of utilities that might be useful in Windows development with Hyperloop and Titanium
 * @module ti.windows.utilities
 * @author Ewan Harris <ewanharris93@gmail.com>
 * @requires Hyperloop
 * @version 1.0.0
 * @since 1.0.0
 */
const OS_NAME = Ti.Platform.osname;
const windowsValues = ['windowsstore', 'windowsphone', 'windows'];
const AnalyticsInfo = require('Windows.System.Profile.AnalyticsInfo');
const ApiInformation = require('Windows.Foundation.Metadata.ApiInformation');
const SystemMath = require('System.Convert')
// We will cache results to make any repeated calls quicker
var deviceFamily;
var apiContractInfo = {};
var typeInfo = {};


/**
 * Returns the Windows 10 device family.
 * @return {string} The device family being run on. Either Mobile, Desktop or Other
 */
exports.getDeviceFamily = function() {
	if (windowsValues.indexOf(OS_NAME) >= 0)  {
		if (!deviceFamily) {
			switch(AnalyticsInfo.VersionInfo.DeviceFamily) {
				case 'Windows.Mobile':
					deviceFamily = 'Mobile';
					return deviceFamily;
				case 'Windows.Desktop':
					deviceFamily = 'Desktop';
					return deviceFamily;
				case 'default':
					deviceFamily = 'Other';
					return deviceFamily;
			}
		} else {
			return deviceFamily;
		}
	} else {
		Ti.API.error(OS_NAME + ' probably wont find any value in this module');
	}
}


/**
 * Query whether an API contract is supported on the running OS
 * @param  {string}  contractName The contract name to query for
 * @param  {number}  [majorVer]     Major version number of the API contract
 * @param  {number}  [minorVer]     Minor version number of the API contract
 * @return {Boolean}              Whether the API contract is supported on the running OS
 */
exports.isApiContractPresent = function(contractName, majorVer, minorVer) {
	if (!apiContractInfo[contractName]) {
		var result;
		if (minorVer) {
			result = ApiInformation.IsApiContractPresent(contractName, majorVer, minorVer);
		} else if (majorVer) {
			result = ApiInformation.IsApiContractPresent(contractName, majorVer);
		}
		apiContractInfo[contractName] = result;
		return result;
	} else {
		return apiContractInfo[contractName];
	}
}

/**
 * Query whether a type is supported on the running OS
 * @param  {string}  typeName The type to query for
 * @return {Boolean}          Whether the type is supported on the running OS
 */
exports.isTypePresent = function(typeName) {
	if (!typeInfo[typeName]) {
		return typeInfo[typeName] = ApiInformation.IsTypePresent(typeName);
	} else {
		return typeInfo[typeName];
	}
}
