class TreeRenderer extends Renderer {
    constructor(canvas, tree) {
        super(canvas);
        this.tree = tree;
        this.scale = {};
    }

    update() {
        /* Update the list of entities that needs to be rendered. */
        var queue = new Queue(tree.count), node;

        this.scale.width = this.tree.width();
        this.scale.height = this.tree.height();

        updateRenderQueue();
    }

    updateRenderQueue() {
        var treeNodeQueue, queue = new Queue(), node = this.tree.root;

        queue.enqueue(this.tree.root);

        while (!queue.isEmpty()) {
            node = queue.dequeue();

            pos = new RenderPosition(tree.height - node.height,
            /* Assume the tree is binary and acyclic. */
            if (node.left != null) {
                queue.enqueue(node.left);
            }
            if (node.right != null) {
                queue.enqueue(node.right);
            }
        }


    }

    draw() {
        while (!this.drawQueue.isEmpty()) {
            
        this.draw
        while (this.entities) {

    update() {
        var 

    render(tree) {
        var queue = new Queue(tree.size);
        this.$root.empty();

        if (tree.size > 0) {
            queue.push(tree.root);
        }

        while (!queue.isEmpty()) {
            level++;
            subtree = queue.pop();
            if (subtree.left != null) {
                queue.push(subtree.left);
            }
            if (subtree.right != null) {
                queue.push(subtree.right);
            }

        queue.push(tree.root);
        while (
    }

