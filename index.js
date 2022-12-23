// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;

const keyword = ['AND', 'OR', '=', 'ORDER BY'];

var test = [
  'Product',
  '=',
  'amazon',
  'prim',
  'video',
  'AND',
  'title',
  '=',
  'ffdffff',
  'ffttt',
  'ffttt',
  'AND',
  'title',
  '=',
  'amazon',
  'prim',
  'video',
];

var res = [];
var operands = '';

// const result = test.map((item, currentIndex, array) => {
//   var ele = false;
//   if (currentIndex == 0) {
//     // res.push(item);
//   } else {
//     // if (keyword.includes(array[currentIndex])) {
//     //   ele = true;
//     // } else {
//     //   ele = false;
//     // }
//   }

//console.log('item', ele, item, currentIndex, keyword.includes(item));
// if (keyword.includes(array[currentIndex])) {
//   //  console.log('True', item, currentIndex);
//   res.push(operands.trim());
//   operands = '';
//   res.push(item);
// } else {
//   // console.log('False', item, currentIndex);
//   operands += `${item} `;
// }
// console.log(operands);
// if (operands !== '') {
//   res.push(operands.trim());
//   operands = '';
// }

// console.log(item,currentIndex);
// console.log(item, keyword.includes(item));
// if (keyword.includes(array[currentIndex])) {
//   ele = true;
// } else {
//   ele = false;
// }
// if (ele) {
//   console.log('True', item, currentIndex);
//   operands = '';
//   res.push(item);
// } else {
//   console.log('False', item, currentIndex);
//   operands += item;
// }

// else {
//   res.push(item);
// }

// if (keyword.includes(array[currentIndex])) {
//   res.indexOf(res[currentIndex - 1]);
//   res.splice(res.indexOf(array[currentIndex - 1]), 1);
//   // res.push(`${array[currentIndex - 1]} ${array[currentIndex]}`);
//   input = `${res[currentIndex - 1]} ${res[currentIndex]}`;
// } else {
//   input = item;
// }
// res.push(item);
// return item
// });

// const result = test.reduce((r, o, currentIndex, array) => {
//   // console.log(o, currentIndex, array);
//   var input = '';
//   if (currentIndex != 0) {
//     if (
//       !keyword.includes(array[currentIndex - 1]) !=
//       keyword.includes(array[currentIndex])
//     ) {
//       r.indexOf(array[currentIndex - 1]);
//       r.splice(r.indexOf(array[currentIndex - 1]), 1);
//       r.push(`${array[currentIndex - 1]} ${array[currentIndex]}`);
//     } else {
//       r.push(o);
//     }
//   } else {
//     r.push(o);
//   }
//   return r;
// }, []);

var res = [];
var operands = '';
var input = '';

const rr = test.reduce((r, o, currentIndex, array) => {
  if (keyword.includes(o)) {
    if (operands != '') {
      r.push(operands.trim());
      operands = '';
    }
    r.push(o);
  } else {
    operands += `${o} `;
  }
  if (currentIndex + 1 === test.length) {
    r.push(operands.trim());
  }
  return r;
}, []);

console.log('result', rr);
