var myName = "Iskandar";
var myAge = 14;
var hasCar = false;
var greeting = "Hello " + myName;
var greeting2 = `Hello ${myName}`;
console.log(greeting2);

document.getElementById("heading").innerHTML = greeting;

console.log(myName);
console.log(greeting);
console.log("Hello World");

var text = 'it\'s \\ alright \n "alright"'; //n = <br>
console.log(text);

var a = 3;
var b = 4;

var c = a + b;
console.log(c);

var d = b - a;
console.log(d);

var e = a * b;
console.log(e);

var f = b / a;
console.log(f);

var g = b % a;
console.log(g);

var h = b ** a;
console.log(h);
console.log(a);

console.log(a + b * c);

console.log((a + b) ** 2);

console.log((a ** 2 + b ** 2) ** (1 / 2));

console.log((h / 100) * 18);

var i = 5600;
var percent = 34;

console.log((i / 100) * percent);

z = 5;

z = z + 1;
z += 1;
z++;
console.log(z);

var mass = 66;
var height = 1.67;

var bmi = mass / height ** 2;

console.log(mass / height ** 2);

console.log(bmi);

// circle
var pi = 3.14;
var r = 5;
var area = pi * r ** 2;
console.log(area);

var circle = 2 * pi * r;
console.log(circle);

// rectangle
var l = 5;
var w = 2;
var areaOfRectangle = 2 * 5;
console.log(areaOfRectangle);

// first triangle
var b = 10;
var h = 5;
var areaOfTriangle = 0.5 * 10 * 5;
console.log(areaOfTriangle);

// cube
var l = 10;
var w = 5;
var h = 7;
var areaOfCube = l * w * h;
console.log(areaOfCube);

// cylander
var pi = 3.14;
var r = 2;
var h = 2;
var areaOfCylander = pi * r ** 2 * h;
console.log(areaOfCylander);

// right angle
var a = 7;
var b = 5;
var c = 7 ** 2 + 5 ** 2;
console.log(c ** 0.5);

var Form = `
<b></b>
`;
// text
var girlsName = "Natalie";
var lastName = "Gorvorova";
var birthDay = 1982;
var placeOfBirth = "chelyabinsk";
var town = "Usninsk";
var republic = "Komi";
var address = "Flat 116, 19, Pionerskaya Street";
var phoneNumber = "41 - 5 - 81";
var rank = "pupil";
document.getElementById("text").innerHTML =
  girlsName +
  lastName +
  birthDay +
  town +
  republic +
  address +
  phoneNumber +
  rank;

var text = `My name is ${girlsName}. My surname is ${lastName}. I am 15. I was born in ${birthDay} in ${placeOfBirth}.
 I live in a small town of ${town} in the ${republic} Republic. My address is ${address}.
  My phone number is ${phoneNumber}. I am a ${rank}.`;
console.log(text);
document.getElementById('text').innerHTML=text;
