function initApp() {
  document.getElementById('mensaje').textContent = '¡App cargada con éxito!';
}

function suma(a, b) { return a + b; } // Función simple para probar

// Export para tests (solo en Node.js/Jest)
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { suma, initApp };
} else {
  // Para el navegador, ejecuta initApp automáticamente
  initApp();
}