sap.ui.define(['sap/ui/core/mvc/Controller'],
//call back which will get called when all dependencies are loaded
    function (Vinod) {
        return Vinod.extend("mickey.controller.Main", {
            callMe: function () {
                alert('welcome');
            }
        });
    });