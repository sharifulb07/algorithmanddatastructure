
// Data structure



















// Arrays
// const myArr=[1,2,3,4,'shariful', 'islam'];
// map filter reduce 

// const arr=[64,9, 3, 5,2,4,7];

// filter ilteration method 
// const result=arr.filter((value)=>value>4)
// reduce method 
// const result=arr.reduce((sum,value)=>sum+value,0);




// map iteration method 

// let result=arr.map((value)=>value*2);
// console.log(result);

// This is forEach method here
// arr.forEach((a, index)=>console.log(a,index))


// extract max value from the arrr
// function getMax(arr){
//   let len=arr.length;
//   let max=-Infinity;
//   while(len--){
//     if(arr[len]>max){
//       max=arr[len];
//     }
//   }
//   return max;
// }

// function getMin(arr){
//   let len=arr.length;
//   let min=Infinity;
//   while(len--){
//     if(arr[len]<min){
//       min=arr[len];
//     }

    
//   }
//   return min
// }
// console.log(getMin(arr));
// console.log(getMax(arr));

// extract max from the array
// const max=Math.max.apply(null,arr);
// const min=Math.min.apply(null,arr);
// console.log(max);
// console.log(min);

// fisher yates sorting for random 

// for(let i=arr.length-1;i>=0;i--){
//   let j=Math.floor(Math.random()*(i+1));
//   let temp=arr[i];
//   arr[i]=arr[j];
//   arr[j]=temp;
// }

// ascending and descending sorting here 
// let result=arr.sort(function(a,b){return b-a});
// let result=arr.sort(function(a,b){return a-b});
// console.log(arr)





// const part=myArr.splice(1,5);
// const part=myArr.splice(2);
// const part=myArr.slice(0,3);
// const part1=myArr.slice(2);
// const part2=myArr.slice(4);
// console.log(part);
// console.log(part1);
// console.log(part2);

// push method 
// myArr.push(420);
// console.log(myArr);
// pop method
// myArr.pop();
// console.log(myArr);

// shift and unshift method using here 
// myArr.shift();
// console.log(myArr);
// myArr.unshift("Adiyat")
// console.log(myArr);

// concate two  or more array

// const arrOne=['a','b','c','d'];
// const arrTwo=[1,2,3,4,5];
// const arrThree=[6,8,7];
// let finalArr=myArr.concat(arrOne, arrTwo,);
// for(const item in finalArr){
//   console.log(finalArr[item])
// }
// console.log(finalArr);









// Tower of hanoi

// function towerOfHanoi(n, from, to, via){
//   if(n===1){
//     console.log(`Move 1 step from ${from} to ${to} via ${via}`);
//     return;
//   }

//   towerOfHanoi(n-1,from,via,to);
//   console.log(`Move n from ${from} to ${to} via ${via} `);
//   towerOfHanoi(n-1,via,to,from);
  
// }

// towerOfHanoi(2,'A','B','C');




















// climbing staircase 

// function climbStaircase(n){
//   let noOfWays=[1,2];
//   for(let i=2;i<=n;i++){
//     noOfWays[i]=noOfWays[i-1]+noOfWays[i-2];
//   }
//   return noOfWays[n-1];
// }


// console.log(climbStaircase(1))
// console.log(climbStaircase(2))
// console.log(climbStaircase(3))
// console.log(climbStaircase(4))
// console.log(climbStaircase(5))
// console.log(climbStaircase(6))
// console.log(climbStaircase(7))













// cartesian product
// function CartesianProduct(setA, setB){
//   let result=[];
//   for(let i=0;i<setA.length;i++){
//     for(let j=0;j<setB.length;j++){
//       result.push([setA[i],setB[j]]);
//     }
//   }
//   return result;
// }


// let setOne=[1,2,4,5,6];
// let setTwo=[7,8,9,10];
// let finalResult=CartesianProduct(setOne, setTwo);

// console.log(finalResult);























// reverse string
// function reverseString(str){

//   let result='';
//   for(let i=str.length-1;i>=0;i--){
//     result+=str[i]
//   }
//   return result;
// }

// console.log(reverseString("Adiyat"));


// function reverseString(str){
//   let n=str.length-1;
//   let result;
//   for(let i=0;i<parseInt(n/2,10);i++){
//    str=swap(str,i,n-i-1);
//   }
//   return str;
// }

// function swap(str,i,j){
//   let char=str.split('');
//   let temp=char[i];
//   char[i]=char[j];
//   char[j]=temp;
//   return char.join('');
// }


// console.log(reverseString("Adiyat"));





//iterative way reverse string
//pointer method reverse string


// bubble sort
// function bubbleSort(arr) {
//   let swapped;
//   do {
//     swapped=false;

//     for (let i = 0; i < arr.length-1; i++) {
//       if (arr[i]>arr[i+1]) {
//         let temp=arr[i];
//         arr[i]=arr[i+1];
//         arr[i+1]=temp;
//         swapped=true;
//       }
//     }
//   } while (swapped)
  
// }


// let arr=[6,4,7,3,7,20,7,80];
// bubbleSort(arr);
// console.log(arr);
// insertion sort

// function InsertionSort(arr) {

//   for (let i = 1; i < arr.length; i++) {
//     let numToInsert=arr[i];
//     let j=i-1;
//     while (j>=0 && arr[j]>numToInsert) {
//       arr[j+1]=arr[j];
//       j=j-1;
//     }
//     arr[j+1]=numToInsert;
    
//   }
  
// }

// let arr=[5,3,6,7,8,21,21];
// InsertionSort(arr);
// console.log(arr);

// quick sort

// function quickSort(arr) {
//   if (arr.length<2) {
//     return arr;
//   }

//   let pivot=arr[arr.length-1];
//   let leftArr=[];
//   let rightArr=[];

//   for (let i = 0; i < arr.length-1; i++) {
//     if(arr[i]<pivot){
//       leftArr.push(arr[i]);
//     }else{
//       rightArr.push(arr[i]);
//     }
//   }
//   return [...leftArr, pivot, ...rightArr];
// }

// let arr=[6,4,7,2,8,7,90];
// let result= quickSort(arr);
// console.log(result)

// merge sort



























// merge sort array here 

// function mergeSort(arr) {

//   if(arr.length<2){
//     return arr;
//   }

//   let mid=Math.floor(arr.length/2);
//   let leftArr=arr.slice(0, mid);
//   let rightArr=arr.slice(mid);

//   return merge(mergeSort(leftArr),mergeSort(rightArr));
// }

// function merge(leftArr, rightArr) {
//   let sortedArr=[];

//   while (leftArr.length && rightArr.length) {
//     if(leftArr[0]<=rightArr[0]){
//       sortedArr.push(leftArr.shift());
//     }else{
//       sortedArr.push(rightArr.shift());
//     }
//   }

//   return [...sortedArr, ...leftArr, ...rightArr];
  
// }


// let arr=[5,3,7,6,8,9,2,1,20,50,23];
// let result=mergeSort(arr);
// console.log(result);


// quick sort
// function quickSort(arr) {
//   if(arr.length<2){
//     return arr;
//   }
//   // pivot value
//   let pivot=arr[arr.length-1];
  
// // left arr
//   let left=[];
  
// // right arr
//   let right=[];
//   for (let i = 0; i <arr.length-1; i++) {
//     if(arr[i]<pivot){
//       left.push(arr[i])
//     }else{
//       right.push(arr[i])
//     }
//   }
//   return [...quickSort(left), pivot , ...quickSort(right)];
  
// // return value using ... operator by calling quicksort function itself

// }

// let arr=[5,2,7,8,9,10,3,2,124,67,32]
// let result=quickSort(arr);
// console.log(result);




// insertion sort
// function InsertionSort(arr) {
//   for(let i=1; i<arr.length;i++){
//   let numberToInsert=arr[i];
//     let j=i-1;
//     while (j>=0 && arr[j]>numberToInsert) {
//       arr[j+1]=arr[j];
//       j=j-1;
//     }
//     arr[j+1]=numberToInsert;
    
//   }
// }

// let arr=[6,4,5,7,8,3,9,1,2,3,4,12,15];
// InsertionSort(arr);
// console.log(arr);











// bubble sort

// function bubbleSort(arr){

//   let swapped;
//   do{
//     swapped=false;
//     for(let i=0;i<arr.length-1;i++){
//       if(arr[i]>arr[i+1]){
//         let temp=arr[i];
//         arr[i]=arr[i+1];
//         arr[i+1]=temp;
//         swapped=true
//       }
//     }
//   } while(swapped);
// }



// let arr=[4,2,7,3,9,6,1];

// bubbleSort(arr);
// console.log(arr);










// binarySearch Again here 
// function binarySearch(arr, target){

//   let leftIndex=0;
//   let rightIndex=arr.length-1;

//   // using loop for iteration

//   while(leftIndex<=rightIndex){
//     let middleIndex=Math.floor((leftIndex+rightIndex)/2);
//     if(target===arr[middleIndex]){
//       return middleIndex;
//     }

//     if(target <arr[middleIndex]){
//       rightIndex=middleIndex-1;
//     }else{
//       leftIndex=middleIndex+1;
//     }
//   }
//   return -1;
// }

// console.log(binarySearch([2,3,4,5,7,8,9,10],8))
// console.log([2,3,4,5,7,8,9,10].length)




// binary search in a recursive way


// function RecursiveBinarySearch(arr,target){
//   return Search(arr, target, 0, arr.length-1);
// }

// function Search(arr,target,leftIndex, rightIndex){
//   if(leftIndex>rightIndex){
//     return -1;
//   }
// let middleIndex=Math.floor((leftIndex+rightIndex)/2);
  
  
//   if(target===arr[middleIndex]){
//     return middleIndex;
//   }
//   if(target<arr[middleIndex]){
//     return Search(arr,target, leftIndex, middleIndex-1)
//   }else{
//    return  Search(arr, target, middleIndex+1, rightIndex)
//   }
// }


// function binarySearch(arr,target){
//   let leftIndex=0;
//   let rightIndex=arr.length-1;

//   while(leftIndex<=rightIndex){
//     let middleIndex=Math.floor((leftIndex+rightIndex)/2);
//     if(target===arr[middleIndex]){
//       return middleIndex;
//     }
//     if(target<arr[middleIndex]){
//       rightIndex=middleIndex-1;
//     }else{
//       leftIndex=middleIndex+1;
//     }
//   }
//   return -1;
// }


// console.log(RecursiveBinarySearch([1,2,3,4,5,6,7,8,9,10,11,21,13,14],7))
// console.log(RecursiveBinarySearch([1,2,3,4,5,6,7,8,9,10,11,21,13,14],50))
// console.log(RecursiveBinarySearch([1,2,3,4,5,6,7,8,9,10,11,21,13,14],10))



// // binary search algorithms
//  function binarySearch(arr,target){
//    let leftIndex=0;
//    let rightIndex=arr.length-1;

//    while(leftIndex<=rightIndex){
//      let middleIndex=Math.floor((leftIndex+rightIndex)/2);
//      if(target===arr[middleIndex]){
//        return middleIndex;
//      }
//      if(target<arr[middleIndex]){
//        rightIndex=middleIndex-1;
//      }else{
//        leftIndex=middleIndex+1;
//      }
//    }
//  }


// console.log(binarySearch([1,2,4,5,6,7,8,9,10,11,12,13,14,15],10));
// console.log(binarySearch([1,2,4,5,6,7,8,9,10,11,12,13,14,15],1));
// console.log(binarySearch([1,2,4,5,6,7,8,9,10,11,12,13,14,15],11));
// console.log([1,2,4,5,6,7,8,9,10,11,12,13,14,15],10);


// linear Search algorithms 

// function linearSearch(arr,target){

//   // for iteration using loop
//   for(i=0;i<arr.length;i++){
//     if(arr[i]===target){
//       return i
//     }
//   }
//   return -1;
// }


// let arr=[1,2,4,5,6,7,9,8,90];

// console.log(linearSearch(arr,9))
// console.log(linearSearch(arr,11))

// // Check Prime number from the input 
// function isPrime(n){
//   if(n<2){
//     return false;
//   }

//   //in a iterativ way

//   for(i=2;i<=n;i++){
//     if(n%i===0){
//       return false;
//     }
//   return true;
//   }
// }




// console.log(isPrime(5))
// console.log(isPrime(1))
// console.log(isPrime(7))




// function factGet(n){
//   if(n===1){
//     return 1;
//   }
//   return n*factGet(n-1)
// }




// // count factorial number

// function factGet(n){
//   let total=1;

//   for (let i=2;i<=n;i++){
//     total*=i;
//   }
//   return total;
  
// }

// console.log(factGet(5));
// console.log(factGet(4));





// fibonacci using recursive method

// function fibo(n){

//   //base section 
//   if(n===1){
//     return [0,1];
//   }else{
//     let s=fibo(n-1);
//     s.push(s[s.length-1]+s[s.length-2]);
//     return s;
//   }
// }



// console.log(fibo(5))
// console.log(fibo(10))






// // fibonacio number by using iterative method 

// function fibonacci(n){
//   // initial value of the following array
//   let sum=[0,1];
// // using loop for iteration 
//   for(let i=2;i<=n;i++){
//     sum[i]=sum[i-1]+sum[i-2];
//   }

//   // return the value 
//   return sum;
// }

// console.log(fibonacci(10));
// console.log(fibonacci(5));
// console.log(fibonacci(1));