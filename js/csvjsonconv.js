$(document).ready(function(){

$("button").click(function () {

    $.ajax({
    url: "data.csv",
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