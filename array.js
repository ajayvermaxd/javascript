let arr1=[1,2,3,4,5,6,7,8,9]
console.log(arr1[2]);
arr1.push(200); // add new element in the last
console.log(arr1);
arr1.unshift(2000);
console.log(arr1);
arr1.pop();
console.log(arr1);
arr1.shift();
console.log(arr1);
arr1.splice(2,2,4000);
console.log(arr1);

let s1= "Hey My Name is Ajay"
//string to an array
let arr2= s1.split(" ");
console.log(arr2);
arr2[2]= 30000
console.log(arr2);
//array to string
 s1= arr2.join(" ")
console.log(s1);

//---check if elemnt is available, if not available add new element
const users =['user1','user2','user3'];

if(users.indexOf("user2")){
    console.log("This user name already exist");
}else{
    users.push('user4');

}
console.log(users);


// ---- find the text and replace it
let s= "whenever there is darkness there will be ray of light";
let s2= "light";
let arr= s.split(" ");

if(s.includes(s2)){
    console.log("word is present");
}else{
    console.log("word is missing");
}
let pos =arr.indexOf(s2);
console.log(pos);
arr[pos]= "dark";
s = arr.join(" ");
console.log(s);


