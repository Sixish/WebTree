class LogicOperator extends Token {
    constructor(sym, prec) {
        super(sym);
        this.precedence = prec;
    }
}

