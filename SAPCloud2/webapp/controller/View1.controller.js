sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function (Controller) {
	"use strict";

	return Controller.extend("SAPCloud2.SAPCloud2.controller.View1", {
		onInit: function () {

		},
		onDisplay: function(){
			this.getView().byId("txtSample").setText("Sample");                       
		},
		onClear: function(){
			this.getView().byId("txtSample").setText("");                       
		}
	});
});