# Framework de Automatización E2E - OrangeHRM

Este proyecto es un framework de automatización de pruebas de punta a punta (E2E) desarrollado para la aplicación **OrangeHRM Open Source**. Está construido con **Cypress**, enfocado en la mantenibilidad, escalabilidad y la aplicación de buenas prácticas de ingeniería de calidad.

## 🚀 Características Principales

- **Page Object Model (POM):** Estructura organizada para facilitar el mantenimiento y evitar la duplicidad de código.
- **Flujos Automatizados:** Pruebas completas de módulos críticos (Login, Recruitment, PIM).
- **Integración CI/CD:** Ejecución automática de pruebas mediante GitHub Actions en cada subida de código.
- **Comandos Personalizados:** Optimización de acciones comunes para un desarrollo de tests más ágil.
- **Reportes Profesionales:** Gestión de resultados con capturas de pantalla en caso de fallos.

## 🛠️ Stack Tecnológico

- **Framework:** [Cypress](https://www.cypress.io/)
- **Lenguaje:** JavaScript (ES6+)
- **CI/CD:** GitHub Actions
- **Patrones:** Page Object Model (POM)

## 📁 Estructura del Proyecto

```text
├── cypress
│   ├── e2e             # Scripts de prueba organizados por módulos
│   ├── fixtures        # Datos de prueba (JSON)
│   ├── pages           # Clases de Page Object (POM)
│   └── support         # Comandos personalizados y configuración global
├── .github/workflows   # Configuración de CI/CD (Actions)
├── cypress.config.js   # Configuración del framework
└── package.json        # Dependencias y scripts

## 🏁 Cómo Empezar

### Requisitos previos

- [Node.js](https://nodejs.org/) (v14 o superior)
- npm (instalado con Node.js)

### Instalación

1. Clona el repositorio:
   ```bash
   git clone https://github.com/alexnietm/orangehrm-e2e-testing.git
   ```
2. Entra en la carpeta del proyecto:
   ```bash
   cd orangehrm-e2e-testing
   ```
3. Instala las dependencias:
   ```bash
   npm install
   ```

### Ejecución de Pruebas

- **Abrir Cypress (Modo Interactivo):**
  ```bash
  npx cypress open
  ```
- **Ejecutar en consola (Modo Headless):**
  ```bash
  npx cypress run
  ```

---
*Desarrollado por Mauro Alexander Nieto.*