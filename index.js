const reverseNumber = (number) => {
	let reverse = '';
	for (let i = String(number).length; i > 0; i--) {
		reverse += String(number)[i - 1];
	}
	return reverse;
};

const getFirstPalindromicNumbers = (entryNumber, digits) => {
	let numbersInRange = [];
	const numberArray = Array.from(String(entryNumber), Number);
	let j = 0;
	let found = false;
	while (found == false) {
        for (let i = 0; i < digits; i++) {
            if (numberArray[i + j] == undefined)
                return `Não há palíndromos com ${digits} dígitos dentro do número informado.`;
            numbersInRange.push(numberArray[i + j]);
		}

		const number = numbersInRange.toString();

		if (number == reverseNumber(number)) {
			found = true;
			return numbersInRange.toString();
		}
		j += 1;
		numbersInRange = [];
	}
};


