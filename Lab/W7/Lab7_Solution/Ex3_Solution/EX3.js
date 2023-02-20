function makeBooking() {
	var result;
	var valid = Validate();
	if (valid) { // all fields are correct
		var numPersons = document.getElementById("numPersons").value;
		var fee = 0;
		if (numPersons <= 20) {
			fee = 6000;
		}
		else {
			fee = 4500;
		}
		result = "Booking Fee: AED"+fee;
	} 
	else {
		result = "Please check the form for errors";
	}
	document.getElementById("result").innerHTML = result;
}

function Validate() {
	var fullname = document.getElementById("fullname").value;
	var phone = document.getElementById("phone").value;
	var numPersons = document.getElementById("numPersons").value;
	var lunch = document.getElementById("lunch"); //radio button
	var dinner = document.getElementById("dinner"); //radio button
	var result = true; 

	regname=/^[a-zA-Z ]{10,}$/;
	if (regname.test(fullname) == false) {
		document.getElementById("fnameError").innerHTML = "Must be at least 10 letters, spaces allowed";
		result = false;
		
	}
	if (/^(05|06|07)[0-9]{6}$/.test(phone) == false) {
		document.getElementById("phoneError").innerHTML = "Must start with 05 or 06 or 07 followed by 6 more digits";
		result = false;
	}
	numPersons = parseInt(numPersons);
	if (numPersons <= 10) {
		document.getElementById("numPersonsError").innerHTML = "Must be at least 10 persons";
		result = false;
	}
	if (lunch.checked==false && dinner.checked==false) {
		document.getElementById("mealError").innerHTML = "Must choose one meal";
		result = false;
	}
	return result;
}
