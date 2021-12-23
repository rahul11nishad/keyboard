var string = document.getElementById('text').innerText;

// ....................................>>>>>>>>>>>>>>>>>>>>>>>>>>>
const st = document.getElementById('text').innerText;
console.log(st)
var space = [];//space declare for index of space charater
var idname=[];
for (var i = 0; i < st.length; i++)//loop for push index of space  charater
{
    if (st[i] == " ")//if st[i]==" " then push
    {
        space.push(i);//push space index in  space array
    }
    if (i == st.length - 1)//if i==st.length-1 then push
    {
        space.push(i)
    }
}
console.log(space);
// const end_point=[];
function line(start, end)//two argument take this function start and end
{   //this function make line in difference 40 between 50 
    // end_point.push(end);
    var sstring = "";
    var words="";
    if (start == space[0]) {
        for (var i = 0; i <=end; i++) {
            words += st[i];
            sstring += "<font  id=" + i + ">" + st[i] + "</font>";
        }
    }
    else {
        for (var i = start+1; i <=end; i++) {
            words += st[i];
            sstring += "<font  id=" + i + ">"+st[i]+"</font>";
        }
    }
    console.log(words,start);
    document.getElementById('pra').innerHTML += "<p  id=" + start + 'p' + ">" + sstring + "</p><br>";
    idname.push(start+"p");
}
// console.log(end_point);
line(space[0], space[3]); //first time line function called...
function difer()//this function tell us that difference is between 40 to 50
{
    var ini = 3;//declaretion of initial variable =6;
    for (var i = 3; i < space.length; i++)//loop for i=6 to space.length-1;
    {
        if (space[i] - space[ini] >=30 && space[i] - space[ini] <= 40) {
            line(space[ini], space[i]);
            ini = i;
        }
    }
    i = space.length - 1;
    line(space[ini], space[i]);//last time line function called...      
}
difer();//difer function called here...
console.log(idname);

// ---------------------------------------------------------------------------->
function posh()
{
    var tu=document.getElementById('pra').style.top;
    // var point=document.getElementById()
    console.log(tu);
    // if(tu>-"50em")
    // {

    // }
}
posh();
var id = 0;
document.getElementById(id).style.border = "0px 0px 0px 2px";
function change(id,chh){
    document.getElementById(id).style.borderBottom = '2px solid blue';
    if(id>0)
    {
        document.getElementById(id - 1).style.borderBottom = 'none';
    }
}
change(0,string[0]);
var ind=28;
var up=0;
var px='em';
var oo=0;
var current=0;
var ff = document.getElementById(idname[oo]).innerText;
// another function are going to delclare
var previouskey ="";
var ss=document.getElementById(st[0]).style;
function keycolor(key)
{
    document.getElementById(key).style.color = "red";
    document.getElementById(key).style.backgroundColor="white";
    document.getElementById(previouskey).style.color = "none";
    document.getElementById(previouskey).style.backgroundColor = "none";
    var previouskey=key;
}
keycolor(st[0]);
var di=new String()
document.addEventListener('keypress', event => {
    var tt = document.getElementById(id).innerText;
    var ch = document.getElementById(id).innerText;
    const keyNa = event.key;
    const shift = event.shiftKey;
    const upp = new String();
    change(id+1 ,ch);
    keycolor(di.toLocaleLowerCase(st[id+1]));
    var uu = upp.toUpperCase(tt);
    if (uu) {
        if (shift === tt) {
            document.getElementById(id).style.color = "rgb(145, 250, 190)";
            document.getElementById(id).style.backgroundColor = 'rgb(235, 255, 253)';
        }
        else {
            document.getElementById(id).style.color = 'red';
            document.getElementById(id).style.backgroundColor = 'rgb(235, 255, 253)';
        }
    }
    else {
        if (keyNa === tt) {
            document.getElementById(id).style.color = "rgb(145, 250, 190)";
            document.getElementById(id).style.backgroundColor = 'rgb(235, 255, 253)';
        }
        else {
            document.getElementById(id).style.color = 'red';
            document.getElementById(id).style.backgroundColor = 'rgb(235, 255, 253)';
        }
    }
    if(up<-30)
    {
        up=-30;
    }
    else
    {
        if (current==ff.length-1)
        {
            oo += 1;
            document.getElementById('pra').style.top=up+px;
            up -=1;
            current=0;
            console.log(ff);
        }
    }
    id++;
    current++;
});

// var index=0;
var ll=document.getElementById("text").innerText;
var str= new String;
var stt=1;
function styl(low)
{
    // var lower = str.toLowerCase(ll[low]);
    document.getElementById(str.toLowerCase(ll[low])).style.backgroundColor = "rgb(255, 205, 205)";
    if(0<low)
    {
        document.getElementById(str.toLowerCase(ll[low-1])).style.backgroundColor ="none";
    }
}
// styl(0);
// document.addEventListener('keypress',event=>{
//     var keey=event.key;
//     styl(stt);
//     // var lower=str.toLowerCase(ll[stt]);
//     // document.getElementById(lower).style.backgroundColor = rgb(255, 205, 205);
//    stt+=1;
// })
