# Práctica 3: Configuración Básica de Pipeline CI/CD

## Descripción
Este proyecto implementa un pipeline CI/CD básico utilizando GitHub Actions para una aplicación web simple. La app es una página HTML estática con CSS y JavaScript básico que muestra un mensaje y realiza una operación simple (suma). Incluye pruebas unitarias e de integración con Jest, cobertura de código, y despliegue automático a GitHub Pages.

Objetivos cumplidos:
- Automatización de pruebas en push/pull requests.
- Despliegue continuo a GitHub Pages en la rama main.
- Documentación completa y guía de contribución.

## Participantes
- Triana Olivadia García de Jesús (2023-1395)
- Adonis Mercedes Buret (2021-2396)
- Kaysha Hiciano (2023-1599)
- Esmerlyn Ledesma (2022-1775)

Trabajo realizado en equipo: Configuración inicial, implementación de pruebas, pipeline y documentación.

## Requisitos
- Node.js (versión LTS recomendada).
- Git y cuenta en GitHub.
- Dependencias: Jest para pruebas (instaladas via npm).

## Instalación
1. Clona el repositorio:
   - git clone https://github.com/AdonisMBuret/practica3-cicd-pipeline.git

2. Entra en la carpeta: 
   - cd practica3-cicd-pipeline
   
3. Instala dependencias:
   - npm install

## Cómo Ejecutar Localmente
- Abre `index.html` en un navegador para ver la app.
- Corre pruebas: `npm test`
- Cobertura de código: `npm run test:coverage` (genera carpeta `coverage/` con reportes).

## Pruebas
- **Unitarias**: Prueba funciones como `suma(a, b)` en `script.js`.
- **Integración**: Verifica cambios en el DOM simulando el navegador con jsdom.
- Cobertura: Actualmente ~80% (ver reporte en `coverage/lcov-report/index.html`).
- Archivos: `tests/app.test.js`.

## Pipeline CI/CD
El pipeline se configura en `.github/workflows/ci-cd.yml`. Se activa en push o pull requests a la rama `main`. Incluye:
- Build: Instala dependencias y corre pruebas.
- Deploy: Despliega a GitHub Pages si las pruebas pasan.

Para más detalles, ver [Documentación del Pipeline](docs/pipeline.md).

## Despliegue
La app se despliega automáticamente a GitHub Pages. URL: https://adonisMBuret.github.io/practica3-cicd-pipeline/ (ajusta si tu usuario es diferente).

Para más detalles, ver [Instrucciones de Despliegue](docs/deployment.md).

## Contribución
Ver [Guía de Contribución](CONTRIBUTING.md) para colaborar.

## Recursos
- Plantilla de app: Basada en HTML/JS simple (proporcionada/adaptada).
- GitHub Actions: Documentación oficial.
- Jest: Para pruebas y cobertura.

## Problemas Conocidos
- Si las pruebas fallan en entornos sin jsdom, verifica instalación de `jest-environment-jsdom`.

¡Gracias por revisar!