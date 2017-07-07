var TreeAnimator = (function ($, undefined) {
    /* The default speed setting. All other values will scale according to this. */
    const SPEED_DEFAULT = 1;

    /* The default duration for all animations. Other animation durations will be a function of this. */
    const DURATION_DEFAULT = 1000;

    /* The default duration for all rotations, as a function of the default duration of all animations. */
    const DURATION_ROTATION_DEFAULT = Math.floor(DURATION_DEFAULT / 2);

    /* Whether or not the animations are paused by default. */
    const PAUSED_DEFAULT = false;

    function calcDuration(defaultDuration, speed) {
        return Math.floor(defaultDuration / speed);
    }

    function calcDefaultDuration(speed) {
        return calcDuration(DURATION_DEFAULT, speed);
    }

    function calcRotationDuration(speed) {
        return calcDuration(DURATION_ROTATION_DEFAULT, speed);
    }

    class TreeAnimator() {
        constructor() {
            this.config = {
                /* The current speed of the animations. */
                'animationSpeed': SPEED_DEFAULT,

                /* Whether or not current animations are paused. */
                'animationPaused': PAUSED_DEFAULT,

                /* The duration of different types of animations. */
                'animationDuration': {
                    /* Unclassified types of animations. */
                    'default': calcDefaultDuration(SPEED_DEFAULT),

                    /* Rotation animations. */
                    'rotate': calcRotationDuration(SPEED_DEFAULT)
                }
            };
        }

        animate() {
            
        }

        rotate(node1, direction) {
            
        }

    }


    return TreeAnimator;
}(window.jQuery));
