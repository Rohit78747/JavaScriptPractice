// var myFriends =['Ram','Shyam','Hari'];
// console.log(myFriends[myFriends.length-1]);



// var myFriends =['Ram','Shyam','Hari'];

// for (var i=0; i<myFriends.length;i++){
//     console.log(myFriends[i])
// }


// var myFriends =['Ram','Shyam','Hari'];

// // for(let elements in myFriends){
// //     console.log(elements)
// // }

// for(let elements of myFriends){
//     console.log(elements)
// }

// var myFriends =['Ram','Shyam','Hari'];

// myFriends.forEach(function(elements,index,array){
//     console.log(elements)

// });

//Searching and Filter an Array

// var myFriends =['Ram','Shyam','Hari'];

// console.log(myFriends.indexOf('Ram'));


// const prices = [200,300,350,400,450,500,550]

// const findElem = prices.find((curValue) => {
//     return curValue < 400;
// });
// console.log(findElem);


// const prices = [200,300,350,400,450,500,550]

// const findElem = prices.findIndex((curValue) => {
//     return curValue < 400;
// });
// console.log(findElem);


// const prices = [200,300,350,400,450,500,550]
// const newPriceTag = prices.filter((elem, index) => {
//     return elem < 400;
// });
// console.log(newPriceTag)

// const months =['March','December','September','January']
// console.log(months.sort())

// CRUD OPERATION

// const animal = ['Pigs','Goats','Sheep'];
// animal.push('Chicken')
// console.log(animal)

// const animal = ['Pigs','Goats','Sheep'];
// animal.unshift('Chicken')
// console.log(animal)

// const animal = ['Pigs','Goats','Sheep'];
// console.log(animal)
// console.log(animal.pop())
// console.log(animal)

// const animal = ['Pigs','Goats','Sheep'];
// console.log(animal)
// console.log(animal.shift())
// console.log(animal)

// const months = ['Jan','March','April','June','July'];

// // const newMonth = months.splice(months.length,0,"Dec");
// // console.log(months)
// const indexOfMonth = months.indexOf('June');
// if(indexOfMonth != -1){
//     const updateMonth = months.splice(indexOfMonth,1,"june");
//     console.log(months);
// }else{
//     console.log("No Such Data Found")
// }

// const months = ['Jan','March','April','June','July'];

// const indexOfMonth = months.indexOf('June');
// if(indexOfMonth != -1){
//     const updateMonth = months.splice(indexOfMonth,1);
//     console.log(months);
//     console.log(updateMonth)
// }else{
//     console.log("No Such Data Found")
// }

// const array1 =[1,4,9,16,23]

// let newArr = array1.map((currentElement,index,arr)=>{
//     return currentElement >9;
// })
// console.log(newArr)
// console.log(array1)

//Find the square root of each element in an array ?

// let arr =[25,36,49,64,81];
// let arrSquare = arr.map((currentElement)=>{
//     return  Math.sqrt(currentElement);
// })
// console.log(arrSquare)

// let arr = [2,3,4,5,6,9]
// let arr2 =arr.map((currentElement)=>{
//    return currentElement * 2; 
// }).filter((currentElement)=>{
//     return currentElement>10;
// })
// console.log(arr2)

const arr = [['zone_1','zone_2'],
            ['zone_1','zone_2'],
            ['zone_1','zone_2'],
            ['zone_1','zone_2'],];

let flatter = arr.reduce((accum,currentValue)=>{
    return accum.concat(currentValue);
})
console.log(flatter)
