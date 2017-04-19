$(document).ready(function () {

    $("#menu").click(function () {

        $("#search-form").toggleClass("hide");

    });


    /*
        var myFile = 0; // input filen muuttuja
        var jsonobject = 0; // json datan muuttuja
    */
    /* Admin valikossa olevat tiedoston lataus painikkeet */
    /*
        $("button").click(function () {

            var myFile = document.getElementById("myFile"); // Get input file

            /* Convert csv to json and put main.js process */
    /*
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
            

        });
        */
});
