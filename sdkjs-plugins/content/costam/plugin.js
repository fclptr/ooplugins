(function (window, undefined) {
    window.Asc.plugin.init = function () {

        let that=this;

        document.getElementById("btn_calculation").onclick = function() {
            that.callCommand(function() {
                var oWorksheet = Api.GetActiveSheet();
                //oWorksheet.SetName("sheet 1");
                var sName = oWorksheet.GetName();
                oWorksheet.GetRange("A1").SetValue("Worksheet name: ");
                oWorksheet.GetRange("A1").AutoFit(false, true);
                oWorksheet.GetRange("B1").SetValue(sName);
            }, true);
		};
        
        document.getElementById("btn_data_range").onclick = function() {    
            var oWorksheet = Api.GetActiveSheet();
            //oWorksheet.SetName("sheet 1");
            var sName = oWorksheet.GetName();
            oWorksheet.GetRange("A1").SetValue("Worksheet name: ");
            oWorksheet.GetRange("A1").AutoFit(false, true);
            oWorksheet.GetRange("B1").SetValue(sName);
        };

    };
    window.Asc.plugin.button = function (id) {

    };
})(window, undefined);
