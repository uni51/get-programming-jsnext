(function (namespace) {
  var DEFAULT_START = 0;
  var DEFAULT_STEP = 1;

  var range = function (start, stop, step) {
    var arr = [];

    if (!step) {
      step = DEFAULT_STEP;
    }

    if (!stop) {
      stop = start;
      start = DEFAULT_START;
    }

    if (stop < start) {
      (function () {
        // 値を入れ替える
        var tmp = start;
        start = stop;
        stop = tmp;
      }());
    }

    (function () {
      var i;
      for(i=start; i<stop; i+=step) {
        arr.push(i);
      }
    }());

    return arr;
  }
  namespace.range = range;

}(window.mylib));