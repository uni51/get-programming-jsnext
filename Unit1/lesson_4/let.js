/*
if (true) {
  let foo = 'bar';
}

console.log(foo); // fooは宣言されたブロックの外側では存在しないため、エラーになる
*/

//----------------

let read, write;
{                 // 独立したブロックを開く
  let data = {};  // dataは実質的にプライベート変数

  write = function (key, val) {
    data[key] = val;
  }
  read = function (key) {
    return data[key];
  }
}                 // 独立したブロックを閉じる

write('message', 'Welcom to ES6!');
read('message');    // Welcom to ES6!
// console.log(data);  // ブロックの外側でdataを参照しているのでエラーになる

//----------------

/*
for (let i=0; i<5; i++) {
  console.log(i);
}
*/

//----------------

let num = 0;

function getNum() {
  if(!num) {
    num = 1
  }
  return num;
}

console.log(getNum());
