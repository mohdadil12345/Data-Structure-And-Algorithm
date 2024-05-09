//   problem : 1   category of string

let str = "bcda"  // 2341 position in alphabet

let alpha = "abcdefghijklmnopqrstuvwxyz"
let bag = ""

for(let i=0; i<str.length; i++) {
   
for(let j=0; j<alpha.length; j++) {
    if(str[i] == alpha[j]){
        bag += j +1 
    }
}

}
console.log(bag)

// -----------------------------------------------------------------




//   ques : 3 compete with neighbour  count of occurences where element is larger than its neighbour


// let n = 8
// let arr = [1, 2, 3, 4, 2, 1, 6, 5] // 2

// let count = 0


// if(arr[0] > arr[1]){
//     count++
// }

// if(arr[n-1] > arr[n-2]){
//     count++
// }

// for(let i=0; i<arr.length; i++){
//     if(arr[i] > arr[i+1] && arr[i] > arr[i-1]){
//         count++
//     }
// }

// console.log(count)










