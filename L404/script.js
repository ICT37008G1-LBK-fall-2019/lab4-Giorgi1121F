function sixshire(){
var masivi1 = [];
var shedegi = "";
   
    var  raodenoba = prompt('სტუდენტების რაოდენობა');
    for(var i=1;i<=raodenoba;i++)
    {
     masivi1[i] = prompt('სტუდენტის სახელი და გვარი');
     
    }  
    var striqoni =" ";
    
    for(var i = 0;i<raodenoba;i++)
    { striqoni+= masivi1[i];}
    alert(striqoni);
    var x=0;
    for(var i = 0;i<raodenoba;i++)
    {  k=masivi1[i]
      if (striqoni.indexOf(k)!=(-1))  striqoni.substring(k) && x++&& alert(striqoni);
      else  shedegi += masivi1[i] +":" +x;
    }
    
  alert(shedegi);
  ;
  }
     sixshire();