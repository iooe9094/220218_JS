// 최대공약수 

window.onload = function () {
    function LCD_func() {
        let num1 = Number(prompt("첫 번째 숫자를 입력하세요"));
        let num2 = Number(prompt("두 번째 숫자를 입력하세요"));
        let result = 0;
        let minValue = 0;

        // 2가지 수 중 작은 수 찾기
        if (num1<num2) {
            minValue = num1;
        }
        else {
            minValue = num2;
        }
        for(let i=minValue; i>1; i--) {
            if (num1 % i == 0 && num2 % i == 0 ) {
                result = i;
                break;
            }
        }
        return result;
    }
    document.write(LCD_func());
}