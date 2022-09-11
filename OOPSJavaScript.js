//   let bioData = { 
//       myName : "thapatechnical",
//       myAge : 26,
//       getData : function(){
//         console.log(`My name is ${bioData.myName} and my age is ${bioData.myAge}`);
//       }
//   }
// bioData.getData()

// let bioData = { 
//     myName : "thapatechnical",
//     myAge : 26,
//     getData (){
//       console.log(`My name is ${bioData.myName} and my age is ${bioData.myAge}`);
//     }
// }
// bioData.getData()

// console.log(this)

// function myName(){
//     console.log(myName)
// }
// myName();

// let myNames ="Rohit";
// function myName(){
//     console.log(this.myNames);
// }
// myName();

// const obj = {
//     myAge : 26,
//     myName(){
//         console.log(this)
//     }
// }
// obj.myName();


// const obj = {
//     myAge : 26,
//     myName : () => {
//       console.log(this);
//     }
// }
// obj.myName();

 let bioData = {
        myName : {
            realName : "vinod thapa",
            channelName : 'thapa technical'
        },
        // things to remember is that the myName is the key and the object is act like a value 
        myAge : 26,
        getData (){
          console.log(`My name is ${this.myName.channelName} and my age is ${this.myAge} `);
        }
      }
    
      bioData.getData();
    
