/* validationForm
 *  Runs through the various validation criteria to return if the given information mets the standards to
 *  pass to PhP.
 * @returns {Boolean} Returns if the validation checks pased
 */
function validateForm() {
    
    var nameVal = nameValidation(document.forms["userForm"]["name"].value); 
    var emailVal = emailValidation(document.forms["userForm"]["email"].value);
    var genderVal = genderValidation(document.forms["userForm"]["gender"].value);
    var addressVal = addressValidation(
            document.forms["userForm"]["address1"].value,
            document.forms["userForm"]["address2"].value
            );
    alert(document.forms["userForm"]["password"].value);
    var passwordVal = passwordValidation(document.forms["userForm"]["password"].value);
        
    if (nameVal  === false         ||
        emailVal === false          ||
        genderVal === false        ||
        addressVal === false       ||
        passwordVal === false
            ){
        alert("Errors occured during validation");
        return false;
    }else{
        return true;
    }

}

/* Name Validation Code
 *  Validates the given name. The name cannot be empty, has to be a letter, and cannot contain spaces
 *  Max size is 254 Chars
 * @param {type} name takes in the users name input
 */
function nameValidation(name){
    
    var regX = new RegExp("[^a-z|^A-Z]");
    if (        name != ""    &&
                name.length < 255 &&
                !regX.test(name)
            ) {         
        document.getElementById('nameError').innerHTML = "(Required): No numbers or spaces";       
        return true;    

    }else{
        alert("Works");
        document.getElementById('nameError').innerHTML = 
                "No Name was entered /  Name was to long and/ or used charecters other than letters";
        return false;
    }
}

/* E-mail Validation Code
 *  Validates if the E-mail given is 254 charecters or under
 *  @param Takes in an Email address from a form 
 */
function emailValidation(email){
    if (        email !== ""    &&
                email.length < 255 
            ) {        
        document.getElementById('emailError').innerHTML = "(Required): Length up to 254 Char";
        return true;    

    }else{
        document.getElementById('emailError').innerHTML = "No Emai l/ Email is incorrect or to long";
        return false;
    }
}

/* Gender Validation Code
 *  Only allows the choices male, female, and other
 *  @param 
 */
function genderValidation(gender){
    if ( gender === "male"      ||
         gender === "female"   ||
         gender === "other"
        ){
       document.getElementById('GenderError').innerHTML = "(Required)"; 
        return true;
    }else{
        document.getElementById('GenderError').innerHTML = "No Gender was chosen";
        return false;
    }
}

/* Address Validation Code
 *  Validates based on the second address line being optional
 */
function addressValidation(address1, address2){
    if ( address1 != ""             &&
         address1.length < 255  &&
         address2.length < 255 
        ){
    
            if (address1.length < 255){
                document.getElementById('addressError1').innerHTML = "(Required): Length up to 254 Char";
            }
            
            if (address2.length < 255){
            document.getElementById('addressError2').innerHTML = "(Optional): Length up to 254 Char";
            }
            
            return true;
        
        }else{
        
        if (address1.length < 255){
            document.getElementById('addressError1').innerHTML = "(Required): Length up to 254 Char";
        }
        
        if (address2.length < 255){
            document.getElementById('addressError2').innerHTML = "(Optional): Length up to 254 Char";
        }
        
        if (address1.length > 255 ||
            address1 == "" ){
            document.getElementById('addressError1').innerHTML = "No Address Given / Address 1 was to long";
        }
        
        if (address2.length > 255){
            document.getElementById('addressError2').innerHTML = "Address 2 was to long";
        }
        return false; 
    }
}

/* Password Validation Code
 *  Validates based on the length of the password. The password can be 
 *  between 5 and 25 chars long
 *  @param password the password to validate
 */
function passwordValidation(password){
    if ( 
         password.length < 25  ||
         password.length > 5 
        ){
        return true;
    }else{     
        document.getElementById('passError').innerHTML = "No Password was given / Password was to short or long";       
        return false; 
    }
}

