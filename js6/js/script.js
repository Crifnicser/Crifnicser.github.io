//1
// function hello1() {
//     return console.log('Привіт JacaScript');
// }
// hello1();


//2
// function hello2(name){
//     return console.log('Привіт,',name);
// }
// hello2('Микита.');


//3
// function mull(n,m){
//     return console.log(n+m,n*m,n-m);
// }
// mull(3,2);


//4
// function repeat (str=' ', n=2) {
//     for (let i=0; i<n; i++) {
//         console.log(str);
//     }
// }
// repeat('', 2);


//5
// function avg(){
//     let aver=0,
//         sum = 0,
//         count=0;
//         for(const argument of arguments){
//             sum+=argument;
//             count++;
//         }
//         aver=sum/count;
//         console.log(aver);
// }
// avg(5,4,3);


//6
// function n(a,b){
//     nul();
//     function nul(){
//         return console.log(a+b, a-b, a*b);
//     }
// }
// n(10,5);

//7
// function operation(m, n, o) {
//     console.log(m+n+o);
// }    
// let o = function(a, b) {
//     return a+b;
// };
// operation(2, 3, o(1,3));

//8
// function addN(n) {
//     function addM(m) {
//         console.log(m+n);
//     }
//     return addM(2);
// }
// addN(3);
