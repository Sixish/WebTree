/* ControllerHashTable.js
 *
 * Specifies a hash table of controls.
 */
class ControllerHashTable extends HashTable {
    
    /*
     * Constructs a control hash table.
     */
    constructor() {
        super();
    }

    /*
     * Adds a control to the table.
     */
    add(control) {
        super.set(control.name, control);
    }
}
