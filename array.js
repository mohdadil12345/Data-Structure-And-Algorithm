



//   ques : 1     Subarrays Having Sum Less Than M,


let k = 5
let n = 5
let arr = [1,5,1,3,2]  // 5 
let count = 0











// for(let i=0; i<arr.length; i++){

//       let subarr = []
//       let sum = 0
//     for (let j = i; j < arr.length; j++) {
//            subarr.push(arr[j])
//            sum += arr[j]

//            if(sum < k){
//             count++
//            }

//     } 
// }
// console.log(count)


//  optimization


// let m = 5
// let n = 5
// let arr = [1, 5, 1, 3, 2]  // 5 
// let count = 0

// let start = 0;
// let end = 0;

// let sum = arr[0]

// while (start < n && end < n) {


//     if (sum < m) {

//         end++

//         if (end >= start)
//             count += end - start

//         if (end < n)
//             sum += arr[end]



//     } else {
//         sum -= arr[start]
//         start++
//     }
// }

// console.log(count)

