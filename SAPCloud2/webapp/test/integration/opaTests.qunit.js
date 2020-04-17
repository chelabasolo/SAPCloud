/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"SAPCloud2/SAPCloud2/test/integration/AllJourneys"
	], function () {
		QUnit.start();
	});
});