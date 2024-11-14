const formulario = document.getElementById('formulario');
const temperaturaCelsius = document.getElementById('temperaturaCelsius');
const botonConvertir = document.getElementById('botonConvertir');
const resultado = document.getElementById('resultado');

botonConvertir.addEventListener('click', (e) => {
  e.preventDefault();
  
  if (temperaturaCelsius.value.trim() === "") {
    console.log("El campo de temperatura está vacío. Por favor, complete el campo antes de continuar.");
    alert("El campo de temperatura no puede estar vacío. Por favor, ingrese un valor.");
    return;
  }

  const temperatura = parseFloat(temperaturaCelsius.value);
  const temperaturaFahrenheit = convertirCelsiusAFahrenheit(temperatura);
  resultado.textContent = `${temperatura}°C es igual a ${temperaturaFahrenheit}°F`;
});

function convertirCelsiusAFahrenheit(celsius) {
  return (celsius * 9/5) + 32;
}
