// accum("abcd");    // "A-Bb-Ccc-Dddd"
// accum("RqaEzty"); // "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt");    // "C-Ww-Aaa-Tttt"

// function accum(s) {
//   const arr = s.split('');
//   let result = [];
//   let newS = '';

//   for(let i = 0; i < arr.length; i++) {
//     newS = arr[i].toUpperCase() + arr[i].repeat(i).toLowerCase();
//     result.push(newS);
//   }
//   return result.join('-');
// }

function accum(s) {
  return s.split('').map((c, i) => c.toUpperCase() + c.toLowerCase().repeat(i)).join('-');
}


module.exports = accum;