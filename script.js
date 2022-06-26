function compute()
{
    p = document.getElementById("principal").value;
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var interest = principal * years * rate /100;
    var year = new Date().getFullYear()+parseInt(years);
    if (principal<=0){
        document.getElementById("result").innerText="Please provide postive value"
    }else{
        document.getElementById("result").innerText="if you deposit "+principal+"\nat an interest rate of "+rate+"\nYou will receive an amount of "+interest+"\nin the year of "+year;
        }
    }
    
        
function updateRate(){
    var reteval= document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=reteval;
}

        
