$(document).ready(function () {

    console.log("ready");

    $("#adminbutton").click(function () {

        $("#admin").toggleClass("hide");

    });

    $("#menu").click(function () {

        $("#searchBox").toggleClass("hide");

    });

    // Päivitys clikki funktio
    $("#upload").click(function () {
        var myFile = document.getElementById("myFile").value; // Get input file
        // Parse CSV string
        var data = Papa.parse(myFile);
        alert("Tämä ei tallennu tällä hetkellä mihinkään: \n\n" + JSON.stringify(data));

    });

});
