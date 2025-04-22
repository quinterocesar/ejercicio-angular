# EjercicioAngular

Este proyecto fue generado con [Angular CLI](https://github.com/angular/angular-cli) versión 17.3.8.

# Consideraciones
- En el proyecto no se usó archivos de environment por ser un proyecto pequeño. Sin embargo las buenas prácticas indican que se debe usar.
- No se realizó el ajuste para responsive debido a que no fue solicitado.

## Requisitos previos

Asegúrate de tener instalados los siguientes elementos:
- **Node.js**: Versión 18.x o superior.
- **Angular CLI**: Versión 17.3.8.

## Ejecución del proyecto Angular

1. Instala las dependencias:
  ```bash
  npm install
  ```

2. Inicia el servidor de desarrollo:
  ```bash
  ng serve
  ```
  Navega a `http://localhost:4200/` en tu navegador.

## Configuración de JSON Server

Este proyecto utiliza `JSON-server` como backend simulado. Sigue estos pasos para configurarlo:

1. Instala `JSON-server`:
  ```bash
  npm install json-server --save-dev
  ```

2. Inicia el servidor en una terminal separada:
  ```bash
  npx json-server db.json
  ```
  El servidor se ejecutará en `http://localhost:3000/`.

Asegúrate de que tanto el proyecto Angular como el `JSON-server` estén ejecutándose simultáneamente para una funcionalidad completa.
