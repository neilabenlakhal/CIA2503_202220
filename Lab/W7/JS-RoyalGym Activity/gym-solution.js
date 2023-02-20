
//add missing packages in the packagePrice function
function packagePrice() {
    var pType = document.getElementById("pType").value;

    if (pType == "PACKAGE A")
        pPrice.innerHTML = "Dhs 1500/year";
    else if (pType == "PACKAGE B")
        pPrice.innerHTML = "Dhs 2000/year";
    //add missing pakages
    else if (pType == "PACKAGE C")
        pPrice.innerHTML = "Dhs 2500/year";
    else if (pType == "PACKAGE D")
        pPrice.innerHTML = "Dhs 3000/year";
    else if (pType == "PACKAGE VIP")
        pPrice.innerHTML = "Dhs 5000/year";

}

//add missing code in validate function. 
//This function will return true if there are input validation problems otherwise returns false.

function validate() {

    var name = document.getElementById("name");
    var age = document.getElementById("age").value;
    var male = document.getElementById("male");
    var female = document.getElementById("female");
    var mobile = document.getElementById("mobile"); //add to check UAE phone format or No


    var year = document.getElementById("year").value;
    var student = document.getElementById("yes"); //added to check if student or not
    var error = false;

    var reName = /^[a-zA-Z ]{8,}$/;
    if (reName.test(name.value) == false) {
        nameError.innerHTML = "name should be at least 8 letters, spaces allowed";
        error = true;
    }
    else
        nameError.innerHTML = "";

    //UAE phone format check to add


    var remobile = /^(05|06|07)[0-9]{6}$/;

    if (remobile.test(mobile.value) == false) {
        mobileError.innerHTML =
            "Must start with 05 or 06 or 07 followed by 6 more digits";
        error = true;
    }
    else
        mobileError.innerHTML = "";

    age = parseInt(age);
    if (isNaN(age) || age < 18 || age > 65) {
        ageError.innerHTML = "Age should be in range 18-65";
        error = true;
    }
    else
        ageError.innerHTML = "";

    //year verification to add
    year = parseInt(year);
    if (isNaN(year) || year < 1 || year > 5) {
        yearError.innerHTML = "Years should be in range 1-5.";
        error = true;
    }
    else
        yearError.innerHTML = "";

    //student verification to add

    if (student.checked == false && student.checked == false) {
        genderError.innerHTML = "Select either you are student or not";
        error = true;
    }
    else
        studentError.innerHTML = "";


    if (male.checked == false && female.checked == false) {
        genderError.innerHTML = "Select gender";
        error = true;
    }
    else
        genderError.innerHTML = "";



    if (error == true)
        return true;
    else
        return false;
}

//Add missing code to calculate final price
function finalAmount() {
    if (validate() == false) {
        //the following lines will be executed if the validate function returns false

        var pType = document.getElementById("pType").value;
        var year = document.getElementById("year").value;

        var price = 0, tPrice = 0, ageDis = 0, stdDis = 0, femaleDis = 0;
        var fPrice = 0;

        if (pType == "PACKAGE A")
            price = 1500;
        else if (pType == "PACKAGE B")
            price = 2000;
        else if (pType == "PACKAGE C")
            price = 2500;
        else if (pType == "PACKAGE D")
            price = 3000;
        else if (pType == "PACKAGE VIP")
            price = 5000;
        tPrice = price * year; // package cost * years

        if (age > 60)
            ageDis = (30 / 100) * tPrice;

        if (female.checked)
            femaleDis = (5 / 100) * tPrice;


        //Add student verification

        if (student.checked)
            stdDis = (10 / 100) * tPrice;

        fPrice = tPrice - ageDis - femaleDis - stdDis;

        result.innerHTML = "Final Price: Dhs " + fPrice;


    }

}
