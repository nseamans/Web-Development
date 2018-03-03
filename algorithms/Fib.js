/** fibonacci
 *  Calculates the sequence by adding the total of the last two positions. If this cannot
 *  be done 1 is returned.
 * @param position the number the fibonacci works the sequence code for
 * @returns the answer to the sequence at the given position
 */
function fibonacci(position) {
        if ((position !== 0) && (position < 3)){
                return 1;
        }else{ 
                return fibonacci(position - 1) + fibonacci(position - 2);
        }
}

/** fibSequence
 *   Takes in an integer and processes each number in it into the fibonacci method.
 *   Tells the user that the total does not point to a real result at 0.
 * @param int num the number the sequence will loop accross
 */
function fibSequence(num){
        num = num + 1;
        for (i = 0; i < num; i++) {
                if (i === 0){
                        console.log( 'does not point to a real result' );
                }else{
                        console.log("The fibonacci result for number " + i + " is " + fibonacci(i));
                }
        }
}

fibSequence(30);