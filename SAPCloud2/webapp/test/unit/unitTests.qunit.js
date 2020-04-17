/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"SAPCloud2/SAPCloud2/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});