# 🧪 Framework de Automatización E2E – OrangeHRM (Cypress)

Framework de automatización de pruebas **end‑to‑end (E2E)** desarrollado para la aplicación **OrangeHRM Open Source**.  
Construido con **Cypress**, siguiendo buenas prácticas de arquitectura, reutilización y mantenibilidad.

---

## 🚀 Características Principales

- 🧩 **Page Object Model (POM)** para una estructura modular y escalable  
- 🔁 **Flujos automatizados completos** para funcionalidades clave de OrangeHRM  
- ⚙️ **Comandos personalizados** para mejorar la legibilidad y reutilización  
- 🚦 **Integración CI/CD** mediante GitHub Actions  
- 📁 **Fixtures dinámicos** para manejo de datos  

---

## 🛠️ Estructura del Proyecto

```
├── cypress
│   ├── e2e             # Scripts de prueba
│   ├── fixtures        # Datos de prueba (JSON)
│   ├── pages           # Clases de Page Object (POM)
│   └── support         # Comandos personalizados y configuración
├── .github/workflows   # Pipelines de CI/CD
├── cypress.config.js   # Configuración del framework
└── package.json        # Dependencias y scripts
```

---

## 🏁 Cómo Empezar

### ✔️ Requisitos previos

- Node.js v14 o superior  
- npm

### 📥 Instalación

```bash
git clone https://github.com/alexnietm/orangehrm-e2e-testing.git
cd orangehrm-e2e-testing
npm install
```

---

## ⚙️ Ejecución de Pruebas

### ▶️ Modo Interactivo (Cypress UI)

```bash
npx cypress open
```

### 🧩 Modo Headless (consola)

```bash
npx cypress run
```

---

## 🧱 Arquitectura del Framework

- 🧱 **POM (Page Object Model):**  
  Cada página de OrangeHRM está representada por una clase con sus elementos y acciones.

- 🛠️ **Comandos personalizados:**  
  Ubicados en `cypress/support/commands.js`, permiten escribir tests más limpios y expresivos.

- 📦 **Fixtures:**  
  Datos reutilizables para pruebas parametrizadas.

- 🚀 **CI/CD:**  
  Pipeline configurado en `.github/workflows` para ejecutar pruebas automáticamente en cada push o pull request.

---

## 📌 Scripts Disponibles

```json
"scripts": {
  "test": "cypress run",
  "cy:open": "cypress open"
}
```

---

## 👨‍💻 Autor

**Mauro Alexander Nieto**  
Automatización QA | Cypress | JavaScript
