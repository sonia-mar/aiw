$(document).ready(function () {
    $("#openModalButton").click(function () {
        $("#contactModal").removeClass("hidden");
    });

    $("#openModalButton2").click(function () {
        $("#contactModal2").removeClass("hidden");
    });

    $("#closeModalButton").click(function () {
        $("#contactModal").addClass("hidden");
    });
    $("#closeModalButton2").click(function () {
        $("#contactModal2").addClass("hidden");
    });

    $(window).click(function (event) {
        if (event.target === document.getElementById("contactModal")) {
            $("#contactModal").addClass("hidden");
        }
    });

});
