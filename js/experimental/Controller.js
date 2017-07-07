/* Controller.js
 *
 * Manages all controls.
 */
WebTree.Controller = (function () {
    class Controller {

        constructor() {
            this.controls = new ControllerHashTable();
        }
    }

    return Controller;
}());
