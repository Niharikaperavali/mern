// // // console.log("hello world");
// // // var a=10;//global scope
// // // var a=30;
// // // a=40
// // // console.log(a);//we can redeclare and reassign the same variable

// // // let b=20;//block scope
// // // b=100;
// // // console.log(b);//we can reassign the same variable but not redeclare

// // // const c=30;//block scope
// // // console.log(c);//we cannot reassign or redeclare the same variable


// // // //data types in javascript
// // // var an=50;//number
// // // var ba="hello";//string can be '' or "" or ``//there is no char data type in js
// // // var ca=true;//boolean
// // // var da=null;//null
// // // var ea;//undefined
// // // console.log(typeof ca);//to check the data type of variable

// // // var big=768929090;
// // // var symbol=Symbol()
// // // console.log(symbol);

// // //Arithmetic operators
// // var x=10;
// // var y="5";
// // console.log(x+y);//addition
// // console.log(x-y);//subtraction
// // console.log(x*y);//multiplication
// // console.log(x/y);//division
// // console.log(x%y);//modulus
// // console.log(x**y);//exponentiation

// // //relational operators
// // console.log(x>y);//greater than
// // console.log(x<y);//less than
// // console.log(x>=y);//greater than or equal to
// // console.log(x<=y);//less than or equal to
// // console.log(x==y);//equal to
// // console.log(x===y);//datatype and value equal to
// // console.log(x!=y);//not equal to
// // console.log(x!==y);//datatype and value not equal to

// // //logical operators
// // var p=true;
// // var q=false;
// // console.log(p&&q);
// // console.log(p||q);
// // console.log(!p);

// // //array
// // var arr=[10,20,30,40,50];
// // console.log(arr);
// // console.log(typeof arr);

// // //object
// // var obj={
// //     name:"niha",
// //     age:22,
// //     city:"bangalore"
// // };
// // console.log(obj);
// // console.log(typeof obj);

// // //in control statements:there are two types:conditional statements and loops
// // //conditional statements:if,if-else,if-else-if,switch

// // //looping statements:for,while,do-while
// // for(var i=0;i<5;i++){
// //     console.log(i);//for loop
// // }

// // let j=1//while loop
// // while(j<=5){
// //     console.log(j);
// //     j++;
// // }
// // let k=1;//do-while loop
// // do{
// //     console.log(k);
// //     k++;
// // }while(k<=5);

// // //find even or odd
// // for(let i=0;i<10;i++){
// //     if(i%2==0){
// //         console.log("even");
// //     }else{
// //         console.log("odd");
// //     }
// // }
// // //find largest of three numbers
// // let a=10;
// // let b=20;
// // let c=15;
// // if(a>b && a>c) console.log("a is largest");
// // else if(b>a && b>c) console.log("b is largest");
// // else console.log("c is largest");
// // //terinary operator
// // let grade=25;
// // let marks=grade>90?"A grade":grade>80?"B grade":grade>70?"C grade":grade>60?"D grade":"fail";
// // console.log(marks);

// // //function
// // function add(){
// // console.log(10+60)
// // }add();

// // //arrow function
// // var add = ()=>{
// // console.log(10+60)
// // }
// // add();

// // //hosting
// // add(70,20);
// // var add=function(a,b){
// //     console.log(a+b);
// // }

// //spread operator(...)
// var arr1=[10,20,30];
// var arr2=[40,50,60];
// var arr3=[...arr1,...arr2];
// console.log(arr3);

// //destructuring operator(array)
// var [x,y,z]=[100,200,300];
// console.log(x);
// console.log(y);
// console.log(z);

// //destructuring object
// var{name,age,city,marks} ={
//     name:"niha",
//     age:22,
//     city:["bangalore",'hyd'],
//     marks:{
//         maths:90,
//         c:85,
//         java:95,
//     }
// }
// console.log(name);
// console.log(age);
// console.log(city);
// console.log(marks);
//for in loop
//for arays
let arr=[10,20,30,40,50];
for(let index in arr){
    console.log(index,arr[index]);//for in loop gives index of the array
    //console.log(arr[index]);//for in loop gives value of the array
}
//for objects
var obj={
    name:"niha",
    age:22,
    city:"bangalore"
}
for(let key in obj){
    console.log(key,obj[key]);//for in loop gives key of the object
}

//for of loop
for(let val of arr){
    console.log(val);//for of loop gives value of the array
}

//map,filter,reduce are functions used with arrays
//map
var arr4=[1,2,3,4,5];
var arr5=arr4.map((val)=>{
    return val*2;
});
console.log(arr5);

//filter
var ar=[1,4,9,7,6];
var ar1=ar.filter((val)=>(val%2==0))
console.log(ar1);

//reduce
var total=ar.reduce((s,i)=>(s+i),0);
console.log(total);

var ar3 = [10, 20, 30, 40, 50];

var ar4 = ar3
  .map((val) => val * 2)            // multiply each element by 2
  .filter((val) => val % 2 === 0)   // keep only even numbers
  .reduce((s, i) => s + i, 0);      // sum all remaining elements

console.log(ar4);

//backtick(``)
var name="niha";
console.log(`hello ${name}`);

//for each
arr.forEach((val,index)=>{
    console.log(index,val);})

  //call by value
  var add=(a,b,callback)=>{
    let sum=a+b;
    callback(sum);
  }
  add(10,20,(result)=>{
    console.log(result);
  });

  //promises
  var promise=new Promise((resolve,reject)=>{
    var success=true;
    if(success){
        resolve("promise resolved");
    }else{
        reject("promise rejected");
    }
  });

  promise.then((message)=>{
    console.log(message);
  }).catch((message)=>{
    console.log(message);
  });

   //promises
  var promise=new Promise((resolve,reject)=>{
    var success=true;
    if(success){
        setTimeout(() => {
            resolve("promise resolved");
        }, 5000);
    }else{
        reject("promise rejected");
    }
  });

  promise.then((message)=>{
    console.log(message);
  }).catch((message)=>{
    console.log(message);
  });

  //const getData = () => {
  return fetch('https://jsonplaceholder.typicode.com/posts') // fetch data from API
    .then((res) => res.json())   // convert response to JSON
    .then((data) => {
      console.log(data);         // print data
    })
    .catch((err) => {
      console.log(err);          // handle error
    });
;

// call the function
getData();

//async await
const getData=async()=>{
    try{
        const res=await fetch('https://jsonplaceholder.typicode.com/posts');
       const data=await res.json();
       console.log(data);
    }catch(err){
        console.log(err);
    }
};
getData();
