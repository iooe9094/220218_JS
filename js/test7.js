// 도전과제 2. 5개의 정수들의 최대값과 최소값을 구하는 프로그램을 작성하세요.
// arr = [3, 7, 10, 6, 4]
// Math.max().apply(null, arr), Math.min().apply(null, arr)

window.onload = function() {
    function min_max_func() {
        let array = [3, 7, 10, 6, 4];
        let num1 = Number(prompt("Math.max"))
        let num2 = Number(prompt("Math.min"))
        for (i=1; i<=array.length; i++ ) {
            if (i = )
        }
    }
}

// 해설
function max_func() {
    let array = [3, 7, 10, 6, 4];
    let maxValue = Math.max.apply(null, arr);
    let minValue = Math.min.apply(null, arr);

    document.write('Max : ' + maxValue);
    document.write('<br>');
    document.write('Min : ' + minValue);
}