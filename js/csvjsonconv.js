$(document).ready(function(){

var upload = document.getElementById("myFile");

function () {
$.ajax({
    url: "data.csv",
    async: false,
    success: function (csvd) {
        var items = $.csv.toObjects(csvd);
        var jsonobject = JSON.stringify(items);
        alert(jsonobject);
    },
    dataType: "text",
    complete: function () {
        // call a function on complete 
    }
});
    
};
    
});