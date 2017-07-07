/* Entry.js
 *
 * Entry point for the web application. Initializes the parser state and required globals.
 */
(function (ns, undefined) {
    ns.webTree = ns.webTree || {
        parser: (function () {
            var parser = new LogicParser();
            parser.createGrammar({
                '(': -10,
                ')': -10,
                '\u00AC': 50,
                '\u2227': 40,
                '\u2191': 40,
                '\u2228': 30,
                '\u2193': 30,
                '\u2192': 20,
                '\u21D4': 10,
                '\u2295': 10,
                '\u22A4': 0,
                '\u22A5': 0
            });

            return parser;
        }())
    };

}(window));
