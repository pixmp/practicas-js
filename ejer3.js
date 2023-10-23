document.addEventListener('DOMContentLoaded', function() {
    const resultados = document.getElementById('resultados');
    const simularButton = document.getElementById('simularButton');
  
    simularButton.addEventListener('click', function() {
      resultados.innerHTML = '';
  
      // Obtener la hora actual
      const horaActual = new Date();
      const horaActualString = `${horaActual.getHours()}:${horaActual.getMinutes()}`;
  
      // Generar un número aleatorio de minutos (entre 300 y 600 minutos, equivalente a 5-10 horas)
      const minutosAleatorios = Math.floor(Math.random() * 301) + 300;
  
      // Calcular la hora final
      const horaFinal = new Date(horaActual.getTime() + minutosAleatorios * 60000);
      const horaFinalString = `${horaFinal.getHours()}:${horaFinal.getMinutes()}`;
  
      resultados.innerHTML = `
        <p>Hora Actual: ${horaActualString}</p>
        <p>Valor Aleatorio Generado en Minutos: ${minutosAleatorios}</p>
        <p>Hora Final: ${horaFinalString}</p>
      `;
    });
  });
  