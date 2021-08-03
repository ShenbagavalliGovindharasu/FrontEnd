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
function contact()
{
        alert("Query send");
}
