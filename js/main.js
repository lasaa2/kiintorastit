$(document).ready(function () {

    console.log("ready");

    $("#adminbutton").click(function () {

        $("#admin").toggleClass("hide");

    });

    $("#menu").click(function () {

        $("#searchBox").toggleClass("hide");

    });

    
    /* Autocomplete funktio */
    
    var tags = ["c++", "java", "php", "coldfusion", "javascript", "asp", "ruby"];
    $("#searchBox").autocomplete({
        source: function (request, response) {
            var matcher = new RegExp("^" + $.ui.autocomplete.escapeRegex(request.term), "i");
            response($.grep(tags, function (item) {
                return matcher.test(item);
            }));
        }
    });

});

/* Admin valikossa olevat tiedoston lataus painikkeet */

$("#upload").click(function () {

    var myFile = document.getElementById("myFile"); // Get input file

    /* Convert csv to json and put main.js process */

    csv2geojson.csv2geojson(myFile, {
        latfield: 'latitude',
        lonfield: 'longitude',
        delimiter: ','
    }, function (err, data) {
        console.log(err); // err has any parsing errors
        console.log(data); // data is the data.
    });

    /* Pelkkä csv to json */
    /*
                    $.ajax({
                        url: myFile,
                        async: false,
                        success: function (csvd) {
                            var items = $.csv.toObjects(csvd);
                            jsonobject = JSON.stringify(items);
                            alert(jsonobject);
                        },
                        dataType: "text",
                        complete: function () {
                            // call a function on complete 
                        }

                    });
    */

});
