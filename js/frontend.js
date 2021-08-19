function Email(inputText)
{
            var re = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
            let result=inputText.value.match(re);
            if(result)
         {
            alert("Valid email address!");
            
        
         }
            else
         {
            alert("You have entered an invalid email address!");
            
         }
}
function mail(username,password)
{
   var u1="admin";
   var p1="admin";
   let result1=username.value.match(u1);
   let result2=password.value.match(p1);
  if(result1)
   {  
      if(result2)
      {
      alert("Login Succesfully");
      // loggedin=true;
     // window.location("https://www.w3schools.com");
      //window.location.href = "https://www.tutorialrepublic.com/";
      window.open("home1.html")

       }
   }
   else{
      alert("invalid username or password");
   }
  
}
function contact()
{
        alert("Query send");
}
function created()
{
   alert("Created successfully.Further login");
}
