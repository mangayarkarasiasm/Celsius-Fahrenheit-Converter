function convertTemperature()
{
    let cel=document.getElementById("celsius").value;
    let res=document.getElementById("result");
    
    let fah=(cel * 9/5) + 32;
    fah=fah.toFixed(2);
    res.innerHTML="Fahrenheit: "+fah;
    
}