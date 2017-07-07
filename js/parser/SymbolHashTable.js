/* SymbolHashTable.js
 *
 * Specifies a hash table of symbols.
 */
class SymbolHashTable extends HashTable {
    
    /*
     * Constructs a symbol hash table.
     */
    constructor() {
        super();
    }

    /*
     * Adds a symbol to the table.
     */
    add(symbol) {
        super.set(symbol.label, symbol);
    }
}
