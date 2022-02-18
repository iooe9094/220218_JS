// 연습1. 두 숫자 a,b가 입력되는데, a>b면 "a가 큼", a=b면 "a와 b가 같음", a<b면 "b가 큼"을 출력하세요

// window.onload = function() {
//     let num1 = Number(prompt("첫번 째 숫자를 입력하세요."));
//     let num2 = Number(prompt("두번 째 숫자를 입력하세요."));
//     if ( num1 > num2 ) {
//         alert(num1 + "이 큽니다.");
//     }
//         else {
//             if ( num1 < num2) {
//                 alert(num2 + "이 큽니다.");
//             }
//             else {
//                 alert(num1 + "과" + num2 + "는 같습니다.");
//             }
//             }
// }

// 연습2. 입력값이 주어지면 1->도 2->개 3->걸 4->윷 나머지숫자->모 출력하세요

// window.onload = function () {
//     function play() {
//         let num = Number(prompt("숫자를 입력하세요."));
//         let array = ["도", "개", "걸", "윷", "모"];
//         let result = " ";

//         for (i=num; i<=array.length; i++) {
//         if (num=0) {
//             result = "모";
//         }
//         else {
//             if (num >= 5) {
//             result = "모";
//             }
        
//         else {
//             result = array(i);
//             }
//         }    
//         return result;
//         }
//         document.write(play());
//     }
// }
// -------------------------------------------------------

// window.onload = function() {
//     let num = (prompt("숫자를 입력하세요."));
//     if (num == 0) {
//         alert("모 입니다.");
//     }
//     else if (num == 1) {
//         alert("도 입니다.");
//     }
//     else if (num == 2) {
//         alert("개 입니다.");
//     }
//     else if (num == 3) {
//         alert("걸 입니다.");
//     }
//     else if (num == 4) {
//         alert("윷 입니다.");
//     }
//     else {
//         alert("모 입니다.");
//     }
// }

// 연습3. 입력한 개수만큼 별(*)을 출력하세요.
// 연습4. n이 입력되면 다음과 같은 삼각형을 출력하세요.

window.onload= function () {
        let num = prompt("숫자를 입력하세요.");
        let result = " ";
        
        for (let i=0; i<num; i++) {
        result = result + "*";
        document.write(result + "<br>");// 로 하면 삼각형 밑으로 만들어지며 내려옴.
}
}