function convertCurrency() {
    const dollars = parseFloat(document.getElementById('dollars').value);
    const currency = document.getElementById('currency').value;
    let conversionRate;
    let resultMessage = '';

    if (isNaN(dollars) || dollars <= 0) {
        resultMessage = 'Por favor, ingresa un monto válido en dólares.';
    } else {
        if (currency === 'euros') {
            conversionRate = 0.85; 
        } else if (currency === 'pesos') {
            conversionRate = 20; 
        }
        
        const convertedAmount = (dollars * conversionRate).toFixed(2);
        resultMessage = `El monto convertido es: ${convertedAmount} ${currency === 'euros' ? 'euros' : 'pesos'}.`;
    }
    
    document.getElementById('result').textContent = resultMessage;
}