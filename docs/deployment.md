# Instrucciones de Despliegue

El despliegue es automático via pipeline, pero aquí va una guía manual/opcional.

## Despliegue Automático (Recomendado)
- Push a `main`: El workflow despliega a GitHub Pages.
- Configura Pages en GitHub: Settings > Pages > Source: Deploy from a branch > main > / (root).

## Despliegue Manual
1. Instala dependencias: `npm install`
2. Corre pruebas: `npm test`
3. Construye (si aplica): Copia archivos estáticos (HTML/CSS/JS) a una carpeta `dist/`.
4. Sube a GitHub Pages: Usa `gh-pages` branch o herramienta manual.
5. URL: https://tu-usuario.github.io/practica3-cicd-pipeline/

## Verificación
- Accede a la URL y verifica que cargue.
- Si error 404: Asegura que Pages esté habilitado.

## Entorno
- Hosting: GitHub Pages (gratuito, estático).
- No requiere servidor backend.
