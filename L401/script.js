function checkwhoislower(num1,num2,num3)
{
  num1 = prompt('პირველი რიცხვი');
  num2 = prompt('მეორე რიცხვი');
  num3 = prompt('მესამე რიცხვი');
  var min = 0
   num1= (num1);
   num2= parseInt(num2);
   num3= parseInt(num3);

   if  (num1>num2)
   { if(num2>num3) {alert (num3)}
   else {alert(num2)}
   }
 else {  if (num1>num3) {alert(num3)}
 else {alert(num1)}
 }


}
checkwhoislower();