document.addEventListener('DOMContentLoaded', function() {
    const resultados = document.getElementById('resultados');
    const simularButton = document.getElementById('simularButton');
  
    simularButton.addEventListener('click', function() {
      resultados.innerHTML = '';
  
      // Generar un número aleatorio que representa la posición inicial (entre 0 y 359 grados)
      const anguloInicial = Math.floor(Math.random() * 360);
  
      // Generar un número aleatorio de vueltas (entre 5 y 10)
      const vueltas = Math.floor(Math.random() * 6) + 5;
  
      // Calcular el ángulo final
      const anguloFinal = (anguloInicial + (360 * vueltas)) % 360;
  
      resultados.innerHTML = `
        <p>Posición o ángulo Inicial G.A.: ${anguloInicial}</p>
        <p>Valor Aleatorio Generado en Grados: ${vueltas * 360}</p>
        <p>Ángulo Final: ${anguloFinal}</p>
      `;
    });
  });
  