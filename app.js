////------------------------%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%---------------------------------------
//// Write a ts program to find length of a string.
// var a:any="my name is Asmar Naeem"
// console.log(`the length of string is `,a.length)
// var a:any=prompt(`enter a string`)
// var b:any=a.length
// document.write(`the length of string is ${b}`)
////---------------------%%%%%%%%%%%%%%%%%%%%%%%%%----------------------------
//// Write a ts program to copy one string to another string.
// var a:string|null[]=[]
// a=prompt(`enter a number`)
// var b:any[]=[]
// for(let i=0;i<a.length;i++)
// {
//     b[i]=a[i]
// }
// document.write(`the string is ${b}`)
// var a:any="hlo world"
// var  b:any=a.slice()
// console.log(b)
// var a:any=prompt(`enter a string`)
// var b:any=a.slice()
// document.write(`the value of b is ${b}`)
////-------------------------$$$$$$$$$$$$$$$$$$$$$$$$$-------------------------
///// Write a ts program to concatenate two strings.
// var a:any="hlo"
// var b:any=" world"
// var d:any=" world"
// var c:any=a.concat(b,d)
// console.log(c)
// var a:any=prompt(`enter first string`)
// var b:any=prompt(`enter second string`)
// var c:any=a.concat(` `,b)
// document.write(c)
////---------------------&&&&&&&&&&&&&&&&&&&&-------------------------
/////Write a ts program to compare two strings.
// var a:any="a"
// var b:any="b"
// var c:any=a.localeCompare(b)
// console.log(c)
// var a:any=prompt(`enter first string`)
// var b:any=prompt(`enter second string`)
// var c:any=a.localeCompare(b)
// document.write(c)
////-----------------------$$$$$$$$$$$$$$$$$$$$$$$$_________-------------------------------
/// Write a ts program to convert lowercase string to uppercase.
// var a:any="this is asmar naeem i am a Muhammad Asmar Naeem"
// var c:any=a.toUpperCase()
// console.log(c)
// var a:any=prompt(`enter a string`)
// var c:any=a.toUpperCase()
// document.write(c)
/////--------------------------$$$$$$$$$$$$$$$$$$$$$$$$----------------------------
//// Write a ts program to convert uppercase string to lowercase
// var a:any=prompt(`enter a string in uppercase`)
// var c:any=a.toLowerCase()
// document.write(c)
////--------------------------$$$$$$$$$$$$$$$$$$$$$$________-----------------------------
//// Write a ts program to toggle case of each character of a string.
// var a:any
//      a=prompt(`enter a string`)
// for(let i=0;i<a [i ] != '\0';i++)
// {
//     if (a[i]>='A' && a[i]<='Z') {
//         a[i]=+32
//     }
//    else  if (a[i]>='a' && a[i]<='z') {
//         a[i]=a[i]-32
//     }
// }
// document.write(a)
////---------------------$$$$$$$$$$$$$$$$$$_---------------------
////Write a ts program to find total number of alphabets, digits or special character in a string.
// var a:any="hlo 66666 &&"
// var c:any=0
// var d:any=0
// var e:any=0
// var z:any=0
// for(let i=0;i<a.length;i++)
// {
//     if(a[i]>='a' && a[i]<='z')
//     {
//            c++
//     }
//     else if(a[i]>='0' && a[i]<='9')
//     {
//            d++
//     }
//     else if(a[i]==" ")
//     {
//         z++
//     }
//     else 
//     {
//         e++
//     }
// }
// console.log(`the alphabet in a string is ${c}`)
// console.log('\n')
// console.log(`the number in a string is ${d}`)
// console.log("\n")
// console.log(`the special char in a string is ${e}`)
// console.log("/n")
// console.log(`the spaces are ${z}`)
////-----------------------$$$$$$$$$$$$$$$$$$$$--------------------------------
//// Write a ts program to count total number of vowels and consonants in a string.
// var a:any=""
// var v:any=0
// var c:any=0
// for(let i=0;i<a.length;i++)
// {
//     if(a[i]=='a' ||a[i]=='e' || a[i]=='i' || a[i]=='o' ||a[i]=='u')
//     {
//          v++
//     }
//      else 
//         {
//         c++
//     }
// }
// console.log(`the vowel in a string is ${v}\n`)
// console.log(`the constants in a string is ${c}`)
// var a:any=prompt(`enter a string`)
// var v:any=0
// var c:any=0
// for(let i=0;i<a.length;i++)
// {
//     if(a[i]=='a' || a[i]=='e' || a[i]=='i' || a[i]=='o' || a[i]=='u' )
//     {
//         v++
//     }
//     else{
//         c++
//     }
// }
// document.write(`the vowels in a string are ${v}`)
// document.write("<br>")
// document.write(`the constant in a string are ${c}`)
////-------------$$$$$$$$$$$$$$$$$$$$$$$$$$$$_----------------------------
////Write a ts program to count total number of words in a string.
// var a:any[]=[]
// a='i am a boy my name is asmar naeem'
// var c:any=1
// for(let i=0;i<a.length;i++)
// {
//     if(a[i]==' ')
//     {
//         c++
//     }
// }
// document.write(c)
////---------------------%%%%%%%%%%%%%%%%%%%%%%-------------------------
////Write a ts program to find reverse of a string.
// var a:any[]=['a','e',"asmar"]
// // for(let i=0;i<2;i++)
// // {
// //     a[i]=prompt(`enter a number`)
// // }
// var c:any=a.reverse()
// // var d:any=c.join()
// document.write(c)
//Another method
// var a:any="asmar naeem is a boy"
// var b:any=a.split(' ')
// var c:any=b.reverse()
// var d:any=c.join(" ")
// document.write(d)
// document.write("<br>")
////-------------------$$$$$$$$$$$$$$$$$$$$$$$$$$$$_--------------------------------
//// Write a ts program to check whether a string is palindrome or not.
// var a:any="kayak"
// var b:any=a.split('')
// document.write(b)
// var c:any=b.reverse()
// var z:any=c.join(' ')
// // var y:any=c.split(' ')
// if(c==a)
// {
//     document.write(`p`)
// }
// else{
//     document.write(`not`)
// }
// document.write("<br>")
// document.write(c)
// if(c==b)
// {
//     console.log(`p`)
// }
// else{
//     console.log(`n`)
// }
//Another method
// var a:any=prompt(`enter a string`)
// var b:any=a.split('')
// var c:any=b.reverse()
// if(c==b)
// {
//     document.write(`p`)
// }
// else{
//     document.write(`n`)
// }
////------------------------$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$_----------------------
////Write a ts program to reverse order of words in a given string
//  var a:any=prompt(`enter a string`)
// for(let i=0;i<a.length;i++)
// {
//     if(a[i]==" ")
//     {
//         var b=a.split(' ')
//     }
// }
// // document.write(b)
//  var c:any=b.reverse()
//  var d:any=c.join(' ')
//  document.write(d)
////---------------------------$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$_----------------------------
////14. Write a ts program to find first occurrence of a character in a given string.
// var a:any="asmar is the"
// var b:any=a.charAt(1)
// console.log(b)
////--------------------%%%%%%%%%%%%%%%%%%%%%%%-----------------------------
////Write a ts program to find last occurrence of a character in a given string.
// var a:any="enter my name"
// var b:any=a.lastIndexOf("name");
// console.log(b)
/////Another method
// var a:any="enter abdullah assi"
// var b:any=a.split('')
// // console.log(b)
// var c:any=b.lastIndexOf('l')
// console.log(c)
////--------------------------$$$$$$$$$$$$$$$$$$$$$$$$$$_---------------------------------
/////Write a ts program to search all occurrences of a character in given string.
// var a:any="i am Muhammad Asmar Naeem"
// var b:any=a.split('')
// // console.log(b)
// var c:any="a"
// var d:any=0
// for(let i=0;i<b.length;i++)
// {
//       if(b[i]=='a')
//       {
//         console.log(`this var is found at index ${i} `)
//       }
// }
// console.log(d)
// var a:any=prompt(`enter a string`)
// var b:any=a.split('')
// var n:any=prompt(`enter a var which you want to print`)
// for(let i=0;i<b.length;i++)
// {
//     if(b[i]=="a")
//     {
//        document.write(`the var is found at index at ${i} <br>`)
//     }
// }
/////-----------------------------$$$$$$$$$$$$$$$$$$$$$$------------------------
//// Write a ts program to count occurrences of a character in given string
// var a:any="This is a program.I want to become a Programmer.InShAllah One day i will become a programmer"
// var b:any=a.split('')
// var d:any=0
// for(let i=0;i<b.length;i++)
// {
//     if(b[i]=="T")
//     {
//       d++
//     }
// }
// console.log(d)
////-----------------------%%%%%%%%%%%%%%%%%%%%%%_----------------------------------
//. Write a ts program to find highest frequency character in a string.
// function get(element:any)
// {
//     const a:any={}
//      element.split('').forEach(element => {
//         a[element]=a[element]?a[element]+1:1
//     });
//  console.log(a)
//  var m:any=1
//  var t:any
//  for(let k in a)
//  {
//    if (a[k]>m) {
//     m=a[k]
//     t=k
//    }
//  }
//  console.log(t)
// }
// get("hhllooo birdddd")
////-----------------------$$$$$$$$$$$$$$$$$$$$$$$$_-------------------------
////find lower frequency character
// function fr(element:any) {
//   var a:any={}
//   element.split('').forEach(element =>
//     {
//    a[element]=a[element]?a[element]+1:1
//     });
//     console.log(a)
//     var m:any=1
//     var t:any
//     for(let k in a)
//     {
//       if(a[k]<m)
//       {
//         m=a[k]
//         t=k
//       }
//     }
//     console.log(t)
// }
// fr("hll")
////------------------------------%%%%%%%%%%%%%%%%%%%%%%%%%%%%%--------------------------------------
////Write a ts program to count frequency of each character in a string.
// var a: any = "tttttaatyy hh"
// var b: any = a.split('')
// var c:any=0
// var n:any
//  for(let j=0;b[j];j++)
//     n=j
// document.write(`count frequency of each character`)
// document.write("<br>")
// for (let i = 0; i < b.length; i++) {
//      c=1
//     if (b[i]) {
//         for (let j = i + 1; j < b.length; j++) {
//             if (b[i] == b[j]) {
//             c++
//             //  b[j]='\0'
//             }
//         }
//         document.write(`${b[i]} = ${c} <br>`)
//     }
//  }
////Another method
//  var c:any=element => 
//  {     
//     return element.split('').reduce((a,b)=>{
//         a[b]?a[b]++:a[b]=1
//         return a
//     },{})
// } 
//   console.log(c("asmar is a brand"))
////Another method
// function get(element:any)
// {
//     const a:any={}
//      element.split('').forEach(element => {
//         a[element]=a[element]?a[element]+1:1
//     });
//  console.log(a)
// 
// get("this ooos")
/////-------------------------%%%%%%%%%%%%%%%%%%%_---------------------------
//// Write a ts program to remove first occurrence of a character from string.
// var a:any="hlo   world"
// // var b:any=a.split('')
// var c:any[]=[]
//      c=a.slice(1)
// console.log(c)
////---------------------------------%%%%%%%%%%%%%%%%%%%%%%%%%%%%%--------------------------------
//// Write a ts program to remove last occurrence of a character from string.
// var a:any="hlo world"
// var b:any=a.split('')
// var c:any=a.slice(0,b.length-1)
// console.log(c)
////------------------------------------%%%%%%%%%%%%%%%%%%%%%----------------------------
//// Write a ts program to remove all occurrences of a character from string.
// function a(str:any) {
//   var b:any=str.replace(/A/g,"a")
//   console.log(b)
// }
// a("This is Asmar Naeem")
// function a(str:any) {
//   //  var c:any=prompt("enter a string")
//    document.write(str)
//    document.write("<br>")
//     var d:any=prompt(`enter a var which want to replace`)
//     var e:any=prompt(`enter  exchange var`)
//    var z:any=str.replaceAll(d,"")
//    document.write(z)
// }
// var str:any=prompt("enter a value")
// a(str)
// //  var a:any=prompt(`enter a string`)
/////---------------------------$$$$$$$$$$$$$$$$$$$$$$$$$$$$$-----------------------------------------
//// Write a ts program to remove all repeated characters from a given string.
// function by(str:any) {
//   //document.write(b)
//   var b:any=str.split('')
//   console.log(b)
//   var c:any=[new Set(b)]
//  console.log(c)
// }
// var a:any="thisthtrrbbis"
// by(a)
// let chars = ['A', 'B', 'A', 'C', 'B'];
// let uniqueChars = [...new Set(chars)];
// console.log(uniqueChars);
////------------------------------$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$_-------------------------
////Write a ts program to replace first occurrence of a character with another in a string.
//console.log("hlo")
//    function first(str:any) {
//     var str:any=str.split('')
//     var b:any='l'
//     var c:any='@'
//     for(let i=0;i<=str.length;i++)
//     {
//         if(str[i]==b)
//         {
//             str[i]=c
//             break
//         }
//     }
//     console.log(str)
//    }
//    first("Hello")
////-----------------------------$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$_--------------------------------------
////Write a ts program to replace last occurrence of a character with another in a string.
// function last(str:any) {
//      str=str.split('')
//      str=str.reverse()
//      var a:any='l'
//      var b:any='@'
//      for(let i=0;i<str.length;i++)
//      {
//         if(str[i]==a)
//         {
//             str[i]=b
//             break
//         }
//      }
//      str=str.reverse()
//      console.log(str)
// }
// last("hello")
/////----------------------------$$$$$$$$$$$$$$$$$_-----------------------------------------
////    Write a ts program to replace all occurrences of a character with another in a string.
// function rep(str:any) {
//    // str=str.split('')
//     var b:any=str.replaceAll('l','e')
//    // var c:any=b.join('')
//     console.log(b)
// }
// rep("hello")
/////------------------------------------$$$$$$$$$$$$$$$$$$$$_-----------------------
////Write a ts program to find first occurrence of a word in a given string.
// var a:any="this is world i am a boy"
// var b:any=a.split(' ')
// console.log(b)
// var c:any=b.slice(0,1)
// var d:any=c.join(' ')
// console.log(d)
////-------------------$$$$$$$$$$$$$$$$$$_--------------------------------
/////Write a ts program to find last occurrence of a word in a given string.
// var a:any="i am a boy i will become a good programmer one day inshAllah"
// var b:any=a.split(' ')
// var c:any=b.slice(-1)
// console.log(c)
////-----------------------------$$$$$$$$$$$$$$$$$$$$$-----------------------------------
/////Write a ts program to search all occurrences of a word in given string.
// function s(str:any) {
//   //enter the word which you want to search
//   var b:any="is"
//   str=str.split(' ')
//   for(let i=0;i<str.length;i++)
//   {
//     if (str[i]==b) {
//       console.log(`the index of this word is ${i}`)
//     }
//   }
// }
// s("this is a boy i am a is boy")
/////------------------------$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$_-----------------------------
////Write a ts program to count occurrences of a word in a given string.
// var a:any="this is a boy i am to become a programmer is"
// var b:any=a.split(' ')
// //searching word
// var c:any="a"
// var d:any=0
// for(let i=0;i<b.length;i++)
// {
//       if(b[i]==c)
//       {
//         d++
//       }
// }
// console.log(`this number is found in string in ${d}`)
////---------------------&&&&&&&&&&&&&&&&&&&&&&&&_----------------------------------
//// Write a ts program to remove first occurrence of a word from string.
// var a:any="this is boy"
// var b:any=a.split(' ')
// var c:any=b.slice(1)
// var d:any=c.join(' ')
// console.log(d)
/////---------------------$$$$$$$$$$$$$$$$$$$$$$$$$$$$_----------------------------
/////Write a ts program to remove last occurrence of a word in given string.
// var a:any="this is a boy"
// var b:any=a.split(' ')
// var c:any=b.slice(0,-1)
// var d:any=c.join(' ')
// console.log(d)
// var a:any="hlo world is"
// var b:any=a.split(' ')
//  var d:any=b.pop()
//  console.log(b)
////-------------------------&&&&&&&&&&&&&&&&&&&&&&&&&------------------------------
////Write a ts program to remove all occurrence of a word in given string.
// var a:any="hlo world how are you are you well"
// var c:any=a.replaceAll("world",'')
// console.log(c)
/////------------------------&&&&&&&&&&&&&&&&&&&&&&&&&&&&_------------------------------------
//// Write a ts program to trim leading white space characters from given string.
// var a:any="      This is aboy"
// var b:any=a.trim()
// console.log(b)
/////------------------------$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$_-----------------------------------
//// Write a ts program to trim trailing white space characters from given string.
// var a:any="hlo          "
// var b:any=a.trim()
// console.log(a)
/////-------------------------$$$$$$$$$$$$$$$$$$$$$$$$______________---------------------------
////Write a ts program to trim both leading and trailing white space characters from given string.
// var a:any="               hlo world             "
// var b:any=a.trim()
// console.log(b)
///////----------------------conditional operators programming exercise
//// Write a ts program to find maximum between two numbers using conditional operator.
// var c:any[]=[]
// //var c:number[]=[]
// for(let i=0;i<2;i++)
// {
//   c[i]=prompt(`enter value`)
//   //c[i]=Number(a[i])
// }
// function max(c:any[]) {
//   var d:any=c[0]>c[1] ? `A is greater` :`b is greater`
//   document.write(d)
// }
// max(c)
///////////////////////////////
// var a:any[]=[]
// // var b:any=9
// for(let k=0;k<2;k++)
// {
//       a[k]=prompt(`enter a value`)
// }
// function max(a:any[]) {
//   var c:any=a[0]>a[1] ? "a is greater" : "b is greater"
// document.write(c)
// }
// max(a)
/////-------------------------$$$$$$$$$$$$$$$$$$$_---------------------------------
////Write a ts program to find maximum between three numbers using conditional operator.
// var a:any=[2,8,4]
// var b:any=a[0]>a[1] ? a[0] :a[1]
// var c:any=a[2]>b?a[2]:b
// console.log(c)
/////-------------------$$$$$$$$$$$$$$$$$$$$$_------------------------
///// Write a ts program to check whether a number is even or odd using conditional operator.
// var a:any=4
// var b:any=a%2==0?"even":"odd"
// console.log(b)
////////----------------------$$$$$$$$$$$$$$$$$$$$$$$$$$$_------------------
////Write a ts program to check whether year is leap year or not using conditional operator.
// var a:any=5
// var b:any=a%4==0?"this is leap year":"not leap year"
// console.log(b)
/////-----------------------------$$$$$$$$$$$$$$$$$$$$$$$$$$$_------------------------------
////Write a ts program to check whether character is an alphabet or not using conditional operator.
// var a:any='z'
// var b:any=a>='a' && a<='z' ? 'char is alphabet' :'not alphabet'
// console.log(b)
/////--------------------------$$$$$$$$$$$$$$$$$$$$$$$$$$_------------------------
/////
// List of switch case programming exercises
/////1. Write a ts program to print day of week name using switch case.
// var a: any =7
// switch (a) {
//   case 1:
//     console.log("monday");
//     break;
//   case 2:
//     console.log("tuesday");
//     break;
//   case 3:
//     console.log("wednesday");
//     break;
//   case 4:
//     console.log("Thursday");
//     break;
//   case 5:
//     console.log("Friday");
//     break;
//   case 6:
//     console.log("saturday");
//     break;
//   case 7:
//     console.log("sunday");
//     break;
//   default:
//     console.log(`enter number between 1 to 7`)
//     break;
// }
/////---------------------$$$$$$$$$$$$$$$$$$$$$_---------------------------------------
/////Write a ts program print total number of days in a month using switch case.
// var m: any = 1
// switch (m) {
//   case 1 :
//     console.log(`this month has 31 days`)
//     break;
//   case 2 :
//     console.log(`this month has 28/29 days`)
//     break;
//   case 3 :
//     console.log(`this month has 31 days`)
//     break;
//   case 4 :
//     console.log(`this month has 30 days`)
//     break;
//   case 5:
//     console.log(`this month has 31 days`)
//     break;
//   case 6 :
//     console.log(`this month has 30 days`)
//     break;
//   case 7 :
//     console.log(`this month has 31 days`)
//     break;
//   case 8 :
//     console.log(`this month has 31 days`)
//     break;
//   case 9 :
//     console.log(`this month has 30 days`)
//     break;
//   case 10 :
//     console.log(`this month has 31 days`)
//     break;
//   case 11 :
//     console.log(`this month has 30 days`)
//     break;
//   case 12 :
//     console.log(`this month has 31 days`)
//     break;
//   default:
//     break;
// }
/////-----------------&&&&&&&&&&&&&&&&&&&&&&&&&&&_-------------------------------
////Write a ts program to check whether an alphabet is vowel or consonant using switch case.
// var a:any='f'
// switch (a) {
//   case "a":
//     console.log("vowel")
//     break;
//     case "e":
//       console.log("vowel")
//       break;
//       case "i":
//         console.log("vowel")
//         break;
//         case "o":
//           console.log("vowel")
//           break;
//           case "u":
//             console.log("vowel")
//             break;
//   default:
//       console.log("constant")
//     break;
// }
/////---------------------------$$$$$$$$$$$$$$$$$$$$$$$$$$$_-----------------------
///// Write a ts program to find maximum between two numbers using switch case
// Write a ts program to find maximum between two numbers using switch case
// var a:any=118
// var b:any=11
// switch (a>b) {
//   case  true:
//     console.log("a is maximum")
//     break;
//     case false:
//       console.log("b is maximum")
//       break;
// }
////--------------------------$$$$$$$$$$$$$$$$$$$$$_--------------------
//// Write a ts program to check whether a number is even or odd using switch case
// var a:any=1
// switch (a%2==0) {
//   case true:
//     console.log('number is even')
//     break;
//   default:
//     console.log(`number is odd`)
//     break;
// }
/////----------------------------$$$$$$$$$$$$$$$$$$_-------------------------
///// Write a ts program to check whether a number is positive, negative or zero using switch case.
// var a:any=7
// switch (a>0) {
//   case true:
//     console.log("number is positive")
//     break;
//     case false:
//       if (a<0) {
//         console.log(`number is negative`)
//       }
//       else if(a==0)
//       {
//         console.log(`number is zero`)
//       }
//      break;
// }
//////---------------------$$$$$$$$$$$$$$$$$$$$$$$$$$$_-------------------------
/////Write a ts program to find roots of a quadratic equation using switch case.
// var a:any=2
// var b:any=2
// var c:any=2
// var d:any=(b*b-4*a*c)/2*a
// // console.log(d)
// switch (d>0) {
//   case  true:
//         var r1:any=(-b+(Math.sqrt(d)))/2*a
//         r1=parseInt(r1)
//         var r2:any=(-b-Math.sqrt(d))/2*a
//         r2=parseInt(r2)
//         console.log(`two distinct and real root exist `,r1,"or",r2)
//     break;
//     case false:
//     if (0>d) {
//       r1=r2=-b/2*a
//       var i:any=Math.sqrt(-d)/2*a
//       i=parseInt(i)
//       console.log(r1,'+',i,'i','or',r2,'-',i,'i')
//     }
//     else
//     {
//       r1=r2=-b/2*a
//       console.log(`real and equal`,r1,'or',r2)
//     }
//     break;
// }
/////---------------------------$$$$$$$$$$$$$$$$$$$$_---------------------------------
///// Write a ts program to create Simple Calculator using switch case.
// var a:any=10
// var b:any=10
// var o:any='*'
// switch (o) {
//   case '+':
//     console.log(`the sum is `,a+b)
//     break;
//     case '-':
//     console.log(`the subtraction is `,a-b)
//     break;
//     case '*':
//     console.log(`the multiply is `,a*b)
//     break;
//     case '/':
//     console.log(`the division is `,a/b)
//     break;
//     case '%':
//     console.log(`the Mudulus is `,a%b)
//     break;
//   default:
//     console.log('enter any operator')
//     break;
// }
