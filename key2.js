const st= document.getElementById('text').innerText;

console.log(st);
var id=0;
var space = [];//space declare for index of space charater
var idname = [];
for (var i = 0; i < st.length; i++)//loop for push index of space  charater
{
    if (st[i] ==' ')//if st[i]==" " then push
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
    var words = "";
    if (start == space[0]) {
        for (var i = 0; i <= end; i++) {
            words += st[i];
            // sstring += "<font  id=" + i + ">" + st[i] + "</font>";
            if (st[i] == " ") {
                sstring += "<font  id=" + i + ">" +'&#160;'+ "</font>";
            }
            else {
                sstring += "<font  id=" + i + ">" + st[i] + "</font>";
            }
        }
    }
    else {
        for (var i = start + 1; i <= end; i++) {
            words += st[i];
            if(st[i]==" ")
            {
                sstring += "<font  id=" + i + ">" +'&#160;'+ "</font>";
            }
            else
            {
                sstring += "<font  id=" + i + ">" + st[i] + "</font>";
            }
            // sstring += "<font  id=" + i + ">" + st[i] + "</font>";
        }
    }
    console.log(words, start);
    document.getElementById('pra').innerHTML += "<p  id=" + start + 'p' + ">" + sstring + "</p>";//+"<br>";
    idname.push(start + "p");
}
// console.log(end_point);
line(space[0], space[6]); //first time line function called...
function difer()//this function tell us that difference is between 40 to 50
{
    var ini =6;//declaretion of initial variable =6;
    for (var i = 6; i < space.length; i++)//loop for i=6 to space.length-1;
    {
        if (space[i] - space[ini] >= 25 && space[i] - space[ini] <=40) {
            line(space[ini], space[i]);
            ini = i;
        }
    }
    i = space.length - 1;
    line(space[ini], space[i]);//last time line function called...      
}
difer();//difer function called here...
console.log(idname);
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
var object=new String();
var right=0,wrong=0;
function CharColor(keyNa,inu)
{
    // var K=new KeyboardEvent();
    // console.log(K);
    var tt=document.getElementById(inu).innerText;
    var uu =object.toUpperCase(keyNa);
    // console.log(typeof(uu));
    if (uu) {
        if (shift === tt) {
            right++;
            document.getElementById(inu).style.color = 'dodgerblue';
        }
        else {
            wrong++;
            document.getElementById(inu).style.color = 'red';
        }
    }
    else {
        if (keyNa === tt) {
            right++;
            document.getElementById(inu).style.color = 'dodgerblue';
        }
        else {
            wrong++;
            document.getElementById(inu).style.color = 'red';
        }
    }
}
// xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
function change(id) {
    // console.log(id);
    document.getElementById(id).setAttribute('class','boderbottom');     // style.borderBottom = '3px solid blue';
    if (id > 0) {
        document.getElementById(id - 1).removeAttribute('class');//style.borderBottom = 'none';
    }
    else if(st.length-1)
    {
        document.getElementById(id).setAttribute('class','boderbottom');//style.borderBottom = '3px solid blue';
    }
}
console.log(st.length);
change(0);

// '''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''>>>>>>>>>>
var praghraphScrol=document.getElementById('pra');
function scrol(n)
{
    praghraphScrol.style.top = -n + "em";
} 
console.log(typeof st[4] )
var p=0;
var lastchar="";
var nextchar="";
var later="";
// :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::>
// function mischar(kkey)
// {
//     // document.getElementById(kkey.toLowerCase()).setAttribute('class', 'red');
//     switch (kkey) {
//         case ',':
//             document.getElementById('comma').setAttribute('class', 'red');
//             break;
//         case ';':
//             document.getElementById('semicolon').setAttribute('class', 'red');
//             break;
//         case '.':
//             document.getElementById('dot').setAttribute('class', 'red');
//             break;
//         case '/':
//             document.getElementById('forwordslash').setAttribute('class', 'red');
//             break;
//         case "\"":
//             document.getElementById('backwordslash').setAttribute('class', 'red');
//             break;
//         case '-':
//             document.getElementById('minus').setAttribute('class', 'red');
//             break;
//         case ']':
//             document.getElementById('closesquarebreaket').setAttribute('class', 'red');
//             break;
//         case '[':
//             document.getElementById('opensquarebreaket').setAttribute('class', 'red');
//             break;
//         case "'":
//             document.getElementById('singlequate').setAttribute('class', 'red');
//             break;
//         case '`':
//             document.getElementById('band').setAttribute('class', 'red');
//             break;
//     }
//     if (kkey == '1' || kkey == '2' || kkey == '3' || kkey == '4' || kkey == '5' || kkey == '6' || kkey == '7' || kkey == '8' || kkey =='9' || kkey == '0') {
//         document.getElementById("num" + kkey).setAttribute('class', 'red');
//     }
//     else {
//         if (kkey == "A" || kkey == "B" || kkey == "C" || kkey == "D" || kkey == "E" || kkey == "F" || kkey == "G" || kkey == "V" || kkey == "Z" || kkey == "W" || kkey == "Q" || kkey == "S" || kkey == "X" || kkey == "R" || kkey == "T") {
//             document.getElementById('leftShift').removeAttribute('class');
//             document.getElementById('rightShift').setAttribute('class', 'red');
//         }
//         else if (kkey == "Y" || kkey == "U" || kkey == "I" || kkey == "J" || kkey == "O" || kkey == "P" || kkey == "L" || kkey == "K" || kkey == "H" || kkey == "N" || kkey == "M" || kkey == ";" || kkey == ">" || kkey == "<" || kkey == '"') {
//             document.getElementById('rightShift').removeAttribute('class');
//             document.getElementById('leftShift').setAttribute('class', 'red');
//         }
//         else {
//             document.getElementById('rightShift').removeAttribute('class');
//             document.getElementById('leftShift').removeAttribute('class');
//         }
//         document.getElementById(char.toLowerCase()).setAttribute('class', 'red');
//     }
// }
// ****************************************************

// function rightchar(kkey)
// {
//     // document.getElementById(kkey.toLowerCase()).removeAttribute('class','red');/
//     switch (kkey) {
//         case ',':
//             document.getElementById('comma').setAttribute('class', 'red');
//             break;
//         case ';':
//             document.getElementById('semicolon').setAttribute('class', 'red');
//             break;
//         case '.':
//             document.getElementById('dot').setAttribute('class', 'red');
//             break;
//         case '/':
//             document.getElementById('forwordslash').setAttribute('class', 'red');
//             break;
//         case "\"":
//             document.getElementById('backwordslash').setAttribute('class', 'red');
//             break;
//         case '-':
//             document.getElementById('minus').setAttribute('class', 'red');
//             break;
//         case ']':
//             document.getElementById('closesquarebreaket').setAttribute('class', 'red');
//             break;
//         case '[':
//             document.getElementById('opensquarebreaket').setAttribute('class', 'red');
//             break;
//         case "'":
//             document.getElementById('singlequate').setAttribute('class', 'red');
//             break;
//         case '`':
//             document.getElementById('band').setAttribute('class', 'red');
//             break;
//     }
//     if (kkey == '1' || kkey == '2' || kkey == '3' || kkey == '4' || kkey == '5' || kkey == '6' || kkey == '7' || kkey == '8' || kkey == '9' || kkey == '0') {
//         document.getElementById("num" + kkey).setAttribute('class', 'red');
//     }
//     else {
//         if (kkey == "A" || kkey == "B" || kkey == "C" || kkey == "D" || kkey == "E" || kkey == "F" || kkey == "G" || kkey == "V" || kkey == "Z" || kkey == "W" || kkey == "Q" || kkey == "S" || kkey == "X" || kkey == "R" || kkey == "T") {
//             document.getElementById('leftShift').removeAttribute('class');
//             document.getElementById('rightShift').setAttribute('class', 'red');
//         }
//         else if (kkey == "Y" || kkey == "U" || kkey == "I" || kkey == "J" || kkey == "O" || kkey == "P" || kkey == "L" || kkey == "K" || kkey == "H" || kkey == "N" || kkey == "M" || kkey == ";" || kkey == ">" || kkey == "<" || kkey == '"') {
//             document.getElementById('rightShift').removeAttribute('class');
//             document.getElementById('leftShift').setAttribute('class', 'red');
//         }
//         else {
//             document.getElementById('rightShift').removeAttribute('class');
//             document.getElementById('leftShift').removeAttribute('class');
//         }
//         document.getElementById(char.toLowerCase()).setAttribute('class', 'red');
//     }
// }
// -----------------------------------------------------------------------------------
function buttonstyle(char)
{
    if(char=='1'||char=='2'||char=='3'||char=='4'||char=='5'||char=='6'||char=='7'||char=='8'||char=='9'||char=='0')
    {
        document.getElementById("num"+char).setAttribute('class', 'tee');
    }
    // else
    // {
        // document.getElementById(char.toLowerCase()).setAttribute('class', 'tee');
       else if (char == "A" || char == "B" || char == "C" || char == "D" || char == "E" || char == "F" || char == "G" || char == "V" || char == "Z" || char == "W" || char == "Q" || char == "S" || char == "X" || char == "R" || char == "T") {//||char == '~'||char=="!"||char=="@"||char=="#"||char=="$"||char=='%'){
            document.getElementById(char.toLowerCase()).setAttribute('class', 'tee');
            document.getElementById('leftShift').removeAttribute('class');
            document.getElementById('rightShift').setAttribute('class','tee');
        }
        else if (char == "Y" || char == "U" || char == "I" || char == "J" || char == "O" || char == "P" || char == "L" || char == "K" || char == "H" || char == "N" || char == "M") {//|| char == ":" || char == ">" || char == "<" || char == '"'|| char=='|'||char=="{"||char =="}"||char=="?"||char=='+'||char=="^"||char=="&"||char=="*"||char=='('||char==")"||char=='_') {
            document.getElementById(char.toLowerCase()).setAttribute('class', 'tee');
            document.getElementById('rightShift').removeAttribute('class');
            document.getElementById('leftShift').setAttribute('class', 'tee');
        }
        else if(char==',')
        {
            document.getElementById('comma').setAttribute('class','tee');
        }
        else if (char == "<") {
            document.getElementById('comma').setAttribute('class', 'tee');
        }
        else if(char=='.')
        {
        document.getElementById('dot').setAttribute('class', 'tee');
        }
        else if(char==">")
        {
            document.getElementById('dot').setAttribute('class','tee');
        }
        else if (char == "") {
            document.getElementById('').setAttribute('class', 'tee');
        }
        // else
        // {
        //     document.getElementById(char.toLowerCase()).setAttribute('class', 'tee');
        // //     document.getElementById('rightShift').removeAttribute('class');
        // //     document.getElementById('leftShift').removeAttribute('class');
        // }
        // document.getElementById(char.toLowerCase()).setAttribute('class', 'tee');
    // }

    if(lastchar)
    {
        if (lastchar == '1' || lastchar == '2' || lastchar == '3' || lastchar == '4' || lastchar == '5' || lastchar == '6' || lastchar == '7' || lastchar == '8' || lastchar == '9' || lastchar == '0') {
            document.getElementById("num" + lastchar).removeAttribute('class');
        }
        else if (lastchar == "A" || lastchar == "B" || lastchar == "C" || lastchar == "D" || lastchar == "E" || lastchar == "F" || lastchar == "G" || lastchar == "V" || lastchar == "Z" || lastchar == "W" || lastchar == "Q" || lastchar == "S" || lastchar == "X" || lastchar == "R" || lastchar == "T" || lastchar == '~' || lastchar == "!" || lastchar == "@" || lastchar == "#" || lastchar == "$" || lastchar == '%') {
            if(char==lastchar)
            {
                // document.getElementById(char.toLowerCase()).setAttribute('class', 'tee');
                document.getElementById('leftShift').removeAttribute('class');
                document.getElementById('rightShift').setAttribute('class', 'tee');
            }
            else
            {
                // document.getElementById(lastchar.toLowerCase()).removeAttribute('class');
                document.getElementById('leftShift').removeAttribute('class');
                document.getElementById('rightShift').removeAttribute('class');
            }
            // document.getElementById('leftShift').removeAttribute('class');
            // document.getElementById('rightShift').setAttribute('class', 'tee');
        }
        else if (lastchar == "Y" || lastchar == "U" || lastchar == "I" || lastchar == "J" || lastchar == "O" || lastchar == "P" || lastchar == "L" || lastchar == "K" || lastchar == "H" || lastchar == "N" || lastchar == "M" || lastchar == ":" || lastchar == ">" || lastchar == "<" || lastchar == '"' || lastchar == '|' || lastchar == "{" || lastchar == "}" || lastchar == "?" || lastchar == '+' || lastchar == "^" || lastchar == "&" || lastchar == "*" || lastchar == '(' || lastchar == ")" || lastchar == '_') {
            if (char==lastchar) {
                // document.getElementById(char.toLowerCase()).setAttribute('class', 'tee');
                document.getElementById('leftShift').setAttribute('class','tee');
                document.getElementById('rightShift').removeAttribute('class');
            }
            else {
                // document.getElementById(lastchar.toLowerCase()).removeAttribute('class');
                document.getElementById('leftShift').removeAttribute('class');
                document.getElementById('rightShift').removeAttribute('class');
            }
        }
        else if(lastchar==",")
        {
            document.getElementById('comma').removeAttribute('class');
        }
        else {
            document.getElementById(lastchar.toLowerCase()).removeAttribute('class'); 
        }
    }
    lastchar=char;
}
var last="";
function ButtonColor(char)
{
    // console.log(char);
    // console.log(char, last);
    switch (char) {
        case 'A':
            document.getElementById(char.toLowerCase()).setAttribute('class','tee');
            // document.getElementById('leftShift').removeAttribute('class');
            document.getElementById('rightShift').setAttribute('class', 'tee');
            break;
        case 'S':
            document.getElementById(char.toLowerCase()).setAttribute('class', 'tee');
            // document.getElementById('leftShift').removeAttribute('class');
            document.getElementById('rightShift').setAttribute('class', 'tee');
            break;
        case 'D':
            document.getElementById(char.toLowerCase()).setAttribute('class', 'tee');
            // document.getElementById('leftShift').removeAttribute('class');
            document.getElementById('rightShift').setAttribute('class', 'tee');
            break;
        case 'F':
            document.getElementById(char.toLowerCase()).setAttribute('class', 'tee');
            // document.getElementById('leftShift').removeAttribute('class');
            document.getElementById('rightShift').setAttribute('class', 'tee');
            break;
        case 'G':
            document.getElementById(char.toLowerCase()).setAttribute('class', 'tee');
            // document.getElementById('leftShift').removeAttribute('class');
            document.getElementById('rightShift').setAttribute('class', 'tee');
            break;
        case 'T':
            document.getElementById(char.toLowerCase()).setAttribute('class', 'tee');
            // document.getElementById('leftShift').removeAttribute('class');
            document.getElementById('rightShift').setAttribute('class', 'tee');
            break;
        case 'R':
            document.getElementById(char.toLowerCase()).setAttribute('class', 'tee');
            // document.getElementById('leftShift').removeAttribute('class');
            document.getElementById('rightShift').setAttribute('class', 'tee');
            break;
        case 'E':
            document.getElementById(char.toLowerCase()).setAttribute('class', 'tee');
            // document.getElementById('leftShift').removeAttribute('class');
            document.getElementById('rightShift').setAttribute('class', 'tee');
            break;
        case 'W':
            document.getElementById(char.toLowerCase()).setAttribute('class', 'tee');
            // /document.getElementById('leftShift').removeAttribute('class');
            document.getElementById('rightShift').setAttribute('class', 'tee');
            break;
        case 'Q':
            document.getElementById(char.toLowerCase()).setAttribute('class', 'tee');
            // document.getElementById('leftShift').removeAttribute('class');
            document.getElementById('rightShift').setAttribute('class', 'tee');
            break;
        case 'Z':
            document.getElementById(char.toLowerCase()).setAttribute('class', 'tee');
            // document.getElementById('leftShift').removeAttribute('class');
            document.getElementById('rightShift').setAttribute('class', 'tee');
            break;
        case 'X':
            document.getElementById(char.toLowerCase()).setAttribute('class', 'tee');
            // document.getElementById('leftShift').removeAttribute('class');
            document.getElementById('rightShift').setAttribute('class', 'tee');
            break;
        case 'C':
            document.getElementById(char.toLowerCase()).setAttribute('class', 'tee');
            // document.getElementById('leftShift').removeAttribute('class');
            document.getElementById('rightShift').setAttribute('class', 'tee');
            break;
        case 'V':
            document.getElementById(char.toLowerCase()).setAttribute('class', 'tee');
            // document.getElementById('leftShift').removeAttribute('class');
            document.getElementById('rightShift').setAttribute('class', 'tee');
            break;
        case 'B':
            document.getElementById('rightShift').setAttribute('class', 'tee');
            document.getElementById(char.toLowerCase()).setAttribute('class', 'tee');
            // document.getElementById('leftShift').removeAttribute('class');
            // document.getElementById('rightShift').setAttribute('class', 'tee');
            break;
        case '%':
            document.getElementById('num5').setAttribute('class', 'tee');
            // document.getElementById('leftShift').removeAttribute('class');
            document.getElementById('rightShift').setAttribute('class', 'tee');
            break;
        case '5':
            document.getElementById('num5').setAttribute('class', 'tee')
            break;
        case '$':
            document.getElementById('num4').setAttribute('class', 'tee');
            // document.getElementById('leftShift').removeAttribute('class');
            document.getElementById('rightShift').setAttribute('class', 'tee');
            break;
        case '4':
            document.getElementById('num4').setAttribute('class', 'tee')
            break;
        case '#':
            document.getElementById("num3").setAttribute('class', 'tee');
            // document.getElementById('leftShift').removeAttribute('class');
            document.getElementById('rightShift').setAttribute('class', 'tee');
            break;
        case '3':
            document.getElementById('num3').setAttribute('class', 'tee')
            break;
        case '@':
            document.getElementById("num2").setAttribute('class', 'tee');
            // document.getElementById('leftShift').removeAttribute('class');
            document.getElementById('rightShift').setAttribute('class', 'tee');
            break;
        case '2':
            document.getElementById('num2').setAttribute('class', 'tee')
            break;
        case '!':
            document.getElementById('num1').setAttribute('class', 'tee');
            // document.getElementById('leftShift').removeAttribute('class');
            document.getElementById('rightShift').setAttribute('class', 'tee');
            break;
        case '1':
            document.getElementById('num1').setAttribute('class', 'tee')
            break;
        case '~':
            document.getElementById('band').setAttribute('class', 'tee');
            // document.getElementById('leftShift').removeAttribute('class');
            document.getElementById('rightShift').setAttribute('class', 'tee');
            break;
        case '`':
            document.getElementById('band').setAttribute('class', 'tee')
            break;
        case 'H':
            document.getElementById(char.toLowerCase()).setAttribute('class', 'tee');
            // document.getElementById('rightShift').removeAttribute('class');
            document.getElementById('leftShift').setAttribute('class', 'tee');
            break;
        case 'J':
            document.getElementById(char.toLowerCase()).setAttribute('class', 'tee');
            // document.getElementById('rightShift').removeAttribute('class');
            document.getElementById('leftShift').setAttribute('class', 'tee');
            break;
        case 'K':
            document.getElementById(char.toLowerCase()).setAttribute('class', 'tee');
            // document.getElementById('rightShift').removeAttribute('class');
            document.getElementById('leftShift').setAttribute('class', 'tee');
            break;
        case 'L':
            document.getElementById(char.toLowerCase()).setAttribute('class', 'tee');
            // document.getElementById('rightShift').removeAttribute('class');
            document.getElementById('leftShift').setAttribute('class', 'tee');
            break;
        case ':':
            document.getElementById('colon').setAttribute('class', 'tee');
            // document.getElementById('rightShift').removeAttribute('class');
            document.getElementById('leftShift').setAttribute('class', 'tee');
            break;
        case ';':
            document.getElementById('colon').setAttribute('class', 'tee')
            break;
        case '"':
            document.getElementById('singlequate').setAttribute('class', 'tee');
            // document.getElementById('rightShift').removeAttribute('class');
            document.getElementById('leftShift').setAttribute('class', 'tee');
            break;
        case "'":
            document.getElementById('singlequate').setAttribute('class', 'tee')
            break;
        case 'Y':
            document.getElementById(char.toLowerCase()).setAttribute('class', 'tee');
            // document.getElementById('rightShift').removeAttribute('class');
            document.getElementById('leftShift').setAttribute('class', 'tee');
            break;
        case 'U':
            document.getElementById(char.toLowerCase()).setAttribute('class', 'tee');
            // document.getElementById('rightShift').removeAttribute('class');
            document.getElementById('leftShift').setAttribute('class', 'tee');
            break;
        case 'I':
            document.getElementById(char.toLowerCase()).setAttribute('class', 'tee');
            // document.getElementById('rightShift').removeAttribute('class');
            document.getElementById('leftShift').setAttribute('class', 'tee');
            break;
        case 'O':
            document.getElementById(char.toLowerCase()).setAttribute('class', 'tee');
            // document.getElementById('rightShift').removeAttribute('class');
            document.getElementById('leftShift').setAttribute('class', 'tee');
            break;
        case 'P':
            document.getElementById(char.toLowerCase()).setAttribute('class', 'tee');
            // document.getElementById('rightShift').removeAttribute('class');
            document.getElementById('leftShift').setAttribute('class', 'tee');
            break;
        case '{':
            document.getElementById('opensquarebreaket').setAttribute('class', 'tee');
            // document.getElementById('rightShift').removeAttribute('class');
            document.getElementById('leftShift').setAttribute('class', 'tee');
            break;
        case '[':
            document.getElementById('opensquarebreaket').setAttribute('class', 'tee')
            break;
        case '}':
            document.getElementById('closesquarebreaket').setAttribute('class', 'tee');
            // document.getElementById('rightShift').removeAttribute('class');
            document.getElementById('leftShift').setAttribute('class', 'tee');
            break;
        case ']':
            document.getElementById('closesquarebreaket').setAttribute('class', 'tee')
            break;
        case '|':
            document.getElementById('backslash').setAttribute('class', 'tee');
            // document.getElementById('rightShift').removeAttribute('class');
            document.getElementById('leftShift').setAttribute('class', 'tee');
            break;
        case '\"':
            document.getElementById('backslash').setAttribute('class', 'tee')
            break;
        case 'N':
            document.getElementById(char.toLowerCase()).setAttribute('class', 'tee');
            // document.getElementById('rightShift').removeAttribute('class');
            document.getElementById('leftShift').setAttribute('class', 'tee');
            break;
        case 'M':
            document.getElementById(char.toLowerCase()).setAttribute('class', 'tee');
            // document.getElementById('rightShift').removeAttribute('class');
            document.getElementById('leftShift').setAttribute('class', 'tee');
            break;
        case '<':
            document.getElementById('comma').setAttribute('class', 'tee');
            // document.getElementById('rightShift').removeAttribute('class');
            document.getElementById('leftShift').setAttribute('class', 'tee');
            break;
        case ',':
            document.getElementById('comma').setAttribute('class', 'tee')
            break;
        case '>':
            document.getElementById('dot').setAttribute('class', 'tee');
            // document.getElementById('rightShift').removeAttribute('class');
            document.getElementById('leftShift').setAttribute('class', 'tee');
            break;
        case '.':
            document.getElementById('dot').setAttribute('class', 'tee')
            break;
        case '?':
            document.getElementById('forwordslash').setAttribute('class', 'tee');
            // document.getElementById('rightShift').removeAttribute('class');
            document.getElementById('leftShift').setAttribute('class', 'tee');
            break;
        case '/':
            document.getElementById('forwordslash').setAttribute('class', 'tee')
            break;
        case '+':
            document.getElementById('equal').setAttribute('class', 'tee');
            // document.getElementById('rightShift').removeAttribute('class');
            document.getElementById('leftShift').setAttribute('class', 'tee');
            break;
        case '=':
            document.getElementById('equal').setAttribute('class', 'tee')
            break;
        case '_':
            document.getElementById("minus").setAttribute('class', 'tee');
            // document.getElementById('rightShift').removeAttribute('class');
            document.getElementById('leftShift').setAttribute('class', 'tee');
            break;
        case '-':
            document.getElementById('minus').setAttribute('class', 'tee')
            break;
        case ')':
            document.getElementById('num0').setAttribute('class', 'tee');
            // document.getElementById('rightShift').removeAttribute('class');
            document.getElementById('leftShift').setAttribute('class', 'tee');
            break;
        case '0':
            document.getElementById('num0').setAttribute('class', 'tee')
            break;
        case '(':
            document.getElementById('num9').setAttribute('class', 'tee');
            // document.getElementById('rightShift').removeAttribute('class');
            document.getElementById('leftShift').setAttribute('class', 'tee');
            break;
        case '9':
            document.getElementById('num9').setAttribute('class', 'tee')
            break;
        case '*':
            document.getElementById("num8").setAttribute('class', 'tee');
            // document.getElementById('rightShift').removeAttribute('class');
            document.getElementById('leftShift').setAttribute('class', 'tee');
            break;
        case '8':
            document.getElementById('num8').setAttribute('class', 'tee')
            break;
        case '&':
            document.getElementById('num7').setAttribute('class', 'tee');
            // document.getElementById('rightShift').removeAttribute('class');
            document.getElementById('leftShift').setAttribute('class', 'tee');
            break;
        case '7':
            document.getElementById('num7').setAttribute('class', 'tee')
            break;
        case '^':
            document.getElementById("num6").setAttribute('class', 'tee');
            // document.getElementById('rightShift').removeAttribute('class');
            document.getElementById('leftShift').setAttribute('class', 'tee');
            break;
        case '6':
            document.getElementById('num6').setAttribute('class', 'tee')
            break;
        default:
            document.getElementById(char.toLowerCase()).setAttribute('class', 'tee');
            document.getElementById('rightShift').removeAttribute('class');
            document.getElementById('leftShift').removeAttribute('class');
            break;
    } 
    if(last)
    { 
        switch (last) {
        case 'A':
            document.getElementById(last.toLowerCase()).removeAttribute('class');
            document.getElementById('leftShift').removeAttribute('class');
            // document.getElementById('rightShift').removeAttribute('class');
            break;
        case 'S':
            document.getElementById(last.toLowerCase()).removeAttribute('class');
            document.getElementById('leftShift').removeAttribute('class');
            // document.getElementById('rightShift').removeAttribute('class');
            break;
        case 'D':
            document.getElementById(last.toLowerCase()).removeAttribute('class');
            document.getElementById('leftShift').removeAttribute('class');
            // document.getElementById('rightShift').removeAttribute('class');
            break;
        case 'F':
            document.getElementById(last.toLowerCase()).removeAttribute('class');
            document.getElementById('leftShift').removeAttribute('class');
            // document.getElementById('rightShift').removeAttribute('class');
            break;
        case 'G':
            document.getElementById(last.toLowerCase()).removeAttribute('class');
            document.getElementById('leftShift').removeAttribute('class');
            // document.getElementById('rightShift').removeAttribute('class');
            break;
        case 'T':
            document.getElementById(last.toLowerCase()).removeAttribute('class');
            document.getElementById('leftShift').removeAttribute('class');
            // document.getElementById('rightShift').removeAttribute('class');
            break;
        case 'R':
            document.getElementById(last.toLowerCase()).removeAttribute('class');
            document.getElementById('leftShift').removeAttribute('class');
            // document.getElementById('rightShift').removeAttribute('class');
            break;
        case 'E':
            document.getElementById(last.toLowerCase()).removeAttribute('class');
            document.getElementById('leftShift').removeAttribute('class');
            // document.getElementById('rightShift').removeAttribute('class');
            break;
        case 'W':
            document.getElementById(last.toLowerCase()).removeAttribute('class');
            document.getElementById('leftShift').removeAttribute('class');
            // document.getElementById('rightShift').removeAttribute('class');
            break;
        case 'Q':
            document.getElementById(last.toLowerCase()).removeAttribute('class');
            document.getElementById('leftShift').removeAttribute('class');
            // document.getElementById('rightShift').removeAttribute('class');
            break;
        case 'Z':
            document.getElementById(last.toLowerCase()).removeAttribute('class');
            document.getElementById('leftShift').removeAttribute('class');
            // document.getElementById('rightShift').removeAttribute('class');
            break;
        case 'X':
            document.getElementById(last.toLowerCase()).removeAttribute('class');
            document.getElementById('leftShift').removeAttribute('class');
            // document.getElementById('rightShift').removeAttribute('class');
            break;
        case 'C':
            document.getElementById(last.toLowerCase()).removeAttribute('class');
            document.getElementById('leftShift').removeAttribute('class');
            // document.getElementById('rightShift').removeAttribute('class');
            break;
        case 'V':
            document.getElementById(last.toLowerCase()).removeAttribute('class');
            document.getElementById('leftShift').removeAttribute('class');
            // document.getElementById('rightShift').removeAttribute('class');
            break;
        case 'B':
            document.getElementById(last.toLowerCase()).removeAttribute('class');
            document.getElementById('leftShift').removeAttribute('class');
            // document.getElementById('rightShift').removeAttribute('class');
            break;
        case '%':
            document.getElementById('num5').removeAttribute('class');
            document.getElementById('leftShift').removeAttribute('class');
            // document.getElementById('rightShift').removeAttribute('class');
            break;
            case '5':
                document.getElementById('num5').removeAttribute('class');
                break;
        case '$':
            document.getElementById('num4').removeAttribute('class');
            document.getElementById('leftShift').removeAttribute('class');
            // document.getElementById('rightShift').removeAttribute('class');
            break;
            case '4':
                document.getElementById('num4').removeAttribute('class');
                break;
        case '#':
            document.getElementById("num3").removeAttribute('class');
            document.getElementById('leftShift').removeAttribute('class');
            // document.getElementById('rightShift').removeAttribute('class');
            break;
            case '3':
                document.getElementById('num3').removeAttribute('class');
                break;
        case '@':
            document.getElementById("num2").removeAttribute('class');
            document.getElementById('leftShift').removeAttribute('class');
            // document.getElementById('rightShift').removeAttribute('class');
            break;
            case '2':
                document.getElementById('num2').removeAttribute('class');
                break;
        case '!':
            document.getElementById('num1').removeAttribute('class');
            document.getElementById('leftShift').removeAttribute('class');
            // document.getElementById('rightShift').removeAttribute('class');
            break;
            case '1':
                document.getElementById('num1').removeAttribute('class');
                break;
        case '~':
            document.getElementById('band').removeAttribute('class');
            document.getElementById('leftShift').removeAttribute('class');
            // document.getElementById('rightShift').removeAttribute('class');
            break;
            case '`':
                document.getElementById('band').removeAttribute('class');
                break;
        case 'H':
            document.getElementById(last.toLowerCase()).removeAttribute('class');
            document.getElementById('rightShift').removeAttribute('class');
            // document.getElementById('leftShift').removeAttribute('class');
            break;
        case 'J':
            document.getElementById(last.toLowerCase()).removeAttribute('class');
            document.getElementById('rightShift').removeAttribute('class');
            // document.getElementById('leftShift').removeAttribute('class');
            break;
        case 'K':
            document.getElementById(last.toLowerCase()).removeAttribute('class');
            document.getElementById('rightShift').removeAttribute('class');
            // document.getElementById('leftShift').removeAttribute('class');
            break;
        case 'L':
            document.getElementById(last.toLowerCase()).removeAttribute('class');
            document.getElementById('rightShift').removeAttribute('class');
            // document.getElementById('leftShift').removeAttribute('class');
            break;
        case ':':
            document.getElementById('colon').removeAttribute('class');
            document.getElementById('rightShift').removeAttribute('class');
            // document.getElementById('leftShift').removeAttribute('class');
            break;
            case ';':
                document.getElementById('colon').removeAttribute('class');
                break;
        case '"':
            document.getElementById('singlequate').removeAttribute('class');
            document.getElementById('rightShift').removeAttribute('class');
            // document.getElementById('leftShift').removeAttribute('class');
            break;
            case "'":
                document.getElementById('singlequate').removeAttribute('class');
                break;
        case 'Y':
            document.getElementById(last.toLowerCase()).removeAttribute('class');
            document.getElementById('rightShift').removeAttribute('class');
            // document.getElementById('leftShift').removeAttribute('class');
            break;
        case 'U':
            document.getElementById(last.toLowerCase()).removeAttribute('class');
            document.getElementById('rightShift').removeAttribute('class');
            // document.getElementById('leftShift').removeAttribute('class');
            break;
        case 'I':
            document.getElementById(last.toLowerCase()).removeAttribute('class');
            document.getElementById('rightShift').removeAttribute('class');
            // document.getElementById('leftShift').removeAttribute('class');
            break;
        case 'O':
            document.getElementById(last.toLowerCase()).removeAttribute('class');
            document.getElementById('rightShift').removeAttribute('class');
            // document.getElementById('leftShift').removeAttribute('class');
            break;
        case 'P':
            document.getElementById(last.toLowerCase()).removeAttribute('class');
            document.getElementById('rightShift').removeAttribute('class');
            // document.getElementById('leftShift').removeAttribute('class');
            break;
        case '{':
            document.getElementById('opensquarebreaket').removeAttribute('class');
            document.getElementById('rightShift').removeAttribute('class');
            // document.getElementById('leftShift').removeAttribute('class');
            break;
            case '[':
                document.getElementById('opensquarebreaket').removeAttribute('class');
                break;
        case '}':
            document.getElementById('closesquarebreaket').removeAttribute('class');
            document.getElementById('rightShift').removeAttribute('class');
            // document.getElementById('leftShift').removeAttribute('class');
            break;
            case ']':
                document.getElementById('closesquarebreaket').removeAttribute('class');
                break;
        case '|':
            document.getElementById('backslash').removeAttribute('class');
            document.getElementById('rightShift').removeAttribute('class');
            // document.getElementById('leftShift').removeAttribute('class');
            break;
            case '\"':
                document.getElementById('backslash').removeAttribute('class');
                break;
        case 'N':
            document.getElementById(last.toLowerCase()).removeAttribute('class');
            document.getElementById('rightShift').removeAttribute('class');
            // document.getElementById('leftShift').removeAttribute('class');
            break;
        case 'M':
            document.getElementById(last.toLowerCase()).removeAttribute('class');
            document.getElementById('rightShift').removeAttribute('class');
            // document.getElementById('leftShift').removeAttribute('class');
            break;
        case '<':
            document.getElementById('comma').removeAttribute('class');
            document.getElementById('rightShift').removeAttribute('class');
            // document.getElementById('leftShift').removeAttribute('class');
            break;
            case ',':
                document.getElementById('comma').removeAttribute('class');
                break;
        case '>':
            document.getElementById('dot').removeAttribute('class');
            document.getElementById('rightShift').removeAttribute('class');
            // document.getElementById('leftShift').removeAttribute('class');
            break;
            case '.':
                document.getElementById('dot').removeAttribute('class');
                break;
        case '?':
            document.getElementById('forwordslash').removeAttribute('class');
            document.getElementById('rightShift').removeAttribute('class');
            // document.getElementById('leftShift').removeAttribute('class');
            break;
            case '/':
                document.getElementById('forwordslash').removeAttribute('class');
                break;
        case '+':
            document.getElementById('equal').removeAttribute('class');
            document.getElementById('rightShift').removeAttribute('class');
            // document.getElementById('leftShift').removeAttribute('class');
            break;
            case '=':
                document.getElementById('equal').removeAttribute('class');
                break;
        case '_':
            document.getElementById("minus").removeAttribute('class');
            document.getElementById('rightShift').removeAttribute('class');
            // document.getElementById('leftShift').removeAttribute('class');
            break;
            case '-':
                document.getElementById('minus').removeAttribute('class');
                break;
        case ')':
            document.getElementById('num0').removeAttribute('class');
            document.getElementById('rightShift').removeAttribute('class');
            // document.getElementById('leftShift').removeAttribute('class');
            break;
            case '0':
                document.getElementById('num0').removeAttribute('class');
                break;
        case '(':
            document.getElementById('num9').removeAttribute('class');
            document.getElementById('rightShift').removeAttribute('class');
            // document.getElementById('leftShift').removeAttribute('class');
            break;
            case '9':
                document.getElementById('num9').removeAttribute('class');
                break;
        case '*':
            document.getElementById("num8").removeAttribute('class');
            document.getElementById('rightShift').removeAttribute('class');
            // document.getElementById('leftShift').removeAttribute('class');
            break;
            case '8':
                document.getElementById('num8').removeAttribute('class');
                break;
        case '&':
            document.getElementById('num7').removeAttribute('class');
            document.getElementById('rightShift').removeAttribute('class');
            // document.getElementById('leftShift').removeAttribute('class');
            break;
        case '7':
            document.getElementById('num7').removeAttribute('class');
            break;
        case '^':
            document.getElementById("num6").removeAttribute('class');
            document.getElementById('rightShift').removeAttribute('class');
            // document.getElementById('leftShift').removeAttribute('class');
            break;
        case '6':
            document.getElementById('num6').removeAttribute('class');
            break;
        default:
            document.getElementById(last.toLowerCase()).removeAttribute('class');
            // document.getElementById('rightShift').removeAttribute('class');
            // document.getElementById('leftShift').removeAttribute('class');
            break;
        }
    }
    last=char;
    // console.log(char,last);
}
ButtonColor(st[0]);
// buttonstyle(st[0]);
// ***********************************************************************************
// function nonne(num,ch)
// {
//     document.getElementById(num).removeAttribute('class');
//     document.getElementById(ch).removeAttribute('class');
// }
/////////////////////////////////////////////////////////////////////////////////////..
var first=0;
var topp=0;
var check=0;
var a=0;
id=0;
var keyCount=0;
var wpm;
var secondCount=0;
function start()
{
    var grossSpeed=0;
    setInterval(()=>{
        // keyCount=id;
        secondCount++;
        wpm=Math.floor(id/(secondCount/60));
        grossSpeed=Math.floor((right+wrong)/5);///secondCount);
         document.getElementById('wpm').innerHTML="total key:"+right+wrong+"<br>speed:"+Math.floor(right/(secondCount/60));
        // document.getElementById('wpm').innerHTML="Net Speed:"+Math.floor((right-wrong)/secondCount)+":<br>Wpm";
    },1000)
}
start();
var sec=0;
function secondCounting(){
    setInterval(()=>{sec++},1000);
}
// start(id);
var vari=0;
var scrolVar;
var childCount=0;
var codown=1;
// if(vari<idname.length)
// {
//     var scrolVar = document.getElementById(idname[vari]);
// }
// var scrolVar=document.getElementById(idname[vari]);
document.addEventListener('keypress',event=>{
    const kkey=event.key;
    secondCounting();
    if (id<st.length) {
        change(id + 1);
        // buttonstyle(st[id + 1]);
        ButtonColor(st[id+1]);
        CharColor(kkey, id);
        if (first < idname.length) {
            var vv = idname[first];
        }
        var text = document.getElementById(vv).innerText;
        if (vari < idname.length) {
            scrolVar = document.getElementById(idname[vari]);
            childCount=scrolVar.childElementCount;
            console.log(childCount);
        }
        if(codown==childCount)
        {
            scrol(topp);
            topp+=1.5;
            vari++;
            codown=1;
        }
        else
        {
            codown++;
        }
        // if(id==10&&sec==5)
        // {
        //     start(id);
        // }
        id++;
    }
    // else
    // {
    //     nonne(id,st[st.length]);
    // }
    // check++;
    // id++;
})
// switch (lastchar) {
        //     case ',':
        //         document.getElementById('comma').removeAttribute('class');
        //         break;
        //     case ';':
        //         document.getElementById('semicolon').removeAttribute('class');
        //         break;
        //     case '.':
        //         document.getElementById('dot').removeAttribute('class');
        //         break;
        //     case '/':
        //         document.getElementById('forwordslash').removeAttribute('class');
        //         break;
        //     case "\'":
        //         document.getElementById('backwordslash').removeAttribute('class');
        //         break;
        //     case '-':
        //         document.getElementById('minus').removeAttribute('class');
        //         break;
        //     case ']':
        //         document.getElementById('closesquarebreaket').removeAttribute('class');
        //         break;
        //     case '[':
        //         document.getElementById('opensquarebreaket').removeAttribute('class');
        //         break;
        //     case "'":
        //         document.getElementById('singlequate').removeAttribute('class');
        //         break;
        //     case '`':
        //         document.getElementById('band').removeAttribute('class');
        //         break;
        //     default:
        //         document.getElementById(char.toLowerCase()).removeAttribute('class');
        //         break;
        // }