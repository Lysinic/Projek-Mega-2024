var spmctdn = new Date("Feb 22, 2021 07:20:00").getTime();

var x = setInterval(function() {

    var now = new Date().getTime();

    var distance = spmctdn - now;

    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("spmcn").innerHTML = days + "d " + hours + "h "
    + minutes + "m " + seconds + "s ";

    if (distance < 0) {
        clearInterval(x);
        document.getElementById("spmcn").innerHTML = "Good Luck!";
    }
}, 1000);

var ptthreectdn = new Date("Jan 20, 2021 07:20:00").getTime();

var x = setInterval(function() {

    var now = new Date().getTime();

    var distance = ptthreectdn - now;

    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("ptthreecn").innerHTML = days + "d " + hours + "h "
    + minutes + "m " + seconds + "s ";

    if (distance < 0) {
        clearInterval(x);
        document.getElementById("ptthreecn").innerHTML = "Good Luck!";
    }
}, 1000);

function myVm() {
    document.getElementById("myMenuvm").style.left = "0";
}
function myDisvm() {
    document.getElementById("myMenuvm").style.left = "-1000px";
}
function myT() {
    document.getElementById("myMenut").style.left = "0";
}
function myDist() {
    document.getElementById("myMenut").style.left = "-1000px";
}
function myS() {
    document.getElementById("myMenus").style.left = "0";
}
function myDiss() {
    document.getElementById("myMenus").style.left = "-1000px";
}
function myB() {
    document.getElementById("myMenub").style.left = "0";
}
function myDisb() {
    document.getElementById("myMenub").style.left = "-1000px";
}
