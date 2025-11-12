// Prueba unitaria para suma
const { suma, initApp } = require('../script.js');

test('Suma dos números', () => {
  expect(suma(1, 2)).toBe(3);
});

// Prueba de integración para DOM
test('Verifica mensaje en DOM', () => {
  document.body.innerHTML = '<p id="mensaje"></p>'; // Configura el HTML simulado
  initApp(); // Llama a la función que modifica el DOM
  expect(document.getElementById('mensaje').textContent).toBe('¡App cargada con éxito!');
});