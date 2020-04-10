'use strict'

let cel;
let far;
function cToF(c) {
 cel=(c*9/5)+32
 console.log('cels to far', cel.toFixed(2))
}
cToF(84);

function fToC(f) {
 far=(f-32)*5/9
 console.log('far to cels', far.toFixed(2))
}
fToC(67);
