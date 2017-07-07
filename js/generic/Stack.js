/* Stack.js
 *
 * Specifies a Stack data structure.
 */
class Stack {

    /*
     * Creates a new Stack with the specified capacity. This capacity is the maximum supported capacity for
     * the stack.
     */
    constructor(size) {
        this.data = new Array(size);
        this.count = 0;
    }

    /*
     * Gets the size of the stack.
     */
    getSize() {
        return this.data.length;
    }

    /*
     * Returns true if the stack is empty, i.e. if it has zero elements inside it.
     */
    isEmpty() {
        return this.count == 0;
    }

    /*
     * Returns the element at the top of the stack, or null if the Stack is empty. Does not alter the contents
     * of the stack.
     */
    peek() {
        var val = null;
        if (this.count != 0) {
            val = this.data[this.count - 1];
        }

        return val;
    }

    /*
     * Pops the top element from the stack and returns the removed element.
     */
    pop() {
        var val = this.peek();
        this.data[this.count - 1] = undefined;
        this.count--;

        return val;
    }

    /*
     * Pushes a new element to the top of the stack.
     */
    push(val) {
        if (this.count >= this.getSize()) {
            throw new Error("Cannot push to full stack.");
        }

        this.data[this.count] = val;
        this.count++;
    }

    /*
     * Gets the string representation of this object.
     */
    toString() {
        var str = "";
        var i = 0;
        for (i = 0; i < this.count; i++) {
            str += this.data[i];
        }

        return str;
    }

}
