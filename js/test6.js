// 연습문제 4. 어떤 두 수 a, b가 입력으로 들어온다.
// a와 b의 관계는 a <= b 이다.
// a에서 b까지 수 중에서 3의 배수만 더하여 출력하세요.
// ex) 3과 7사이의 3의 배수는 3, 6이다 -> 3 + 6 = 9

window.onload = function() {
    // function test4() {
    //     let num1 = Number(prompt("첫 번째 숫자"));
    //     let num2 = Number(prompt("두 번째 숫자"));
    //     let result = " ";
    //     for (let i=num1; i<=num2; i++) {
    //         result+=i;
    //     }
    //         if (num1 <= num2 && i % 3 == 0) {
    //             result = num1 + num2;
    //         }
    //     return result;
    //     }
    //     document.write(test4());
    // }

// 해설
function a_b_func() {
    
    let num1 = Number(prompt("첫 번째 숫자를 입력하세요.")); // 시작값
    let num2 = Number(prompt("두 번째 숫자를 입력하세요.")); // 종료값
    let result = 0;

    // 사이값
    for (let i = num1; i < num2; i++) {
        if ( i % 3 == 0 ) {
            result+=i;
        }
    }
        return result;
    }
    document.write(a_b_func());
}
