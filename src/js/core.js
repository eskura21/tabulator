(function(){

	'use strict';

	/*=include column_manager.js */
	/*=include column.js */
	/*=include row_manager.js */
	/*=include row.js */
	/*=include cell.js */

	window.Tabulator = {
	 		//setup options
	 		options: {

	 		},

	 		//constructor
	 		_create: function(){
	 			var self = this;
	 			var element = self.element;
	 		},


	 		//set options
	 		_setOption: function(option, value){
	 			var self = this;

	 		},

	 		//alert user that the plugin they are trying to use is missing
	 		missingPlugin:function(plugin){
	 			console.error("Tabulator Plugin Not Installed: " + plugin);
	 		},

	 		//deconstructor
	 		_destroy: function(){
	 			var self = this;
	 			var element = self.element;

	 			element.empty();

	 			element.removeClass("tabulator");
	 		},
	 };


	 /*=include extensions_enabled.js */

 })();