let errors = [];
function checkValidity(input) {
    let validity = input.validity;
    if (validity.patternMismatch) 
		{ errors.push('Неверный формат заполнения'); }
        if (validity.rangeOverflow) 
		{ let max = input.max;
			errors.push('Максимальное значение не может быть больше чем ' + max);}
    
		if (validity.rangeUnderflow) 
		{ let min = input.min;
			errors.push('Минимальное значение не может быть больше чем ' + min); }
}


function checkAll() {
    let inputs = document.querySelectorAll("input");

    for (let input of inputs) {
        checkValidity(input);
    }

    let errorDiv = document.querySelector('.errorMessage');
    errorDiv.innerHTML = errors.join('. \n');

}
