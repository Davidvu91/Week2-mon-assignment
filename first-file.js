
// area of circle
function areaOfCircle() { 
console.log("area of the circle");
var pi = 3.14;
console.log(typeof pi);
var radius = 7;
console.log(typeof radius);
var area = pi * (radius**2);
console.log("the area of a circle given the radius" +radius +" (m) is " + area + "m2");
console.log(`the area of a circle given the radius ${radius}(m) is ${area}(m2)`);
}
// Operators & Comparison
function operationAndCompare() { 
console.log(
    10+24 ==34
)
console.log(
    "10" + "24" ==1024
)
console.log(
    "Hello" + " " + 2021
)
console.log(
    1 + 2 * 3 ==7
)
console.log(
    (1 + 3) ** 2 == 16
)
console.log(
    1 / 0
)
console.log(
    10+24 ==34
)
console.log(
    6 % 2 ==0
)
console.log(
    5.5 % 2 ==1.5
)
console.log(
    Number("123") ==123
)
console.log(
    typeof(1 + "")== "string"
)
console.log(
    true && true
)
console.log(
    true && false
)
console.log(
    true || true
)
console.log(
    false || true
)
console.log(
    !true
)
console.log(
    !false
)
console.log(
    false && (true || true)
)
console.log(
    false && true || true
)
}

// Conditionals
// var x = 10;

// if(x==0) {
//     console.log("this is zero")
// }else if(x>0) {
//     console.log("this is positive number");
// }else {
//     console.log("this is the nagative number");
// }

// var a = 200
// var b = 50
// var c =30
// if(a<b && b<c) {
//     console.log(` ${a} is smallest and ${c} is the biggest`)
// }else if(a<c && c<b) {
//     console.log(` ${a} is smallest and ${b} is the biggest`);
// }else if(b<a && a<c) {
//     console.log(` ${b} is smallest and ${c} is the biggest`);
// }else if(b<c && c<a) {
//     console.log(` ${b} is smallest and ${a} is the biggest`);
// }else if(c<a && a<b) {
//     console.log(` ${c} is smallest and ${b} is the biggest`);
// }else if(c<b && b<a) {
//     console.log(` ${c} is smallest and ${a} is the biggest`);
// }


// function findSmallesAndBiggest2(a, b, c) {
// 	var min = a;
//     var max = a;
// 	if (min > b) {
// 		min = b;
// 	}
// 	if (min > c) {
// 		min = c;
// 	}
// 	if (max < b) {
// 		max = b;
// 	}
// 	if (max < c) {
// 		max = c;
// 	}
// 	console.log(`${min} is the smallest number, and ${max} is the biggest number between ${a}, ${b}, ${c}`);
// }
// findSmallesAndBiggest2(3, 6,9)

// Loops
// var a =10
// var b =20
// if (a>b) {
//     for ( var i = a; i>=b; i--) {
//         console.log( i + " ");
//     }
// }else {
//     for (var i = a; i<=b; i++) {
//         console.log( i + " ");

//     }
// }

function getRangeInclusive(a, b) {
	var s = '';
	if (a > b) {
		for (var i = a; i >= b; i--) {
			// console.log(i);
			s = s + i + ' ';
		}
	} else {
		for (var i = a; i <= b; i++) {
			// console.log(i);
			s = s + i + ' ';
		}
	}
	console.log(s);
}
getRangeInclusive(2, 10)


function sumOfNumber(x,y) {
    var sum=0
    for (var i = x; i<=y; i++) {
        sum = sum+i;
    }
    console.log(sum);
}
sumOfNumber(1, 4);

var a;
var x;
var y=0;
a=1023;
for (var i = 1; i<=4; i++) {
    x = a%10;
    y = y+x;
    a=(a-x)/10;
}
console.log(y)










    







