class Stack {
    constructor(size) {
        this.data = new Array(size);
        this.count = 0;
    }

    getSize() {
        return this.data.length;
    }

    isEmpty() {
        return this.count == 0;
    }

    peek() {
        var val;
        if (this.count != 0) {
            val = this.data[this.count - 1];
        }

        return val;
    }

    pop() {
        var val = this.peek();
        this.data[this.count - 1] = undefined;
        this.count--;

        return val;
    }

    push(val) {
        if (this.count >= this.getSize()) {
            throw new Error("Cannot push to full stack.");
        }

        this.data[this.count] = val;
        this.count++;
    }

    toString() {
        var str = "";
        var i = 0;
        for (i = 0; i < this.count; i++) {
            str += this.data[i];
        }

        return str;
    }
}
