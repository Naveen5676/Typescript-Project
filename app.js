"use strict";
const num1 = document.getElementById('n1');
const num2 = document.getElementById('n2');
const btn = document.querySelector('button');
const numresult = [];
const textresult = [];
function addd(n1, n2) {
    if (typeof n1 === 'number' && typeof n2 === 'number') {
        return n1 + n2;
    }
    else if (typeof n1 === 'string' && typeof n2 === 'string') {
        return n1 + ' ' + n2;
    }
    return +n1 + +n2;
}
function printresult(resultobj) {
    console.log(resultobj.val);
}
btn.addEventListener("click", () => {
    const n1 = num1.value;
    const n2 = num2.value;
    const result = addd(+n1, +n2); //by adding+ we conver it to number types
    const strignresult = addd(n1, n2);
    numresult.push(result);
    textresult.push(strignresult);
    printresult({ val: result, timestamp: new Date() });
    console.log(numresult, strignresult);
});
const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('it worked');
    }, 1000);
});
myPromise.then((result) => {
    console.log(result);
});
