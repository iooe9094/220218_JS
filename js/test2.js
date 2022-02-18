// 연습문제 2. 함수로 n까지의 곱을 출력하세요.

window.onload = function() {
    function test2() {
        let num = prompt("숫자를 입력하세요");
        let result = "1";
        for(let i=1; i<=num; i++) {
            result *=i;
        }
        return result;
    }
    document.write(test2());
}

// 연습문제 2. 풀이

// function factorial_func() {
//     let num = Number(prompt("첫번째"))
//     let result = 1;

//     for (let i=1; i <= num; i++) {
//         result*=i;
//     }
//     return result;
// }