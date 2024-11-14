function calculateAge() {
    const birthYear = document.getElementById('birthYear').value;
    const currentYear = new Date().getFullYear();
    const age = currentYear - birthYear;

    if (birthYear && !isNaN(birthYear)) {
        document.getElementById('result').textContent = `Tu edad es: ${age} años.`;
    } else {
        document.getElementById('result').textContent = 'Por favor, ingresa un año válido.';
    }
}