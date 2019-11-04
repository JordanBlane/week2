var arr = []
var lengths = []

function seq(num){
    arr = []
    while(num !== 1){
        if(num % 2 == 0){
            arr.push(num/2)
            num = arr[arr.length-1]
        }
        else{
            arr.push(num*3+1)
            num = arr[arr.length-1]
        }
        lengths.push(arr.length)
    }
    
}
for(i=100000;i<1000000;i=i+6){
    seq(i)
}
console.log(lengths)

console.log(lengths)
function getMax(numarr){
    return Math.max.apply(null, numarr)
}

console.log(getMax(lengths))


