//         0 1  2  3  4 5    6        7
/*var mas = [5,9,73,699,2,4,"Привет", "Салом"];
var abc = 5;
//console.log(mas[2]);
var mas2 = {'Коля':'1000', 'Вася':'500', 'Петя':'200'};
var mas3 = {
	'ru':['голубой', 'красный', 'зеленый','yellow'],
	'en':['blue', 'red', 'green'],
};
//          0 1  2  3  4            5               6 ////
var mas4 = [5,9,73,699,2,[232,35,"6r",64,5445,['A','F'],5,34],4,"Привет", "Салом"];
a = 5; b = -9; c = true;
if (a > 6 || b < 0  || c == false)
{
    //console.log(mas3);
}
else {
   // console.log(false);
}
min = prompt('Enter nnumber: ');


if(min >= 0 && min <= 14){ console.log("Первая четверт часа")}
else if(min >= 15 && min <= 29){ console.log("Вторая четверт часа")}
else if(min >= 30 && min <= 44){ console.log("Третья четверт часа")}
else if(min >= 45 && min <= 59){ console.log("Четвертая четверт часа")}
else {
    document.write("Ошибка ввода")
}
a = 5
b= 1
// Если переменная a больше 2-х и меньше 11-ти, или переменная b 
//больше или равна 6-ти и меньше 14-ти, то выведите 'Верно',
 //в противном случае выведите 'Неверно'.
if((2>a<11) || (b >= 6 && b < 14) ){
    console.log('Верно')
}
else {
    console.log('Неверно');
}

a = 0
var mas = [5,9,73,699,2,4,"Привет", "Салом",34,45,45,46,56];

for(var i = 0; i < mas.length;i++)
{

    document.write(mas[i] + "<br>");
    a++;
}
document.write("<b>"+ i+5 +"</b>")


var mas = {
	'ru':['голубой', 'красный', 'зеленый'],
	'en':['blue', 'red', 'green'],
};

for(var key in mas){
    document.write(key + '- это ' + mas[key] + '. ');
}

b = 0;
a = prompt('dsdfsd');
for(var i= 1; i <= a; i++ ){
    if (i % 5 == 0){
        b++;
    }

}
document.write(b + ' - стольката!<br>')

function FirstFunc(a){
   if (a % 2 == 0)
   {
    return a + ' - это число четное!'
   }
   else{
    return 'Error'
   }
   alert(33)
}


function SecFunc(a){
    for (var i= 0; i < a.length;i++ ){

    }
    return i
 }

 function ThFunc(a,b,c = 6){
    return a + b +c;
 }
document.write(ThFunc(7));
*/
//          0       1     2     3
//          
var a = [[1,6,9],[6,2,5],5,[9,4,1]]
var sum  =0;
for(var i=0 ; i <  a.length; i++ ){
   // document.write('[' +a[i] + '] <br>')
   if (a[i].length == 'undefined')
   {
    sum = sum + a[i]
   }
    for(var j=0; j <  a[i].length; j++){
       // document.write(a[i][j]);
    //sum = sum + a[i][j];
    
    }

}

document.write(sum)