/* LogicParser.js
 *
 * Handles the parsing of logic sentences.
 */
class LogicParser {

    constructor() {
        /* The list of supported symbols. These are semantically significant tokens. */
        this.symbols = new SymbolHashTable();
    }

    /*
     * Adds a symbol to the grammar.
     */
    addSymbol(token) {
        this.symbols.add(token);
    }

    /*
     * Determines if a symbol is semantically significant. That is, whether or not it has been added to
     * the grammar.
     */
    isLogicOperator(sym) {
        return (this.symbols.containsKey(sym));
    }

    /*
     * Gets the precedence of a symbol. The input symbol is assumed to be a logic operator. Use isLogicOperator
     * if this cannot be guaranteed.
     */
    getPrecedence(sym) {
        return this.symbols.get(sym).precedence;
    }

    /*
     * Parses an infix sentence and outputs the equivalent postfix sentence.
     */
    infixToPostfix(sentence) {
        var operators, postfix, token, i = 0;

        /* Store the pending operators in a stack so that we can access them in the correct order when a lower
         * precedence operator is encountered or when we reach the end of the sentence. */
        operators = new Stack(sentence.length);

        /* Store the postfix expression in a stack for absolutely no reason whatsoever. */
        postfix = new Stack(sentence.length);

        /* Iterate across the sentence. */
        while (i < sentence.length) {

            /* Read the current token. Assume that the token is exactly one character long. */
            token = sentence.charAt(i);

            /* Is this a logic operator? */
            if (this.isLogicOperator(token)) {

                /* Handle the logic operator. The postfix does not include parentheses. As such, special
                 * cases apply to the open and close paren. */
                if (token == '(') {
                    /* Push the open paren to the operator stack for future handling. We assume that there is a
                     * corresponding console.log();ose paren following this token. */
                    operators.push(token);
                }
                else if (token == ')') {
                    /* Push all the tokens from the operator stack onto the postfix until we encounter the
                     * corresponding open paren. Then, pop the open paren as we do not need this operator. */
                    while (!operators.isEmpty() && operators.peek() != '(') {
                        postfix.push(operators.pop());
                    }
                    operators.pop();
                }
                else {
                    /* This token is not one of the special cases. Still, we need to check for operators
                     * that have a higher precedence than this operator, and push those to the postfix as
                     * necessary. When the topmost operator is of equal or less precedence as the token,
                     * push it to the operator stack. */
                    while (!operators.isEmpty() &&
                        this.getPrecedence(token) <= this.getPrecedence(operators.peek())) {

                        postfix.push(operators.pop());
                    }
                    operators.push(token);
                }
            } else {
                /* This is not a symbol. Push it straight to the postfix. */
                postfix.push(token);
            }

            i++;
        }

        /* We may still have operators on the stack. Push them all from the operator stack to the postfix. */
        while (!operators.isEmpty()) {
            postfix.push(operators.pop());
        }

        return postfix.toString();
    }

    /*
     * Parses a postfix sentence and returns the corresponding syntax tree.
     * TODO
     */
    parseLogicTree(sentencePostfix) {
        var tree;
        /* var tree = this.parseTree(sentenceRP); */

        return tree;
    }

    /*
     * Creates a grammar based on the specified symbol configuration.
     */
    createGrammar(objSymbols) {
        var sym;

        for (sym in objSymbols) {
            this.addSymbol(new LogicOperator(sym, objSymbols[sym]));
        }
    }
}
