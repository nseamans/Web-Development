<!DOCTYPE html>
    <!--
            NOTES: This project is an exercise in php form validation and validates 
                Username
                E-Mail 
                Address 
                Gender
                Password
                Phone Number
    -->
<html>
    
    <head>
        
        <meta charset="UTF-8">
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
        <script src="validation.js"></script>
        
        
        <link rel="stylesheet" 
              href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" 
              integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" 
              crossorigin="anonymous">
        <title>PHP Form Example</title>
         
    </head>
    
    <body>
        
        <div class="row">
            <div class="col-sm-4"> </div>
            <div class="col-sm-4"> 
                <h3>Client and Server Validation</h3>
            </div>        
        </div>
        
        <div class="row">
            <div class="col-sm-4"> </div>
            
            <div class="col-sm-4"> 
                <p>This project is designed to showcase validation and submission of form data</p>
                <p>Javascript and PhP validation functionality</p>
                <p>View Records from and Submit to Database</p>
                <p>Note: This project also has functionality built to process data to a database.
                       Because I do not have a server setup, much of the work was done with xammp. 
                       I have programmed the database functionality to terminate with a warning if this 
                       is not present. 
                </p>
                
            </div>
            
            <div class="col-sm-4"> </div>
    
        </div>
        
        <div class="row">
            
            <div class="col-sm-4"> </div>    
            
            <div class="col-sm-4"> 
                <form name="userForm" action="order_submitted.php" 
                      onsubmit="return validateForm()"  method="post">

                    <table class="table">
                        <tr>
                            <th>Name:</th>
                            <td><input type="text" name="name"></td>
                            <td id="nameError"> (Required): No numbers or spaces</td>
                        </tr>

                        <tr>
                            <th>E-Mail:</th>
                            <td><input type="text" name="email"></td>     
                            <td id="emailError">(Required): Length up to 254 Char</td>
                        </tr>
                                               
                        <tr>
                            <th>Address line 1:</th>
                            <td><input type="text" name="address1"></td>  
                            <td id="addressError1">(Required): Length up to 254 Char</td>
                        </tr>
                        
                        <tr>
                            <th>Address line 2:</th> 
                            <td><input type="text" name="address2"></td>       
                            <td id="addressError2">(Optional): Length up to 254 Char</td>
                        </tr>
                        
                        <tr>
                            <th>Gender:</th>
                            <td>
                                Male
                                <input type="radio" value="male" name="gender">
                                Female
                                <input type="radio" value="female" name="gender">
                                Other
                                <input type="radio" value="other" name="gender">
                            </td>       
                            <td id="GenderError">(Required)</td>
                        </tr>
                        
                        <tr>
                            <th>Password:</th>
                            <td>
                                <input type="password" name="password">
                            </td>      
                            <td id="passError">(Required): Between 5 and 25 Char</td>
                        </tr>
                        
                        
                        <tr>
                            <th>Phone Number</th>
                            <td><input type="text" name="number"></td> 
                            <td id="phoneError">(Required): Format 1-111-111-1111</td>
                        </tr>

                        <tr>
                            <th></th>
                            <td><input type="submit"></td>
                        </tr>
                    </table>
                    
                </form>
            </div>
            
            <div class="col-sm-4"> </div>            
            
        </div>    

    </body>
    
</html>
