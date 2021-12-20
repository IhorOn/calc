function calc() {
    let num1 = document.querySelector('.num1').value;
    let num2 = document.querySelector('.num2').value;
    const select = document.querySelector('#select').value;
    num1 = parseInt(num1);
    num2 = parseInt(num2);

    let result = 0;

    switch (select) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            result = num1 / num2;
            break;
    }

    document.querySelector('.out').innerHTML = Math.round(result);
}


