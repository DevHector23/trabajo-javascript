
const botonContar = document.getElementById('contarPalabras');
const parrafoInput = document.getElementById('parrafo');
const resultado = document.getElementById('resultadoPalabras');

botonContar.addEventListener('click', () => {
const texto = parrafoInput.value.trim();
const numPalabras = contarPalabras(texto);
    resultado.textContent = `El párrafo contiene ${numPalabras} palabra(s).`;
        });

function contarPalabras(texto) {
    if (texto === "") {
    return 0;
    }
    const palabras = texto.split(/\s+/); 
    return palabras.length;
}