<?php     
                /* displayUsers
                 *  Queries database to display all user information
                 */
                function displayUsers(){
                    
                        $db = mysqli_connect('localhost', 'root', '', 'test') 
                                  or die("Unable to connect");
                        
                        $sql = "SELECT * FROM userinfo";
            
                        $result = $db ->query($sql);
                    
                        if ($result->num_rows > 0) {
                            echo '<h3>Avalible Records</h3>';

                            while($row = $result->fetch_assoc()) {      
                                echo "<p> - Name: " . $row["Username"]. ", E-mail: " . $row["E-mail"].   "</p>";

                                }

                            }else{
                                echo"<p>No Records </p>";
                            }     
                            
                        $db ->close();
                }

                /* subReview 
                 * Display review for submitted information
                 */
                function subReview($username, $email, $gender, $address1, $address2, $phone, $password) {
                        
                        echo '<h1>Your Info ' .$username .'</h1>';   
                        echo '<p> Your E-mail: ' . $email .'</p>';
                        echo '<p>Gender: ' . $gender .'</p>';
                        echo '<p>Address: ' .$address1 
                                        . ' ' . 
                                         $address2 
                                .'</p>';
                        echo '<p>Phone Number: ' .$phone.'</p>';
                        echo '<p>Password: ' .$password .'</p>';        
               }
              
                /* submitdata
                 * submits given form data to database.
                 * Calls subReview to display submitted results
                 */
                function submitdata($username, $email, $gender, $address1, $address2, $phone, $password ){
                      
                        $db = mysqli_connect('localhost', 'root', '', 'test') or die("Unable to connect");
                      
                        $sql = "INSERT INTO `userinfo` (`recordId`, `Username`, `E-mail`, `AddressOne`, `AddressTwo`, "
                                . "`Gender`, `Password`, `Phone Number`) VALUES". 
                                "(NULL, '$username', '$email', '$address1', '$address2', '$gender', '$password', '$phone')";   
                      
                        if ($db->query($sql) === TRUE) {
                                    echo "<p>New record created successfully</p>";
                                    subReview($username, $email, $gender, $address1, $address2, $phone, $password);
                                    
                                } else {
                                    echo "Error: " . $db->error;
                                }
                        
                        $db ->close();                        
                }
                
                /* deletes an entry from the database
                 * 
                 */
                function deletedata($ID){
                    
                        $db = mysqli_connect('localhost', 'root', '', 'test') or die("Unable to connect");
                    
                        $sql = "DELETE FROM userinfo WHERE recordId = '$ID'";
                        
                        if ($db->query($sql) === TRUE) {
                            echo "Record: $ID deleted";
                        } else {
                            echo "Error: " . $db->error;
                        }
                        
                        $db ->close();               
                }
                              
?>