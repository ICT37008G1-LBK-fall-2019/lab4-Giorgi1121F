
function studentebis_raodenoba()
{   
    var masivi1 = [];
    var shedegi ='';
    var  raodenoba = prompt('სტუდენტების რაოდენობა');
    for(var i=raodenoba;i>=1;i--)
    {
     masivi1[i] = prompt('სტუდენტის სახელი და გვარი');
     
    }  

 
 for(var j=1;j<=raodenoba;j++)
 {
     shedegi += "ID = " + j +", name :'" + masivi1[j] + "'\n" ;
 }
 alert(shedegi);

}
studentebis_raodenoba();