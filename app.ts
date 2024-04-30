const num1 = document.getElementById('n1') as HTMLInputElement;
const num2 = document.getElementById('n2')  as HTMLInputElement;
const btn = document.querySelector('button')!;

const numresult: Array<number> =[]
const textresult: string[] =[]

type NumOrString = number | string;
type Result = {val : Number; timestamp: Date};

interface Resultobj{
    val : Number; 
    timestamp: Date;
}

function addd(n1: NumOrString , n2: NumOrString){
    if(typeof n1=== 'number' && typeof n2 === 'number'){
        return n1+n2;
    } else if(typeof n1=== 'string' && typeof n2 === 'string'){
        return n1+ ' ' +n2;
    }
    return +n1 + +n2

}
function printresult(resultobj: Resultobj ){
console.log(resultobj.val);
}

btn.addEventListener("click", ()=>{
    const n1 = num1.value;
    const n2 = num2.value;
    const result = addd(+n1,+n2); //by adding+ we conver it to number types
    const strignresult = addd(n1,n2)
    numresult.push(result as number)
    textresult.push(strignresult as string)
    printresult({val: result  as Number,timestamp: new Date()})
    console.log(numresult , strignresult)
})

const myPromise = new Promise<string>((resolve , reject)=>{
    setTimeout(()=>{
        resolve('it worked')
    },1000)
});
 
myPromise.then((result)=>{
    console.log(result.split('w'))
})