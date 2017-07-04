class Renderer {
    constructor(canvas) {
        this.canvas = canvas;
        this.renderQueue = new PriorityQueue();
    }

    createRenderTask(fn, ctx, args) {
        return new RenderTask(fn, ctx, args);
    }

    addRenderTask(priority, task) {
        this.renderQueue.enqueue(priority, task);
    }

    performRenderTask() {
        var task = this.renderQueue.dequeue();
        task.perform();
    }

    removeRenderTask() {
        this.renderQueue.dequeue(priority, task);
    }

    update() {
        while (this.renderTasks.
        throw new Error("Subclass must implement render update functionality.");
    }

