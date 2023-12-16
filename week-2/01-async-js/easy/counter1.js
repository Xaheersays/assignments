count = 0

const Increment = ()=>{
    count ++ ; 
    console.log(count)
}
setInterval(Increment,1000)