/* Controller.js
 *
 * Handles user interactivity.
 */
(function ($, document, webTree, undefined) {
    $(document).ready(function () {

        /*
         * Handles the generation of the postfix and tree when clicking the generate button.
         */
        $("#tree-generate").click(function () {
            var infix, postfix, tree;

            infix = $("#logic-sentence").val();
            postfix = webTree.parser.infixToPostfix(infix);

            $("#logic-postfix").val(postfix);

            /* renderTree(tree); */
        });


        /*
         * Inserts a token to the sentence input field.
         */
        $("#logic-sentence-insert-symbols *, #logic-sentence-insert-variables *").click(function () {
            $("#logic-sentence").val($("#logic-sentence").val() + $(this).attr('data-insert-key'));
        });
    });
}(window.jQuery, window.document, window.webTree));
