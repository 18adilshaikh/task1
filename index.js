function clearError()
{
    error= document.getElementsByClassName("formerror");
    for(let item of errors)
    {
        item.innerHTML ="";
    }
}
function seterror(id,error)
{
    Element = document.getElementById(id);
    Element.getElementsByClassName("formerror")[0].innerHTML= error;
}
function validationForm()
{
    var returnval=true;
    var name=document.forms["myForm"]["fname"].value;
    
    if(name.length <=4)
    {
        seterror("name","Length of name is to short!");
        returnval = false;
    }

    var email=document.forms["myForm"]["femail"].value;
    if(email.length >20)
    {
        seterror("Email","Length of email is to long!");
        returnval=false;
    }

    var email=document.forms["myForm"]["femail"].value;
    if(email.length >20)
    {
        seterror("Email","Length of email is to long!");
        returnval=false;
    }

    var password=document.forms["myForm"]["fpass"].value;
    if(pass.length <=8)
    {
        seterror("pass","Length of password should be greater than 8 digit!");
        returnval=false;
    }

    var cpassword=document.forms["myForm"]["fcpass"].value;
    if(cpassword.length !=password)
    {
        seterror("cpass","Password and ConfirmPassword should be same!");
        returnval=false;
    }
    
    return returnval;
}