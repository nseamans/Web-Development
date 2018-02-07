<html>

   
    <head>
        <title>Form Validation</title>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
        <link rel="stylesheet" 
              href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" 
              integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" 
              crossorigin="anonymous">
    </head>
    
    <body>       
        <?php  
            include 'phpfunctions.php';
                
            // variables for validation
            $Validatesuccess = true;
            $errors = array(); 
        ?>
        
        <?php    
        include 'validation.php';       
        
        if ($Validatesuccess === true){   
                 
                submitdata($_POST['name'], $_POST['email'], $_POST['gender'], $_POST['address1'], 
                $_POST['address2'], $_POST['number'], $_POST['password'] );
                                
                displayUsers();
                  
              } else {
                  echo 'Unsuccessful Validation';
                  
                  foreach ($errors as $givenError){
                      echo $givenError;
                  }
                  
              }
              
        ?>
                
    </body>
</html>