// p.331 연습문제 11번

// let num = Number(prompt("길이를 입력하세요."))
// let inch = num/2.54;
// let feet = inch/12;

// document.write("inch =" + inch.toFixed(2));
// document.write("<br>");
// document.write("feet =" + feet.toFixed(2));

// .toFixed(표시 원하는 소수점 자리수) : 긴 소수를 줄여주는 역할.

// p.331 연습문제 12번

// let num1 = Number(prompt("반지름"));
// let num2 = Number(prompt("높이"));
// let result = (num1 * num1 * 3.14) * num2;

// document.write("부피 =" + result.toFixed(2));

// p.331 연습문제 13번

// let num = Number(prompt("숫자를 입력하세요."));

// let thousand = parseInt(num/1000);
// let hundred = parseInt(num%1000/100);
// let ten = parseInt((num%1000)%100/10);
// let one = parseInt(num%1000%100%10);

// document.write(thousand + " " + hundred + " " + ten + " " + one);

// p.332 연습문제 14번
// let num = Number(prompt("연도를 입력하세요."));

// let arr = ["원숭이띠", "닭띠", "개띠", "돼지띠", "쥐띠", "소띠", "범띠", "토끼띠"
//            , "용띠", "뱀띠", "말띠", "양띠"];
// let year = num % 12;
//         for(let i=0; i<12; i++) {
//             // console.log("i" + 1); 확인할 수 있다.
//         if (year == i) {
//             document.write(arr[i]);
//         }
//         }

//p.332 연습문제 15번 (연습문제 (test8.html) 참고)

//p.332 연습문제 16번
//     function factorial(num) {
//         let result = 1;

//         for(let i=1; i<=num; i++) {
//             result *= i;
//         }

//         return result;
//     }
//    let inp_num = Number(prompt("숫자를 입력해 주세요."));
//    document.write(factorial(inp_num));
