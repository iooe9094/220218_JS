// 연습문제 1. 두 수를 입력받아서 큰 수를 출력하세요 (반환값 사용)
window.onload = function() {
    function test1() {
        let num1 = prompt("첫번 째 숫자를 입력하세요");
        let num2 = prompt("두번 째 숫자를 입력하세요");

        let result = " ";

        if ( num1 > num2) {
            result = num1;
        }
        else {
            result = num2;
        }
        return result;
    }
    document.write(test1());
}

// 해설

// window.onload = function() {
//     function max_func() {
//         let num1 = Number(prompt("첫번째"));
//         let num2 = Number(prompt("두번째"));
//         let result = "1";

//         if(num1<num2) {
//             result = num2;
//         }
//         else {
//             result = num1;
//         }
//         return result;
//     }
//     document.write(max_func());
// }
