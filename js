// var num =[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100,]
// for (var i = 0;i<num.length;i++){
//     if(num[i]!= (i+1)){}
//         console.log(i,' not founds');
// }
// }

// var domManipulation = document.childNodes[1].childNodes[2].childNodes[5].childNodes[5] ;

// console.log(domManipulation.innerHTML);

// var heading = document.createElement('h1');
// var headingText = document.createTextNode("HELLO WORLD");
// heading.appendChild(headingText)
// document.body.appendChild(heading)

// var heading = document.createElement('ul');
// var li_1 = document.createElement('li')
// var li_2 = document.createElement('li')
// var li_3 = document.createElement('li')

// var list_1 = document.createTextNode("Java")
// var list_2 = document.createTextNode("Dart")
// var list_3 = document.createTextNode("Python")

// li_1.appendChild(list_1);
// li_2.appendChild(list_2);
// li_3.appendChild(list_3);

// heading.appendChild(li_1);
// heading.appendChild(li_2);
// heading.appendChild(li_3);
// document.body.appendChild(heading)

// function show(){
//     var heading = document.createElement('h1')
//     var heading_text = document.createTextNode("Hello world");
//     heading.appendChild(heading_text);
//     var div = document.getElementById('div');
//     div.appendChild(heading)
// }

// function hide(){
//     var div = document.getElementById('div');
//     div.innerHTML = ''
// }


var hours = 00;
var minutes = 00;
var second = 00;
var millisecond = 00;

var Interval;

var hr = document.getElementById('hrs')
var min = document.getElementById('min')
var sec = document.getElementById('sec')
var msec = document.getElementById('msec')


function timer() {
    millisecond++
    msec.innerHTML = millisecond
    if (millisecond >= 99) {
        second++
        sec.innerHTML = second < 10 ? second.innerHTML = '0' + second : second;
        millisecond = 00;
    }
    else if (second >= 60) {
        minutes++
        min.innerHTML = minutes < 10 ? min.innerHTML = '0' + minutes : minutes;
        second = 00;
    }
    else if (minutes >= 60) {
        hours++
        hr.innerHTML = hours < 10 ? hr.innerHTML = '0' + hours : hours;
        minutes = 00;
    }
}
function start() {
    Interval = setInterval(timer, 10)
    document.getElementById('start').style.visibility = 'hidden'
}
function pause() {
    clearInterval(Interval)
}
function reset() {
    hours = '00';
    minutes = '00';
    second = '00';
    millisecond = '00';

    hr.innerHTML = hours
    min.innerHTML = minutes
    sec.innerHTML = second
    msec.innerHTML = millisecond
}



