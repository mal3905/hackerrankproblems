

function miniMaxSum(arr) {
    let min = arr[0]
    let max = min
    let sum = min

    for (let i=0; i < arr.length; i++){
        sum += arr[i]

        if(arr[i] < min){
            min = arr[i]
        }
        if(arr[i] > max ){
            max = arr[i]
        }
    }

   console.log( (sum - max) + ' ' + (sum - min))
 }






miniMaxSum([1, 4, 2, 5, 3])
console.log(miniMaxSum)mm