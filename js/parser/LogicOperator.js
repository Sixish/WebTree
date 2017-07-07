/* LogicOperator.js
 *
 * Specifies a logic operator.
 */
class LogicOperator extends Token {

    /*
     * Constructs a LogicOperator.
     */
    constructor(sym, prec) {
        super(sym);
        this.precedence = prec;
    }
}

