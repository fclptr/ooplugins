(function (window, undefined) {
    window.Asc.plugin.init = function () {
        this.call command(function() {
            var oWorksheet = Api.GetActiveSheet();
            //oWorksheet.SetName("sheet 1");
            var sName = oWorksheet.GetName();
            oWorksheet.GetRange("A1").SetValue("Worksheet name: ");
            oWorksheet.GetRange("A1").AutoFit(false, true);
            oWorksheet.GetRange("B1").SetValue(sName);
        }, true);
    };
    window.Asc.plugin.button = function (id) {
    };
})(window, undefined);
