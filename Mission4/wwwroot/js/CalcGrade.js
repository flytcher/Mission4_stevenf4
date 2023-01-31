////document.getElementById("btnSend").addEventListener("click", function () {
////    alert("Nice")
////});

$("#btnSend").click(function () {
    var asgn = parseFloat($("#asgn").val());
    var gp = parseFloat($("#gp").val());
    var qz = parseFloat($("#qz").val());
    var me = parseFloat($("#me").val());
    var fe = parseFloat($("#fe").val());
    var ix = parseFloat($("#ix").val());

    var total = (asgn * 0.5) + (gp * 0.1) + (qz * 0.1) + (me * 0.1) + (fe * 0.1) + (ix * 0.1);
    var letterGrade = "";
    if (total >= 94) {
        letterGrade = "A";
    } else if (total >= 90) {
        letterGrade = "A-";
    } else if (total >= 87) {
        letterGrade = "B+";
    } else if (total >= 84) {
        letterGrade = "B";
    } else if (total >= 80) {
        letterGrade = "B-";
    } else if (total >= 77) {
        letterGrade = "C+";
    } else if (total >= 74) {
        letterGrade = "C";
    } else if (total >= 70) {
        letterGrade = "C-";
    } else if (total >= 67) {
        letterGrade = "D+";
    } else if (total >= 64) {
        letterGrade = "D";
    } else if (total >= 60) {
        letterGrade = "D-";
    } else {
        letterGrade = "E";
    }

    $("#result").html("<b>Percentage: </b>" + total + "%<br>" + "<b>Letter Grade: </b>" + letterGrade);
});