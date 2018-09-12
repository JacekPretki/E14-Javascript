function onclickHandler(){

    
    var ocena1=(parseInt(document.getElementById('pole1').value));
    var ocena2=(parseInt(document.getElementById('pole2').value));
    var ocena3=(parseInt(document.getElementById('pole3').value));
    
    document.getElementById("pole1").className="pole1";
	document.getElementById("pole2").className="pole1";
    document.getElementById("pole3").className="pole1";
    
    if (!isNaN(ocena1)&&!isNaN(ocena2)&&!isNaN(ocena3))
        {
            document.getElementById('srednia').value = parseFloat((ocena1+ocena2+ocena3)/3);
	            
        }
    else
        {
            document.getElementById('srednia').value = "bad";
           
            
            if (isNaN(ocena1))
            {
	            document.getElementById("pole1").className="pole1Invalid";
            }
            if (isNaN(ocena2))
            {
	            document.getElementById("pole2").className="pole1Invalid";
            }
            if (isNaN(ocena3))
            {
	            document.getElementById("pole3").className="pole1Invalid";
            }
           
        }
        
}

    