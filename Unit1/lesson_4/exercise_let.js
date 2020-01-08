{
  let DEFAULT_START = 0;
  let DEFAULT_STEP = 1;

  window.mylib.range = function (start, stop, step) {
    let arr = [];

    if (!step) {
      step = DEFAULT_STEP;
    }

    if (!stop) {
      stop = start;
      start = DEFAULT_START;
    }
    
    if (stop < start) {
        // 値を入れ替える
        let tmp = start;
        start = stop;
        stop = tmp;
    }
    
    for(let i=start; i<stop; i+=step){
      arr.push(i);
    }

    return arr;
  }
}