// 연습문제 3. 두수 a와 b를 입력받아 함수로 만들어 a부터 b까지 출력하기

window.onload = function() {
    function test3() {
        let numA = prompt("첫 번째 값을 입력하세요");
        let numB = prompt("두 번째 값을 입력하세요");
        let result = " ";
        for (i=numA; i<=numB; i++) {
            // 최초 i=1; 값을 줘서 첫번 째 값이 포함이 안되었음.
            result+=i;
        }
        return result;
}
document.write(test3());
}