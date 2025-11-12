# Documentación del Pipeline CI/CD

Este documento detalla la configuración del workflow de GitHub Actions en `.github/workflows/ci-cd.yml`.

## Estructura General
- **Nombre**: CI/CD Pipeline
- **Triggers**: Se activa en:
  - Push a la rama `main`.
  - Pull requests a la rama `main`.
- **Jobs**: Uno principal llamado `build`, que corre en `ubuntu-latest`.

## Pasos del Workflow
1. **Checkout del código**:
   uses: actions/checkout@v2
   Descarga el código del repositorio.

2. **Instalar Node.js**:
    name: Instalar Node.js
    uses: actions/setup-node@v3
    with:
    node-version: '18'
    Configura Node.js (versión 18, ajustable).

3. **Instalar dependencias**:
    name: Instalar dependencias
    run: npm install
    Instala paquetes de `package.json` (incluyendo Jest).

4. **Ejecutar pruebas**:
    name: Ejecutar pruebas
    run: npm test
    Corre las pruebas con Jest. Si fallan, el pipeline se detiene.

5. **Construir app (opcional)**:
    name: Construir app
    run: npm run build  # Si usas un build step, como en frameworks
    En esta app estática, no es necesario, pero se incluye para escalabilidad.

6. **Desplegar a GitHub Pages**:
    name: Desplegar a GitHub Pages
    if: github.ref == 'refs/heads/main'
    uses: peaceiris/actions-gh-pages@v3
    with:
    github_token: ${{ secrets.GITHUB_TOKEN }}
    publish_dir: ./
    Solo en push a `main`. Despliega el contenido de la raíz (HTML/CSS/JS) a GitHub Pages.

## Cómo Verificar
- Ve a GitHub > Actions para logs.
- Si falla: Revisa errores en pruebas o permisos de Pages.

## Mejoras Futuras
- Agregar linting (ej: ESLint).
- Pruebas de e2e con Cypress.
- Notificaciones en fallos.