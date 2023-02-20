
//add missing packages in the packagePrice function
function packagePrice()
{
    var pType = document.getElementById("pType").value;
    
    if(pType == "PACKAGE A")
       pPrice.innerHTML = "Dhs 1500/year";
    else if(pType == "PACKAGE B")
       pPrice.innerHTML = "Dhs 2000/year";
	
	//add missing pakages
    
}

//add missing code in validate function. 
//This function will return true if there are input validation problems otherwise returns false.

function validate () {
	var name = document.getElementById("name");
	
	var age = document.getElementById("age").value;
	var male = document.getElementById("male");
	var year = document.getElementById("year").value;
	
	
	var error = false;
	
	var reName = /^[a-zA-Z ]{8,}$/;
	if(reName.test(name.value) == false)
	{
		nameError.innerHTML = "name should be at least 8 letters, spaces allowed";
		error = true;
	}
	else 
		nameError.innerHTML = "";
	
	
	
	age = parseInt(age);
	if(isNaN(age) || age <18 || age>65)
	{
		ageError.innerHTML = "Age should be in range 18-65";
		error = true;
	}
	else 
		ageError.innerHTML = "";
	
	
		
	if(male.checked==false && female.checked==false)
	{
		genderError.innerHTML = "Select gender";
		error = true;
	}
	else 
		genderError.innerHTML = "";
		
	
				
	if (error==true)
		return true;
	else 
		return false;
}

//Add missing code to calculate final price
function finalAmount() 
{
	if ( validate()==false ) 
	
	{//the following lines will be executed if the validate function returns false
	
		var pType = document.getElementById("pType").value;
		var year = document.getElementById("year").value;
		
		var price = 0, tPrice=0, ageDis=0, stdDis=0, femaleDis=0; fPrice=0;
		
		if(pType == "PACKAGE A")
		   price = 1500;
		else if(pType == "PACKAGE B")
		   price = 2000;
		
		
		tPrice = price*year;
		
		if(age>60)
			ageDis=(30/100)*tPrice;
		
		if(female.checked)
			femaleDis=(5/100)*tPrice;
		
			
		fPrice = tPrice-ageDis-femaleDis-stdDis; 
		
		result.innerHTML = "Final Price: Dhs " + fPrice;
		
	
	}
	
}
    