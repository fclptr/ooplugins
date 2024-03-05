function somethingToDo() {
    console.log("somethingToDo");
    window.Asc.plugin.callCommand( function () {
        var oWorksheet = Api.GetActiveSheet();    
        oWorksheet.GetRange("A1").SetValue("Info: ");
        oWorksheet.GetRange("A1").AutoFit(false, true);
        oWorksheet.GetRange("B1").SetValue(Asc.scope.info);
    }, false, true);
}

(function (window, undefined) {
    window.Asc.plugin.init = function () {

        document.getElementById("btn_calculation").onclick = function() {
            window.Asc.plugin.callCommand(function() {
                console.log("callCommand!");
                console.log(Api);
                var oWorksheet = Api.GetActiveSheet();
                //oWorksheet.SetName("sheet 1");
                var sName = oWorksheet.GetName();
                oWorksheet.GetRange("A1").SetValue("Worksheet name: ");
                oWorksheet.GetRange("A1").AutoFit(false, true);
                oWorksheet.GetRange("B1").SetValue(sName);
            }, false);
		};
        
        document.getElementById("btn_result_range").onclick = function() {
            window.Asc.plugin.callCommand(function() {
                console.log("callCommand!");
                console.log(Api);
                var oWorksheet = Api.GetActiveSheet();
                //oWorksheet.SetName("sheet 1");
                var sName = oWorksheet.GetName();
                oWorksheet.GetRange("A1").SetValue("Some name: ");
                oWorksheet.GetRange("A1").AutoFit(false, true);
                oWorksheet.GetRange("B1").SetValue("<<<"+sName+">>>");
            }, false);
		};

        document.getElementById("btn_data_range").onclick = function() {    
            let info="data range!";
            Asc.scope.info=info;
            console.log("Asc");
            console.log(Asc);
            somethingToDo();
        };

    };
    window.Asc.plugin.button = function (id) {

    };
})(window, undefined);
