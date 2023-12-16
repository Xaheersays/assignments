
let  count = 0

const Increment = ()=>{
    count++;
    console.log(count)
}
// used recursion here 
let helper = ()=>{
    setTimeout(()=>{
        Increment();
        helper();
    },1000)
}

helper();