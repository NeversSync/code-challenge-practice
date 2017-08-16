'use strict';

function remove(str, num){
  while (num > 0) {
    str = str.replace('!', '');
    num--;
  }

  return str;
}

remove('!hi', 1); //hi

// solved
// or- from solutions:
// function remove(s,n){
//   return n>0 ? remove(s.replace('!', ''), n-1) : s;
// }