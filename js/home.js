/**
 * Created by LJP on 2015/3/23.
 */

var tag=0;
var tip=document.getElementsByClassName("new_tip");
var body=document.getElementsByTagName("body")[0];
var detail=document.getElementsByClassName("tip_detail");
var height=document.documentElement.clientHeight;
window.onload=function() {
    setInterval(function () {
        body.style.height=height;
        tag++;
        if (tag == 10) {
            var timer = null;
            clearInterval(timer);
            var opacity = 50;
            timer = setInterval(function () {
                opacity -= 10;
                tip[0].style.opacity = opacity / 100;
                tip[1].style.opacity = opacity / 100;
                tip[2].style.opacity = opacity / 100;
                if (opacity == 0) {
                    tip[0].style.display = "none";
                    tip[1].style.display = "none";
                    tip[2].style.display = "none";
                    clearInterval(timer);
                }
            }, 20);
        }
    }, 200);
};

body.addEventListener("mousemove",function() {
    tag=0;
    tip[0].style.opacity=0.5;
    tip[1].style.opacity=0.5;
    tip[2].style.opacity=0.5;
    tip[0].style.display="block";
    tip[1].style.display="block";
    tip[2].style.display="block";
},false);

var timer_1=null;
var timer_2=null;
function tip_new_show() {
    var n=getIndex(this,tip);
    var spped=5;
    var opacity=detail[n].style.opacity*100;
    detail[n].style.display="block";
    timer_2=setInterval(function(){
        tag=0;
        for(var i=0;i<3;i++) {
            if(i!=n)
                tip[i].style.display="none";
        }
    },0);

    clearInterval(timer_1);
    timer_1=setInterval(function(){
        tag=0;
        detail[n].style.opacity=opacity/100;
        if(opacity==100)
            clearInterval(timer_1);
        opacity+=spped;
    },20);
}

function detail_new_show(){
    var n=getIndex(this,detail);
    var spped=5;
    var opacity=detail[n].style.opacity*100;
    detail[n].style.display="block";
    timer_2=setInterval(function(){
        tag=0;
        for(var i=0;i<3;i++) {
            if(i!=n)
                tip[i].style.display="none";
        }
    },0);

    clearInterval(timer_1);
    timer_1=setInterval(function(){
        detail[n].style.opacity=opacity/100;
        if(opacity==100)
            clearInterval(timer_1);
        opacity+=spped;
    },20);
}

function tip_new_hide(){
    var n=getIndex(this,tip);
    var spped=-5;
    var opacity=detail[n].style.opacity*100;
    clearInterval(timer_2);

    clearInterval(timer_1);
    timer_1=setInterval(function(){
        opacity+=spped;
        detail[n].style.opacity=opacity/100;
        if(opacity==0) {
            detail[n].style.display="none";
            clearInterval(timer_1);
        }
    },20);
}

function detail_new_hide(){
    tag=0;
    var n=getIndex(this,detail);
    clearInterval(timer_2);
    var spped=-5;
    var opacity=detail[n].style.opacity*100;

    clearInterval(timer_1);
    timer_1=setInterval(function(){
        opacity+=spped;
        detail[n].style.opacity=opacity/100;
        if(opacity==0) {
            detail[n].style.display="none";
            clearInterval(timer_1);
        }
    },20);
}

function getIndex(object,arr){
    for(var i=0;i<arr.length;i++)
    {
        if(object===arr[i])
            return i;
    }
}

tip[2].addEventListener("mouseover",tip_new_show,false);
tip[1].addEventListener("mouseover",tip_new_show,false);
tip[0].addEventListener("mouseover",tip_new_show,false);
tip[2].addEventListener("mouseout",tip_new_hide,false);
tip[1].addEventListener("mouseout",tip_new_hide,false);
tip[0].addEventListener("mouseout",tip_new_hide,false);
detail[2].addEventListener("mouseover",detail_new_show,false);
detail[1].addEventListener("mouseover",detail_new_show,false);
detail[0].addEventListener("mouseover",detail_new_show,false);
detail[2].addEventListener("mouseout",detail_new_hide,false);
detail[1].addEventListener("mouseout",detail_new_hide,false);
detail[0].addEventListener("mouseout",detail_new_hide,false);


function hide_block(tag,taget) {
    var op = document.getElementsByClassName(taget)[0];
    if(tag) {       //tag==1 隐藏
        op.style.display="none";
    }
    else {
        op.style.display="block";
    }
}

var b=0;
var c=0;
function biying() {
    var a= document.getElementsByClassName("two_code")[0];
    if(b) {
        a.style.display = "none";
        b=0;
    }
    else {
        a.style.display = "block";
        b = 1;
    }
}

function share() {
    var a= document.getElementsByClassName("share_info")[0];
    var share= document.getElementsByClassName("share")[0];
    if(c) {
        a.style.display = "none";
        share.style.paddingTop="27px";
        c=0;
    }
    else {
        a.style.display = "block";
        share.style.paddingTop="0";
        c = 1;
    }
}

function setting() {
    var variable=document.getElementsByClassName("setting_content")[0];
    var hide_1=document.getElementsByClassName("footer")[0];
    var hide_2=document.getElementsByClassName("content")[0];
    var hide_3=document.getElementsByClassName("header")[0];
    hide_1.style.display="none";
    hide_2.style.display="none";
    hide_3.style.display="none";
    variable.style.display="block"
}

function back_home() {
    var variable=document.getElementsByClassName("setting_content")[0];
    var hide_1=document.getElementsByClassName("footer")[0];
    var hide_2=document.getElementsByClassName("content")[0];
    var hide_3=document.getElementsByClassName("header")[0];
    hide_1.style.display="block";
    hide_2.style.display="block";
    hide_3.style.display="block";
    variable.style.display="none"
}
var j=0;
var left=0;
function new_change(tag) {
    var ob = document.getElementsByClassName("ul_wrap")[0];
    var width=document.documentElement.clientWidth;
    var speed;
    var left_start=left;

    var timer = null;
    clearInterval(timer);
    if (tag == 1) {
         timer = setInterval(function () {
            speed=-10;
            if(left<-(4620-width+100)||(left-left_start)<-(width-110))
                clearTimeout(timer);
            else {
                left+=speed;
                ob.style.left=left+"px";
            }
        }, 1);
    }
    else {
        timer = setInterval(function () {

            speed=10;
            if(left>=0||(left-left_start)>(width-110))
                clearTimeout(timer);
            else
            {
                left+=speed;
                ob.style.left=left+"px";
            }
        }, 1);
    }
}

var bg_num=1;
function bg_change(tag)
{
    var bg=document.getElementsByTagName("body")[0];
    var right=document.getElementsByClassName("right_one")[0];
    var left=document.getElementsByClassName("left_one")[0];
    if(tag==1)  //bg_right
    {
        if(bg_num==1)
        left.style.opacity="1";
        if(bg_num<8) {
            bg_num++;
            bg.style.backgroundImage="url(images/bgd_"+bg_num+".jpg)";
            if(bg_num==8)
                right.style.opacity="0.5";
        }
    }
    else
    {
        if(bg_num==8)
        {
            right.style.opacity="1";
        }
        if(bg_num>1) {
            bg_num--;
            bg.style.backgroundImage="url(images/bgd_"+bg_num+".jpg)";
            if(bg_num==1)
            {
                left.style.opacity="0.5";
            }
        }
    }
}

