document.addEventListener('DOMContentLoaded', function() {
    const resultados = document.getElementById('resultados');
    const simularButton = document.getElementById('simularButton');
  
    simularButton.addEventListener('click', function() {
      resultados.innerHTML = '';
  
      for (let juego = 1; juego <= 10; juego++) {
        const vueltas = Math.floor(Math.random() * 6) + 5;
        const posicionFinal = Math.floor(Math.random() * 37);
  
        resultados.innerHTML += `
          <p>Nro de Juego: ${juego}</p>
          <p>Valor Aleatorio Generado: ${vueltas}</p>
          <p>Nro que cayó en la ruleta: ${posicionFinal}</p>
          <hr>
        `;
      }
    });
  });
  