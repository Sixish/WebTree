$(document).ready(function () {
    $("#tree-generate").click(function () {
        var infix, postfix, tree;

        infix = $("#logic-sentence").val();
        postfix = parser.infixToPostfix(infix);

        $("#logic-postfix").val(postfix);

        /* renderTree(tree); */
    });

    $("#logic-sentence-insert-symbols *, #logic-sentence-insert-variables *").click(function () {
        $("#logic-sentence").val($("#logic-sentence").val() + $(this).attr('data-insert-key'));
    });
});


