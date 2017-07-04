class LogicParser {
    constructor() {
        /* The list of symbols, semantically significant tokens. */
        this.symbols = {};
    }

    addSymbol(token) {
        this.symbols[token.symbol] = token;
    }

    isLogicOperator(sym) {
        return (this.symbols.hasOwnProperty(sym));
    }

    getPrecedence(sym) {
        return this.symbols[sym].precedence;
    }

    infixToPostfix(sentence) {
        var operators, postfix, token, i = 0;

        operators = new Stack(sentence.length);
        postfix = new Stack(sentence.length);

        while (i < sentence.length) {
            token = sentence.charAt(i);

            if (this.isLogicOperator(token)) {
                if (token == '(') {
                    operators.push(token);
                }
                else if (token == ')') {
                    while (!operators.isEmpty() && operators.peek() != '(') {
                        postfix.push(operators.pop());
                    }
                    operators.pop();
                }
                else {
                    while (!operators.isEmpty() &&
                        this.getPrecedence(token) <= this.getPrecedence(operators.peek())) {

                        postfix.push(operators.pop());
                    }
                    operators.push(token);
                }
            } else {
                postfix.push(token);
            }

            i++;
        }

        while (!operators.isEmpty()) {
            postfix.push(operators.pop());
        }

        return postfix.toString();
    }

    parseLogicTree(sentencePostfix) {
        var tree;
        /* var tree = this.parseTree(sentenceRP); */

        return tree;
    }

    parse(str) {
        var operators = new Stack(str.length);
    }

    createGrammar(objSymbols) {
        var sym;

        for (sym in objSymbols) {
            this.addSymbol(new LogicOperator(sym, objSymbols[sym]));
        }
    }
}
