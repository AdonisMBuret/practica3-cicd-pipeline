# Informe de Implementación

## Resumen
Implementamos un pipeline CI/CD para una app web simple. Todo funciona: pruebas pasan, cobertura ~80%, despliegue ok.

## Pasos Realizados
1. Configuración inicial: Repo, estructura, app simple.
2. Pruebas: Unitarias (suma), integración (DOM), cobertura con Jest.
3. Pipeline: Build, test, deploy en YAML.
4. Documentación: README, pipeline, contribución, despliegue.

## Problemas Encontrados
- Error "document not defined": Solucionado con jsdom y envolviendo código en funciones.
- Instalación de dependencias: Agregado `jest-environment-jsdom`.

## Resultados
- Pruebas: 2/2 pasan (ver captura adjunta o logs).
- Cobertura: 80% en script.js (línea 12 no cubierta, posible mejora).
- Demo: Pipeline corre en Actions; app en Pages.

## Participantes
- Triana Olivadia García de Jesús (2023-1395): Configuración inicial y app.
- Kaysha Hiciano (2023-1599): Pruebas y cobertura.
- Adonis Mercedes Buret (2021-2396): Pipeline y despliegue.
- Esmerlyn Ledesma (2022-1775): Documentación e informe.

## Conclusiones
Proyecto exitoso. Aprendimos sobre CI/CD y testing en JS.