# Plan de Pruebas - Automatización OrangeHRM

## 1. Introducción
Este proyecto tiene como objetivo automatizar los flujos críticos de la plataforma OrangeHRM para asegurar la estabilidad de las funcionalidades de Login y Gestión de Empleados (PIM).

## 2. Alcance (Scope)
Se automatizarán los siguientes módulos:
* **Autenticación:** Login exitoso, fallido y logout.
* **PIM:** Creación y búsqueda de empleados.

## 3. Herramientas y Tecnologías
* **Framework:** Cypress
* **Lenguaje:** JavaScript
* **Patrón de Diseño:** Page Object Model (POM)
* **CI/CD:** GitHub Actions
* **Reportes:** Screenshots y Videos de Cypress

## 4. Estrategia de Automatización
Las pruebas se ejecutarán automáticamente en cada `push` a la rama principal mediante GitHub Actions. Se utiliza el patrón POM para facilitar el mantenimiento y la reutilización de código.

## 5. Casos de Prueba (Resumen)
| ID | Módulo | Caso de Prueba | Prioridad |
| :--- | :--- | :--- | :--- |
| TC-01 | Login | Autenticación Exitosa | Alta |
| TC-02 | Login | Error con Credenciales Inválidas | Alta |
| TC-03 | PIM | Registro de Nuevo Empleado | Alta |

---
*Nota: El detalle paso a paso de cada caso se encuentra en el archivo `TEST_CASES.md`.*