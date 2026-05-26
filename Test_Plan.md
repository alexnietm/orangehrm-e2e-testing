# Test Plan - Proyecto de Automatización OrangeHRM

## 1. Introducción
Este documento define la estrategia, alcance y configuración del entorno de pruebas automatizadas para la plataforma OrangeHRM, utilizando Cypress como herramienta principal de automatización.

## 2. Alcance (Scope)
El proyecto cubre la automatización de los flujos críticos de la aplicación para asegurar su estabilidad en cada despliegue.
* **Módulos bajo prueba:**
    * **Autenticación (Login/Logout):** Acceso seguro y cierre de sesión.
    * **PIM (Personal Information Management):** Gestión, creación y búsqueda de empleados.

## 3. Entorno y Herramientas
* **Lenguaje:** JavaScript
* **Framework:** Cypress
* **Arquitectura:** Page Object Model (POM)
* **Integración Continua (CI):** GitHub Actions
* **Reportes:** Mochawesome Reporter
* **Configuración de Ejecución:**
    * Resolución: 1920x1080 (Viewport forzado para consistencia UI).
    * Navegador: Chrome/Electron (vía CI).

## 4. Estrategia de Ejecución
Se aplican las siguientes buenas prácticas para garantizar la resiliencia en entornos de CI/CD:
* **Sincronización:** Uso de esperas explícitas (`should('be.visible')`) para evitar errores de carga asíncrona.
* **Manejo de Errores:** Implementación de `uncaught:exception` para ignorar errores técnicos de la API que no impactan la lógica de negocio.
* **Interacción forzada:** Uso de `{ force: true }` en elementos dinámicos donde la superposición de capas UI pueda impedir el clic estándar.

## 5. Matriz de Casos de Prueba (Roadmap)

| ID | Módulo | Caso de Prueba | Prioridad | Estado |
| :--- | :--- | :--- | :--- | :--- |
| TC-01 | Login | Autenticación Exitosa | Alta | Implementado |
| TC-02 | Login | Error - Credenciales Inválidas | Alta | Implementado |
| TC-03 | Login | Cierre de Sesión (Logout) | Media | Implementado |
| TC-04 | PIM | Registro de Nuevo Empleado | Alta | En desarrollo |
| TC-05 | PIM | Búsqueda por Nombre de Empleado | Alta | Pendiente |

## 6. Criterios de Aceptación
* El 100% de los casos de prueba de prioridad "Alta" deben pasar en el entorno de CI/CD.
* Cada ejecución debe generar un reporte de resultados (HTML) y capturas de pantalla/video ante cualquier fallo.

---
*Documento mantenido para asegurar la trazabilidad y calidad del framework de pruebas.*