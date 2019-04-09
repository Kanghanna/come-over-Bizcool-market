window.onload = init;

var canvas;
var upPressed = false;
var downPressed = false;
var toast=0;
var money=0;
var menu = new Array("bacon_toast","egg_toast");
var output = 0;
var c1Id = document.getElementById("cstm1");
var c2Id = document.getElementById("cstm2");
var c3Id = document.getElementById("cstm3");
var tb1Id = document.getElementById("tb1");
var tb2Id = document.getElementById("tb2");
var tb3Id = document.getElementById("tb3");
var sdwc1Id = document.getElementById("sdwc1");
var sdwc2Id = document.getElementById("sdwc2");
var sdwc3Id = document.getElementById("sdwc3");
var f_appear = null;
var second = 0;
var t = 0;
var cnt = 0;
function init() {

    canvas = document.getElementById("canvas");
    ctx = canvas.getContext("2d");

    window.setTimeout(function () {
        appear1();
    }, 1000);


    window.setTimeout(function () {
        appear2();
    }, 3000);


    window.setTimeout(function () {
        appear3();
    }, 5000);

}

function appear1() {
    window.setInterval(function () {
        if (cnt % 2 == 0) {
            c1Id.style.visibility = "hidden";
            tb1Id.style.visibility = "hidden";
            sdwc1Id.style.visibility = "hidden";
            cnt++;
            //alert("1번 hidden : "+ cnt);
        } else {
            c1Id.style.visibility = "visible";
            tb1Id.style.visibility = "visible";
            sdwc1Id.style.visibility = "visible";
            cnt++;
            //alert("1번 visible : "+ cnt);
        }
    }, 7000);
}

function appear2() {
    window.setInterval(function () {
        if (cnt % 2 == 0) {
            c2Id.style.visibility = "hidden";
            tb2Id.style.visibility = "hidden";
            sdwc2Id.style.visibility = "hidden";
            cnt++;
            //alert("2번 hidden : "+cnt); //4
        } else {
            c2Id.style.visibility = "visible";
            tb2Id.style.visibility = "visible";
            sdwc2Id.style.visibility = "visible";
            cnt++;
            //alert("2번 visible : "+cnt);
        }
    }, 7000);
}

function appear3() {
    window.setInterval(function () {
        if (cnt % 2 != 0) {
            c3Id.style.visibility = "hidden";
            tb3Id.style.visibility = "hidden";
            sdwc3Id.style.visibility = "hidden";
            cnt++;
            //alert("3번 hidden : "+cnt);
        } else {
            c3Id.style.visibility = "visible";
            tb3Id.style.visibility = "visible";
            sdwc3Id.style.visibility = "visible";
            cnt++;
            //alert("3번 visible : "+cnt);
        }

    }, 7000);
}

function add1() {
    toast+=1;
    document.getElementById('bread2').style.visibility="visible";
    document.getElementById('bread2').style.zIndex=toast;
}
function add2() {
    toast+=1;
    document.getElementById('bacon2').style.visibility="visible";
    document.getElementById('bacon2').style.zIndex=toast;
}
function add3() {
    toast+=1;
    document.getElementById('egg2').style.visibility="visible";
    document.getElementById('egg2').style.zIndex=toast;
}
function add4() {
    toast+=1;
    document.getElementById('lettuce2').style.visibility="visible";
    document.getElementById('lettuce2').style.zIndex=toast;
}
function add5() {
    toast+=1;
    document.getElementById('tomato2').style.visibility="visible";
    document.getElementById('tomato2').style.zIndex=toast;
}
function add6(){
    document.getElementById('bread2').style.visibility="hidden";
    document.getElementById('bacon2').style.visibility="hidden";
    document.getElementById('egg2').style.visibility="hidden";
    document.getElementById('lettuce2').style.visibility="hidden";
    document.getElementById('tomato2').style.visibility="hidden";
}
function add7(){
    document.getElementById('bread2').style.visibility="hidden";
    document.getElementById('bacon2').style.visibility="hidden";
    document.getElementById('egg2').style.visibility="hidden";
    document.getElementById('lettuce2').style.visibility="hidden";
    document.getElementById('tomato2').style.visibility="hidden";
    score();    
}
function score(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    money+=1000;
    ctx.font = '48px serif';
    ctx.fillText(money, 10, 60);
}