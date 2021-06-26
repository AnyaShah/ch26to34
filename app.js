// Chapter 26 to 30

//////////////////////////

1
// var posInt= prompt("Enter a positive integer");
// document.write(Number(posInt));
// var round= Math.round(posInt);
// document.write("<br> Round off value: " + round);
// var floor= Math.floor(posInt);
// document.write("<br> Floor value: " + floor);
// var ceil = Math.ceil(posInt);
// document.write("<br> Ciel value: "+ ceil);


2
// var negativeFloat = prompt("Enter a negative floating point number:");
// document.write("Number: " + Number(negativeFloat));
// var round= Math.round(negativeFloat);
// document.write("<br> Round off value: " + round);
// var floor= Math.floor(negativeFloat);
// document.write("<br> Floor value: " + floor);
// var ceil = Math.ceil(negativeFloat);
// document.write("<br> Ciel value: "+ ceil);


3
// var num= -4;
// var abso= Math.abs(num);
// alert("The absolute value of " + num + " is " + abso)


4
// var num = Math.random();
// var improvedNum = (num * 6) + 1;
// var diceNum = Math.floor(improvedNum);
//document.write("Random dice value : "+diceNum);



5
// var num = Math.random();
// var improvedNum = (num * 2) + 1;
// var coinNum = Math.floor(improvedNum);
// if (coinNum === 2){
//   document.write(coinNum +"<br> random coin value: Heads")
// }
// else{
//   document.write(coinNum +"<br> random coin value: Tails")
// }



6
// var num =Math.random();
// var improvedNum = (num * 99) + 1;
// var finalNum = Math.floor(improvedNum);
// document.write("Random number between 1 and 100 : "+finalNum);



7
// var weight=prompt("Enter your weight in Kilogram: ");
// var convert =parseInt(weight);
// convert=parseFloat(convert)
// alert("The weight of user is "+ convert+ " kilograms");


8
// var num=Math.random();
// var improvedNum = (num * 10) + 1;
// var ranNum = Math.floor(improvedNum);
// var input =prompt("Enter a number between 1 and 10: ")
// input=parseInt(input);
// if( input === ranNum){
//   alert("Congratulation! You've guessed the right number")
// }
// else{
//   alert("Try again!")
// }




//...........................................................................................//





// Chapter 31 to 34

//////////////////////////

1
// var a= new Date()
// alert(a)


2
// var monthNames = ["January" , "February", "March", "April", "May", "June" , "July", "August", "September", "October", "November", "December"]
// var now = new Date();
// var currentMonth = now.getMonth();
// var namOfMonth = monthNames[currentMonth];
// alert("Current month: "+namOfMonth)


3
// var dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
// var now = new Date();
// var theDay = now.getDay();
// var nameOfToday = dayNames[theDay];
// alert("Today is " +nameOfToday)


4
// var dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
// var now = new Date();
// var theDay = now.getDay();
// var nameOfToday = dayNames[theDay];
// if (nameOfToday === "Sat" || "Sun"){
//     alert("It's Fun day")
// }
// else{
//     alert("Today is " + nameOfToday)
// }


5
// var date = new Date();
// var todayDate = date.getDate();
// if( todayDate < 16){
//     alert("First fifteen days of the month");
// }
// else{
//     alert("Last days of the month");
// }


6
// var date=new Date();
// var millsSince = date.getTime();
// var minSince = millsSince/ (1000*60*60);
// document.write("Current Date: "+ date +"<br> Elapsed milliseconds since January 1, 1970: "+ millsSince +"<br> Elapsed minutes since January 1, 1970: "+ minSince)



7
// var now = new Date();
// var theHours = now.getHours();
// if(theHours <= 12){
//     alert("It's AM");
// }
// else{
//     alert("It's PM");
// }


8
// var laterDate = new Date("Dec 31, 2020 00:00:00");
// document.write("Later Date : "+laterDate);

9
// var ramzanDate=new Date("April 25, 2020")
// var nowdate=new Date()
// var a=nowdate.getTime()-ramzanDate.getTime()
// var days=Math.floor(a/(1000*60*60*24))
// document.write(days+" day Passed Since 1st Ramadan 2020")

10
// var referDate = new Date("Dec 5, 2015");
// var today = new Date();
// var a = today.getTime() - referDate.getTime();
// var seconds= Math.floor(a/(1000*60))
// document.write("On reference date "+ referDate + ", <br>"+ seconds +" seconds had passed since beginning of 2015")


11
// var current= new Date();
// document.write("Current date: " + current)
// var d = new Date();
// d.setHours(d.getHours() - 1);
// document.write("<br> 1 hour ago it was "+d);

12
// var current= new Date();
// document.write("Current date: "+current);
// var d = new Date();
// d.setFullYear(d.getFullYear() - 100);
// document.write("<br> 100 years back, it was "+d);


13
// var age = prompt("How old are you?");
// var current = new Date();
// var year = current.getFullYear() - age
// document.write("Your age is " + age + "<br> Your birth year is " + year )


14
// var name = "ABC Customer";
// document.write("Customer Name: " + name) 
// var monthNames = ["January" , "February", "March", "April", "May", "June" , "July", "August", "September", "October", "November", "December"]
// var now = new Date();
// var currentMonth = now.getMonth();
// var namOfMonth = monthNames[currentMonth];
// document.write("<br>Current month: "+namOfMonth)
// var noOFUnit = 410;
// var chPerunit = 16;
// document.write("<br>Number of units: " + noOFUnit + "<br> Charge per unit: " + chPerunit)
// var netAmo = noOFUnit * chPerunit;
// // netAmo = netAmo.toFixed(2);
// document.write("<br> Net Amount Payable (with in Due Date): " + netAmo)
// var latePaySC = 350;
// var grossAmo = netAmo + latePaySC;
// // grossAmo = grossAmo.toFixed(2)
// document.write("<br>Late payment surcharge: " + latePaySC + " <br>Gross Amount Payable (after Due Date): " + grossAmo)

