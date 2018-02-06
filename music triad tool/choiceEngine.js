    /** choiceEngine.js
     *  The funcitons in this file represent choices made by users when 
     *  requesting keys and scales such as C Minor. 
     *  
     *  Note: functions such as "DmajorChoice();" are from the keyChoices.js 
     *  file, this is accessed near the header of index.html 
     * 
     */
    
    $(document).ready(function(){
        
            /* Initializes a chord choice upon loading the application */
            cminorChoice();
            $( "#chordcom1" ).text("G Minor");

            $( "#lookup" ).click(function() {
                chordlookup();
            });
            
            /** clearout()
             *  This function serves to clearout initialize
             * 
             */
            
            function clearout(){
                                
                $( "#Chead1" ).css( "border", "" ); // Red
                $( "#C-head1" ).css( "border", "" ); // Purple
                $( "#Dhead1" ).css( "border", "" ); // Yellow 
                $( "#D-head1" ).css( "border", "" ); // Purple
                $( "#Ehead1" ).css( "border", "" ); // Sky Blue
                $( "#Fhead1" ).css( "border", "" ); // Deep Red
                $( "#F-head1" ).css( "border", "" ); // Violet
                $( "#Ghead1" ).css( "border", "" ); // Deep Red
                $( "#G-head1" ).css( "border", "" ); // Sky Blue
                $( "#Ahead1" ).css( "border", "" ); // Green
                $( "#A-head1" ).css( "border", "" ); // Violet
                $( "#Bhead1" ).css( "border", "" ); // Blue 
                
                $( "#int1" ).text("|");
                $( "#int2" ).text("|");
                $( "#int3" ).text("|");
                $( "#int4" ).text("|");
                $( "#int5" ).text("|");
                $( "#int6" ).text("|");
                $( "#int7" ).text("|");
                $( "#int8" ).text("|");
                $( "#int9" ).text("|");
                $( "#int10" ).text("|");
                $( "#int11" ).text("|");
                $( "#int12" ).text("|");   
            }
        
            /** chordlookup()
             *  This function is used to make the needed changes based on the 
             *  key and chord choosen by the user. 
             * 
             */
        
            function chordlookup(){ 
                
                var keychoice = $("#sel1").val();
                var chordchoice = $("#sel2").val();
            
                if (keychoice === "C" && chordchoice === "Minor"){
                        clearout();
                        cminorChoice();
                        $( "#chordcom1" ).text("G Minor");
                    }
                    
                if (keychoice === "C" && chordchoice === "Major"){
                        clearout();
                        cmajorChoice();
                        $( "#chordcom1" ).text("G Major");
                    }  
                    
                if (keychoice === "C#" && chordchoice === "Minor"){
                        clearout();
                        c_minorChoice();
                        $( "#chordcom1" ).text("G# Minor");
                    }
                    
                if (keychoice === "C#" && chordchoice === "Major"){
                        clearout();
                        c_majorChoice();
                        $( "#chordcom1" ).text("G# Major");
                    } 
                    
                if (keychoice === "D" && chordchoice === "Minor"){
                        clearout();
                        DminorChoice();
                        $( "#chordcom1" ).text("A Minor");
                    }
                    
                if (keychoice === "D" && chordchoice === "Major"){
                        clearout();
                        DmajorChoice();
                        $( "#chordcom1" ).text("A Major");
                    }
                    
                if (keychoice === "D#" && chordchoice === "Minor"){
                        clearout();
                        D_minorChoice();
                        $( "#chordcom1" ).text("A# Major");
                    }
                    
                if (keychoice === "D#" && chordchoice === "Major"){
                        clearout();
                        D_majorChoice();
                        $( "#chordcom1" ).text("A# Minor");
                    } 
                    
                if (keychoice === "E" && chordchoice === "Minor"){
                        clearout();
                        EminorChoice();
                        $( "#chordcom1" ).text("B Minor");
                    }
                    
                if (keychoice === "E" && chordchoice === "Major"){
                        clearout();
                        EmajorChoice();
                        $( "#chordcom1" ).text("B Major");
                    } 
                 
                if (keychoice === "F" && chordchoice === "Minor"){
                        clearout();
                        FminorChoice();
                        $( "#chordcom1" ).text("C Minor");
                    }
                    
                if (keychoice === "F" && chordchoice === "Major"){
                        clearout();
                        FmajorChoice();
                        $( "#chordcom1" ).text("C Major");
                    }
                    
                if (keychoice === "F#" && chordchoice === "Minor"){
                        clearout();
                        F_minorChoice();
                        $( "#chordcom1" ).text("C# Minor");
                    }
                    
                if (keychoice === "F#" && chordchoice === "Major"){
                        clearout();
                        F_majorChoice();
                        $( "#chordcom1" ).text("C# Major");
                    }
                    
                if (keychoice === "G" && chordchoice === "Minor"){
                        clearout();
                        GminorChoice();
                        $( "#chordcom1" ).text("D Minor");
                    }
                    
                if (keychoice === "G" && chordchoice === "Major"){
                        clearout();
                        GmajorChoice();
                        $( "#chordcom1" ).text("D Major");
                    }
                    
                if (keychoice === "G#" && chordchoice === "Minor"){
                        clearout();
                        G_minorChoice();
                        $( "#chordcom1" ).text("D# Minor");
                    }
                    
                if (keychoice === "G#" && chordchoice === "Major"){
                        clearout();
                        G_majorChoice();
                        $( "#chordcom1" ).text("D# Major");
                    }
                if (keychoice === "A" && chordchoice === "Minor"){
                        clearout();
                        AminorChoice();
                        $( "#chordcom1" ).text("E Minor");
                    }
                    
                if (keychoice === "A" && chordchoice === "Major"){
                        clearout();
                        AmajorChoice();
                        $( "#chordcom1" ).text(" E Major");
                    }
                    
                if (keychoice === "A#" && chordchoice === "Minor"){
                        clearout();
                        A_minorChoice();
                        $( "#chordcom1" ).text("F Minor");
                    }
                    
                if (keychoice === "A#" && chordchoice === "Major"){
                        clearout();
                        A_majorChoice();
                        $( "#chordcom1" ).text("F Major");
                    }
                    
                if (keychoice === "B" && chordchoice === "Minor"){
                        clearout();
                        BminorChoice();
                        $( "#chordcom1" ).text("F# Minor");
                    }
                    
                if (keychoice === "B" && chordchoice === "Major"){
                        clearout();
                        BmajorChoice();
                        $( "#chordcom1" ).text("F# Major");
                    } 
            }
    });

