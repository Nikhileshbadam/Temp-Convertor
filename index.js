


document.getElementById("convert").addEventListener("click",function(){
    let celcius=document.getElementById("celcius-text").value;
    let faren=document.getElementById("faren-text").value;
    let kelvin=document.getElementById("kelvin-text").value;

    

    if(document.getElementById("celcius-text").value!="" && document.getElementById("faren-text").value!="" && document.getElementById("kelvin-text").value!=""){
        document.getElementById("visi").style.visibility="visible";
        document.getElementById("celcius-text").value="";
        document.getElementById("faren-text").value="";
        document.getElementById("kelvin-text").value="";
        
    }
    else if(document.getElementById("celcius-text").value!="" && document.getElementById("faren-text").value!=""){
        document.getElementById("visi").style.visibility="visible";
        document.getElementById("celcius-text").value="";
        document.getElementById("faren-text").value="";
        document.getElementById("kelvin-text").value="";
    }
    else if(document.getElementById("faren-text").value!="" && document.getElementById("kelvin-text").value!=""){
        document.getElementById("visi").style.visibility="visible";
        document.getElementById("celcius-text").value="";
        document.getElementById("faren-text").value="";
        document.getElementById("kelvin-text").value="";
    }

    else if(document.getElementById("celcius-text").value!="" && document.getElementById("kelvin-text").value!="" ){
        document.getElementById("visi").style.visibility="visible";
        document.getElementById("celcius-text").value="";
        document.getElementById("faren-text").value="";
        document.getElementById("kelvin-text").value="";
    }

    else{
    if(celcius!=""){
        let dummycelcius=Number(celcius);
        let dummyfaren=tofaren(dummycelcius);
        document.getElementById("faren-text").value=dummyfaren;
        document.getElementById("kelvin-text").value=dummycelcius+273.15;
        document.getElementById("visi").style.visibility="hidden";
        
    
    }
    if(faren!=""){
        let dummyfaren=Number(faren);
        dummycelcius=tocelcius(dummyfaren);
        document.getElementById("celcius-text").value=dummycelcius;
        document.getElementById("kelvin-text").value=dummycelcius+273.15;

        
        document.getElementById("visi").style.visibility="hidden";
    
    }
    if(kelvin!=""){
        let dummykelvin=Number(kelvin);
        dummycelcius=dummykelvin-273.15;
        dummyfaren = tofaren(dummycelcius);
        document.getElementById("celcius-text").value=dummycelcius;
        document.getElementById("faren-text").value=dummyfaren;

        document.getElementById("visi").style.visibility="hidden";
    
    }
}
    
    function tofaren(celcius){
        return (celcius*(9/5)+32).toFixed(3);
    }
    function tocelcius(faren){
        return (5/9)*(faren-32).toFixed(3);
    }
    function tokelvin(celcius){
        return celcius+273;
    }

})

document.getElementById("Reset").addEventListener("click",function(){
    document.getElementById("celcius-text").value="";
    document.getElementById("faren-text").value="";
    document.getElementById("kelvin-text").value="";
    document.getElementById("visi").style.visibility="hidden";

})
