//Define Print Error Function
function printError(elementid , hintmassage){
    document.getElementById(elementid).innerHTML = hintmassage;
    document.getElementById(elementid).style.color = "Red";
}

//Define Print OK Function
function printOK (elementid , hintmassage){
    document.getElementById(elementid).innerHTML = hintmassage;
    document.getElementById(elementid).style.color = "Green";
}

// Main Function
function Velidation(){

    // Get Value using ID
    var user = document.getElementById("username").value;
    var age = document.getElementById("age").value;
    var country = document.getElementById("option").value;
    // Get Value using Name
    var gender = document.contactForm.gender.value;
    // var hobbies = []
    
    // //Get Chackbox Value Script
    // var Chackbox = document.getElementsByName("hobbies[]");
    // for (var i = 0; i < Chackbox.length; i++) {
    //     // Populate hobbies array with selected values
    //     hobbies.push(checkboxes[i].value);
    // }

    // Defining error variables with a default value
    var usererror = ageerror = countryerror = gendererror = true;
    
    // Check invalid Username
    if (user == "") {
        printError("usererror" , " ** Enter Your Name !");
        document.getElementById("box1").style.borderColor = "Red";
        //alert(" Please Enter User name");
    }else{
        var regex = /^[A-Za-z\s]{3,20}$/;
        if (regex.test(user) === false) {
            printError("usererror" , " ** Please valid Name !");
            document.getElementById("box1").style.borderColor = "Red";

        }else{
            printOK("usererror" , " Thank You");
            document.getElementById("box1").style.borderColor = "Green";
            usererror = false;
        }
    }

    // Check age Error
    if (age == "") {
        printError("ageerror" , " ** Enter Your Age !");
        document.getElementById("box2").style.borderColor = "Red";
        //alert(" Please Enter User name");
    }else{
        if (age <= 10) {
            printError("ageerror" , " ** Age not Allowed !");
            document.getElementById("box2").style.borderColor = "Red";
        }else{
            printOK("ageerror" , " Thank You");
            document.getElementById("box2").style.borderColor = "Green";
            ageerror = false;
        }
    }

    // Check Country Select
    if (country == "Select") {
        printError("countryerror" , " ** Select Your Country !");  
        document.getElementById("box3").style.borderColor = "Red";
    }else{
        printOK("countryerror" , " Thank You");
        document.getElementById("box3").style.borderColor = "Green";
        countryerror = false;
    }

    // Check Gender 
    if (gender == "") {
        printError("gendererror" , " ** Select Your Gender !");
        document.getElementById("box4").style.borderColor = "Red";
    }else{
        printOK("gendererror" , " Thank You");
        document.getElementById("box4").style.borderColor = "Green";
        gendererror = false;
    }

    // Prevent the form from being submitted if there are any errors
    if ((usererror || ageerror || countryerror || gendererror) == true) {
        return false;
    }
    else{
        alert("|| SUCCESFULL || ----Arya Bandhu----");
    }
}