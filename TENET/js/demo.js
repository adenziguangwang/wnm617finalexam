/*demo.js
DETAILS
ACTIVITY
demo.js
Sharing Info
D
General Info
Type
Javascript
Size
2 KB (1,975 bytes)
Storage used
0 bytesOwned by someone else
Location
Exam2
Owner
Deepa Mahalingam
Modified
May 16, 2016 by Deepa Mahalingam
Opened
1:56 PM by me
Created
Dec 13, 2015
Description
No description
Download permissions
Viewers cannot download
Zip failed All selections cleared
*/
$(function () {

    var movieword = "";
    $("#draggable").draggable();
    $("#draggable1").draggable();
    $("#draggable2").draggable();
    $("#draggable3").draggable();
    $("#draggable4").draggable();

    $("#droppable").droppable({
        accept: "#draggable, #draggable4",
        activeClass: "active",
        hoverClass: "hover",
        drop: function (event, ui) {
            $(this).addClass("ui-widget-content")
                .find("p").html("Dropped");
            movieword += $("#draggable").text().replace(/ /g, '');

        }
    });
    $("#droppable1").droppable({
        accept: "#draggable1",
        activeClass: "active",
        hoverClass: "hover",
        drop: function (event, ui) {
            $(this).addClass("ui-widget-content")
                .find("p").html("Dropped");
            movieword += $("#draggable1").text().replace(/ /g, '');

        }
    });

    $("#droppable2").droppable({
        accept: "#draggable2",
        activeClass: "active",
        hoverClass: "hover",
        drop: function (event, ui) {
            $(this).addClass("ui-widget-content")
                .find("p").html("Dropped");
            movieword += $("#draggable2").text().replace(/ /g, '');

        }
    });

    $("#droppable3").droppable({
        accept: "#draggable3",
        activeClass: "active",
        hoverClass: "hover",
        drop: function (event, ui) {
            $(this).addClass("ui-widget-content")
                .find("p").html("Dropped");
            movieword += $("#draggable3").text().replace(/ /g, '');
        }
    });

    $("#droppable4").droppable({
        accept: "#draggable4, #draggable",
        activeClass: "active",
        hoverClass: "hover",
        drop: function (event, ui) {
            $(this).addClass("ui-widget-content")
                .find("p").html("Dropped");
            movieword += $("#draggable4").text().replace(/ /g, '');
        }
    });





    $('#submitButton').click(function () {

        if (($('#droppable p').text().length > 0) & ($('#droppable1 p').text().length > 0) & ($('#droppable2 p').text().length > 0) & ($('#droppable3 p').text().length > 0) & ($('#droppable4 p').text().length > 0)) {
            alert("!!!TENET!!!");
        } else {
            alert("Try agian");
        }


        //Check if the correct movie was dragged and dropped

        //Check if the movie word is tenet. If yes is it a palindrome 
        
        //ADDED #draggable to the accept in #droppable4 and #droppable4 accept #draggable
    });





});
