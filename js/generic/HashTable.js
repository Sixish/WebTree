/* HashSet.js
 *
 * Specifies a hash table ADT. This class wraps the built-in JavaScript operator and provides additional or
 * altered functionality.
 */
class HashTable {

    /*
     * Constructs a hash table.
     */
    constructor() {
        this.entries = {};
    }

    /*
     * Determines if the specified key is contained within the hash table.
     */
    containsKey(key) {
        return this.entries.hasOwnProperty(key);
    }

    /*
     * Gets the element specified by the key.
     */
    get(key) {
        return this.entries[key] || null;
    }

    /*
     * Adds an item to the hash table with the specified key.
     */
    set(key, value) {
        if (this.containsKey(key)) {
            throw new Error("Cannot add value with key " + key + ": Already exists in hash table.");
        }
        this.entries[key] = value;
    }

    /*
     * Retrieves a key from the object. This returned string is used as the key in the hash table and must be
     * unique. The default implementation will not attempt to translate any inputs, and assume they are already
     * primitives.
     */
    prehash(obj) {
        /* Assume obj is already a primitive. Subclasses may override this to accept objects. */
        return obj;
    }

}
