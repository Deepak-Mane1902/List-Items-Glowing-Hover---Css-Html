HTMLDocument.prototype.e = document.getElementById;
var displayosname = document.e ("displayosname");
var Name = "Not Known";
if (navigator.appVersion.indexOf("Win") != -1 ) Name = "WINDOW OS";
if (navigator.appVersion.indexOf("Win") != -1 ) Name = "MAC OS";
if (navigator.appVersion.indexOf("Win") != -1 ) Name = "UNIX OS";
if (navigator.appVersion.indexOf("Win") != -1 ) Name = "LINUX OS";

function osname() {
    displayosname.innerHTML = Name;
}