// 도전과제 1. n값은 2단 또는 3단 아무 숫자, n값을 입력받아 해당하는 구구단을 출력해보세요.
// window.onload = function() {
//     function test4() {
//         let num = Number(prompt("숫자를 입력하세요"));
//         let result = " ";

//         for (let i=1; i<=9; i++) {
//             result = [num + " x " + i " = " + (num*i) + "<br>"];
//         }
//             return result;
//     }
//     document.write(test4());
// }

// // 해설
let num = Number(prompt("첫번 째 숫자를 입력하세요."))
for(let i=1; i <=9; i++) {
    document.write(num + "x" + i + " = " + i*num + "<br>");
}