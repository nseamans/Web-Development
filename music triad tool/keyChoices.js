        /* Javascript Key Functions
         * The purpose of each of these functions is to provide the changes 
         * needed for each chord look up when keys are chosen by the user. 
         * The name of each function reflects the choice made by the user
         * i.e cminor will trigger the css to highlight the keys that
         * corespond to c minor: C D# G.  
         * 
         * I have also commented with the colors needed that will trigger the 
         * change. 
         * 
         * I choose the method given for easy debugging and adding new features.
         * Even though it is quite verbose, it makes understanding each function 
         * simple. 
         */
  
            function cminorChoice(){
                $( "#Chead1" ).css( "border", "1px solid #FF0000" ); // Red
                $( "#D-head1" ).css( "border", "1px solid #800080" ); // Purple
                $( "#Ghead1" ).css( "border", "1px solid #FFA500" ); // Deep Red
                
            }
  
            function cmajorChoice(){
                $( "#Chead1" ).css( "border", "1px solid #FF0000" ); // Red
                $( "#Ehead1" ).css( "border", "1px solid #00bfff" ); // Sky Blue
                $( "#Ghead1" ).css( "border", "1px solid #FFA500" ); // Deep Red
                
            }
            
            function c_minorChoice(){
                $( "#C-head1" ).css( "border", "1px solid #800080" ); // Purple
                $( "#Ehead1" ).css( "border", "1px solid #00bfff" ); // Sky Blue
                $( "#G-head1" ).css( "border", "1px solid #EE82EE" ); // Sky Blue
                
            }
  
            function c_majorChoice(){
                $( "#C-head1" ).css( "border", "1px solid #800080" ); // Purple
                $( "#Fhead1" ).css( "border", "1px solid #960000" ); // Deep Red
                $( "#G-head1" ).css( "border", "1px solid #EE82EE" ); // Sky Blue
                
            }
                    
            function DminorChoice(){
                $( "#Dhead1" ).css( "border", "1px solid  #FFFF00" ); // Yellow 
                $( "#Fhead1" ).css( "border", "1px solid #960000" ); // Deep Red
                $( "#Ahead1" ).css( "border", "1px solid #008000" ); // Green
            }
            
            function DmajorChoice(){
                $( "#Dhead1" ).css( "border", "1px solid  #FFFF00" ); // Yellow 
                $( "#F-head1" ).css( "border", "1px solid #960000" ); // Deep Red
                $( "#Ahead1" ).css( "border", "1px solid #008000" ); // Green
            }
            
            function D_minorChoice(){
                $( "#D-head1" ).css( "border", "1px solid #800080" ); // Purple
                $( "#F-head1" ).css( "border", "1px solid #EE82EE" ); // Violet
                $( "#A-head1" ).css( "border", "1px solid #EE82EE" ); // Violet
            }
            
            function D_majorChoice(){
                $( "#D-head1" ).css( "border", "1px solid #800080" ); // Purple
                $( "#Ghead1" ).css( "border", "1px solid #FFA500" ); // Deep Red
                $( "#A-head1" ).css( "border", "1px solid #EE82EE" ); // Violet
            }
            
            function EminorChoice(){
                $( "#Ehead1" ).css( "border", "1px solid #00bfff" ); // Sky Blue
                $( "#Ghead1" ).css( "border", "1px solid #FFA500" ); // Deep Red
                $( "#Bhead1" ).css( "border", "1px solid #0000FF" ); // Blue    
            }
            
            function EmajorChoice(){
                $( "#Ehead1" ).css( "border", "1px solid #00bfff" ); // Sky Blue
                $( "#G-head1" ).css( "border", "1px solid #EE82EE" ); // Sky Blue
                $( "#Bhead1" ).css( "border", "1px solid #0000FF" ); // Blue   
            }
            
            function FminorChoice(){
                $( "#Fhead1" ).css( "border", "1px solid #960000" ); // Deep Red
                $( "#G-head1" ).css( "border", "1px solid #EE82EE" ); // Sky Blue
                $( "#Chead1" ).css( "border", "1px solid #FF0000" ); // Red
                $( "#int1" ).text("+1");
            }
            
            function FmajorChoice(){
                $( "#Fhead1" ).css( "border", "1px solid #960000" ); // Deep Red
                $( "#Ahead1" ).css( "border", "1px solid #008000" ); // Green
                $( "#Chead1" ).css( "border", "1px solid #FF0000" ); // Red
                $( "#int1" ).text("+1");
            }
            
            function F_minorChoice(){
                $( "#F-head1" ).css( "border", "1px solid #960000" ); // Deep Red
                $( "#Ahead1" ).css( "border", "1px solid #008000" ); // Green
                $( "#C-head1" ).css( "border", "1px solid #800080" ); // Purple
                $( "#int2" ).text("+1");
            }
            
            function F_majorChoice(){
                $( "#F-head1" ).css( "border", "1px solid #960000" ); // Deep Red
                $( "#A-head1" ).css( "border", "1px solid #EE82EE" ); // Violet
                $( "#C-head1" ).css( "border", "1px solid #800080" ); // Purple
                $( "#int2" ).text("+1");
            }
            
            function GminorChoice(){
                $( "#Ghead1" ).css( "border", "1px solid #FFA500" ); // Deep Red
                $( "#A-head1" ).css( "border", "1px solid #EE82EE" ); // Violet 
                $( "#Dhead1" ).css( "border", "1px solid  #FFFF00" ); // Yellow
                $( "#int3" ).text("+1");
            }
            
            function GmajorChoice(){
                $( "#Ghead1" ).css( "border", "1px solid #FFA500" ); // Deep Red
                $( "#Bhead1" ).css( "border", "1px solid #0000FF" ); // Blue 
                $( "#Dhead1" ).css( "border", "1px solid  #FFFF00" ); // Yellow 
                $( "#int3" ).text("+1");
            }
            
            function G_minorChoice(){
                $( "#G-head1" ).css( "border", "1px solid #EE82EE" ); // Sky Blue
                $( "#Bhead1" ).css( "border", "1px solid #0000FF" ); // Blue 
                $( "#D-head1" ).css( "border", "1px solid #800080" ); // Purple
                $( "#int4" ).text("+1");
            }
            
            function G_majorChoice(){
                $( "#G-head1" ).css( "border", "1px solid #EE82EE" ); // Sky Blue
                $( "#Chead1" ).css( "border", "1px solid #FF0000" ); // Red
                $( "#D-head1" ).css( "border", "1px solid #800080" ); // Purple
                $( "#int1" ).text("+1");
                $( "#int4" ).text("+1");
            }
            
            function AminorChoice(){
                $( "#Ahead1" ).css( "border", "1px solid #008000" ); // Green
                $( "#Chead1" ).css( "border", "1px solid #FF0000" ); // Red
                $( "#Ehead1" ).css( "border", "1px solid #00bfff" ); // Sky Blue
                $( "#int1" ).text("+1");
                $( "#int5" ).text("+1");    
            }
            
            function AmajorChoice(){
                $( "#Ahead1" ).css( "border", "1px solid #008000" ); // Green
                $( "#C-head1" ).css( "border", "1px solid #800080" ); // Purple
                $( "#Ehead1" ).css( "border", "1px solid #00bfff" ); // Sky Blue
                $( "#int2" ).text("+1");
                $( "#int5" ).text("+1");
            }
            
            function A_minorChoice(){
                $( "#A-head1" ).css( "border", "1px solid #EE82EE" ); // Violet
                $( "#C-head1" ).css( "border", "1px solid #800080" ); // Purple
                $( "#Fhead1" ).css( "border", "1px solid #960000" ); // Deep Red
                $( "#int2" ).text("+1");
                $( "#int6" ).text("+1");    
            }
            
            function A_majorChoice(){
                $( "#A-head1" ).css( "border", "1px solid #EE82EE" ); // Violet
                $( "#Dhead1" ).css( "border", "1px solid  #FFFF00" ); // Yellow
                $( "#Fhead1" ).css( "border", "1px solid #960000" ); // Deep Red
                $( "#int3" ).text("+1");
                $( "#int6" ).text("+1");
            }
            
            function BminorChoice(){
                $( "#Bhead1" ).css( "border", "1px solid #0000FF" ); // Blue 
                $( "#Dhead1" ).css( "border", "1px solid  #FFFF00" ); // Yellow
                $( "#F-head1" ).css( "border", "1px solid #EE82EE" ); // Violet
                $( "#int3" ).text("+1");
                $( "#int7" ).text("+1");
            }
            
            function BmajorChoice(){
                $( "#Bhead1" ).css( "border", "1px solid #0000FF" ); // Blue 
                $( "#D-head1" ).css( "border", "1px solid #800080" ); // Purple
                $( "#F-head1" ).css( "border", "1px solid #EE82EE" ); // Violet
                $( "#int4" ).text("+1");
                $( "#int7" ).text("+1");
            }

