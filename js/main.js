$(document).ready(function(){

var myFile = 0;
var jsonobject = 0;    
    
    
$("button").click(function () {
    
    var myFile = document.getElementById("myFile"); // Get input file
    
    /* Convert csv to json and put main.js process */
    
    $.ajax({
    url: myFile,
    async: false,
    success: function (csvd) {
        var items = $.csv.toObjects(csvd);
        jsonobject = JSON.stringify(items);
        console.log(jsonobject);
    },
    dataType: "text",
    complete: function () {
        // call a function on complete 
    }

    });
    
});
    
});