/*
 *
 * FStopwatch.js
 *
 * A simple stopwatch
 *
 */


Folio.FTime.FStopwatch = function() {
    // ------------------------------------------------------------------------
    //
    // Properties
    //
    // ------------------------------------------------------------------------
    var now;
    var then;
    var timeInMs = 0;
    var hasStarted = 0;



    // ------------------------------------------------------------------------
    //
    // Methods
    //
    // ------------------------------------------------------------------------
    /**
     *
     * toggle (start/stop) the stopwatch
     *
     */
    var toggle = function() {
        if (hasStarted === 0) {
            start();
        }
        else {
            pause();
        }
    };

    /**
     *
     * start the stopwatch
     *
     */
    var start = function() {
        // start
        hasStarted = 1;
        then = new Date();
        then.setTime(then.getTime() - timeInMs);
    };

    /**
     *
     * pause the stopwatch
     *
     */
    var pause = function() {
        // pause
        hasStarted = 0;
        now = new Date();
        timeInMs = now.getTime() - then.getTime();
    };

    /**
     *
     * reset the stopwatch
     *
     */
    var reset = function() {
        hasStarted = 0;
        timeInMs = 0;
    };



    // ------------------------------------------------------------------------

    //
    // Sets
    //
    /**
     *
     * set the stopwatch
     *
     * @param {Number} ms
     *      milliseconds to start the stopwatch with
     * @param {Boolean} run
     *      whether the stopwatch should start or not
     *
     */
    var set = function(ms, run) {
        timeInMs = ms;
        hasStarted = (run)
            ? 0
            : 1;
        // (run === true) ? hasStarted = 0 : hasStarted = 1;

        then = new Date();
        then.setTime(then.getTime() - timeInMs);
        toggle();
    };


    //
    // Gets
    //
    /**
     *
     * @return {Number} the time elapsed in milliseconds
     *
     */
    var get = function() {
        if (hasStarted === 1)  {
            now = new Date();
            timeInMs = now.getTime() - then.getTime();
        }
        return timeInMs;
    };

    /**
     *
     * @return {Boolean} whether the stopwatch is running
     *
     */
    var isRunning = function() {
        return (hasStarted === 0)
            ? true
            : false;
    };


    // ------------------------------------------------------------------------
    return {
        toggle    : toggle,
        start     : start,
        pause     : pause,
        reset     : reset,

        set       : set,

        get       : get,
        isRunning : isRunning
    };

};
