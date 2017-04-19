$(document).ready(function(){

$("button").click(function () {
    
    var myFile = document.getElementById("myFile");
    
    $.ajax({
    url: myFile,
    async: false,
    success: function (csvd) {
        var items = $.csv.toObjects(csvd);
        var jsonobject = JSON.stringify(items);
        console.log(jsonobject);
    },
    dataType: "text",
    complete: function () {
        // call a function on complete 
    }

    });
    
});
    
});