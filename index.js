function convertToWords() {
  const numberInput = document.getElementById('numberInput');
  const result = document.getElementById('result');

  const number = parseInt(numberInput.value);
  if (isNaN(number)) {
    result.textContent = 'Invalid input. Please enter a valid number.';
    return;
  }

  const words = convertNumberToWords(number);
  result.textContent = `The number in words is: ${words}`;
}

function convertNumberToWords(number) {
  const units = ['', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine', 'Ten', 'Eleven', 'Twelve', 'Thirteen', 'Fourteen', 'Fifteen', 'Sixteen', 'Seventeen', 'Eighteen', 'Nineteen'];
  const tens = ['', '', 'Twenty', 'Thirty', 'Forty', 'Fifty', 'Sixty', 'Seventy', 'Eighty', 'Ninety'];
  const scales = ['', 'Thousand', 'Lakh', 'Crore'];

  if (number === 0) {
    return 'Zero';
  }

  let words = '';

  if (number < 0) {
    words += 'Minus ';
    number = Math.abs(number);
  }

  let crorePart = Math.floor(number / 10000000);
  let lakhPart = Math.floor((number % 10000000) / 100000);
  let thousandPart = Math.floor((number % 100000) / 1000);
  let remainingPart = number % 1000;

  if (crorePart > 0) {
    words += convertThreeDigitNumber(crorePart) + ' Crore ';
  }

  if (lakhPart > 0) {
    words += convertThreeDigitNumber(lakhPart) + ' Lakh ';
  }

  if (thousandPart > 0) {
    words += convertThreeDigitNumber(thousandPart) + ' Thousand ';
  }

  if (remainingPart > 0) {
    words += convertThreeDigitNumber(remainingPart);
  }

  return words.trim();
}

function convertThreeDigitNumber(number) {
  const units = ['', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine', 'Ten', 'Eleven', 'Twelve', 'Thirteen', 'Fourteen', 'Fifteen', 'Sixteen', 'Seventeen', 'Eighteen', 'Nineteen'];
  const tens = ['', '', 'Twenty', 'Thirty', 'Forty', 'Fifty', 'Sixty', 'Seventy', 'Eighty', 'Ninety'];

  let words = '';

  let hundreds = Math.floor(number / 100);
  let tensUnits = number % 100;

  if (hundreds > 0) {
    words += units[hundreds] + ' Hundred ';
  }

  if (tensUnits > 0) {
    if (tensUnits < 20) {
      words += units[tensUnits];
    } else {
      let tensDigit = Math.floor(tensUnits / 10);
      let unitsDigit = tensUnits % 10;
      words += tens[tensDigit] + ' ' + units[unitsDigit];
    }
  }

  return words.trim();
}
