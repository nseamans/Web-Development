<h1>            
        <?php                     
                /* Validates the form User Name
                 * Not Over 255 char, only letters and whitespace
                 */
                if(!empty($_POST['name'])   &&
                    strlen($_POST['name']) < 255         
                    ){
                    $username = $_POST['name'];
                    
                    if (preg_match("/^[a-zA-Z ]*$/",$username)) {                       
                        // Success State    
                    }else {        
                       $Validatesuccess = FALSE;
                       $errors[] = '<p> Only letters and whitespace allowed for name</p>';                       
                    }
      
                }
                else{
                    $Validatesuccess  = FALSE;
                    $errors[] =  '<p>No Username</p>';
                }            
        ?>            
</h1>

<p>            
            <?php               
                /* Validates form E-mail
                 * Not Over 255 Char, valid E-mail
                 */     
                if(!empty($_POST['email'])   &&
                    strlen($_POST['email']) < 255                       
                        ){    
                    $email = $_POST['email'];
                    
                    if((!filter_var($email, FILTER_VALIDATE_EMAIL) === false)){                      
                        // Success State                      
                    }else{                        
                        $errors[] = "$email is not a valid email address";
                        $Validatesuccess = FALSE;
                    }    
                }
                else{
                    $errors[] = '<p> No e-mail was entered </p>';
                    $Validatesuccess = FALSE;
                }                  
            ?>  
</p>
        
<p>  
            <?php
                /* Validates form Gender
                 * Not Over 10 Char, valid results
                 */     
                if(
                    !empty($_POST['gender']) &&
                    strlen($_POST['gender']) < 10                   
                    ){
                    
                    if ($_POST['gender'] == 'male'   ||
                        $_POST['gender'] == 'female' ||
                        $_POST['gender'] == 'other'){
                        
                        // Success State
                        $gender = $_POST['gender'];

                    } else {
                        //echo '<p>Gender Choice is not valid.</p>';
                        $errors[] = '<p> Gender Choice is not valid. </p>';
                        $valState = FALSE;
                    }
               }
                else{
                    $errors[] = '<p> No Gender given </p>';
                    $Validatesuccess  = FALSE;
                }
            ?> 
</p>
        
<p>
        <?php   
                /* Validates form address
                 *  Address 1 Not Empty, Both addresses not over 255 char 
                 */
        
                if(!empty($_POST['address1'])          &&
                    strlen($_POST['address1']) < 255 &&
                    strlen($_POST['address2']) < 255     
                    ){
                    $address1 = $_POST['address1'];
                    $address2 = $_POST['address2'];

                }
                else{
                    $errors[] = '<p> No address given or given address is to long </p>';
                    $Validatesuccess  = FALSE;
                }
        ?>
            
</p>
        
<p>
        <?php        
        
                /* Validates given phone number with regex
                 *  Phone number must be present, format must be 1-111-111-1111
                 */
        
                if(!empty($_POST['number'])){
                    $phone = $_POST['number'];      
                    if(preg_match("/^[0-9]{1}-[0-9]{3}-[0-9]{3}-[0-9]{4}$/", $phone)) {
                        // Success State
                    }
                    else {
                       $errors[] = '<p> Not a Valid Phone Number </p>';
                       $Validatesuccess = FALSE;
                    }
                }
                else{
                    $errors[] = '<p> No Phone Number Given </p>';
                    $Validatesuccess  = FALSE;
                }         
        ?>
    
</p>
        
<p>     
        <?php 
                /* Validates form password
                 *  password must not be empty and between 5 and 25 char
                 */
                if(!empty($_POST['password'])         &&
                    strlen($_POST['password']) < 25  &&
                    strlen($_POST['password']) >  5   
                    ){
                    $password = $_POST['password'];
                    $hashed = password_hash($_POST['password'], PASSWORD_DEFAULT);
                }
                else{
                    //echo 'No Username';
                    $errors[] = '<p>No passsword given or invalid Password Provided</p>';
                    $Validatesuccess  = FALSE;
                }       
        ?>
               
</p>
     

