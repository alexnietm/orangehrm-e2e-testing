# Casos de Prueba - OrangeHRM Automation Project

Este documento detalla los escenarios de prueba diseñados para la validación de los módulos principales de la plataforma OrangeHRM.

## 1. Módulo: Autenticación (Login)

| ID | Prioridad | Caso de Prueba | Pasos | Resultado Esperado | Estado de Automatización |
| :--- | :--- | :--- | :--- | :--- | :--- |
| TC-01 | Alta | Login Exitoso | 1. Ir a la URL base.<br>2. Ingresar usuario 'Admin'.<br>3. Ingresar clave 'admin123'.<br>4. Clic en botón 'Login'. | El usuario es redirigido al Dashboard. | ✅ Automatizado |
| TC-02 | Alta | Login Fallido (Clave incorrecta) | 1. Ir a la URL base.<br>2. Ingresar usuario 'Admin'.<br>3. Ingresar clave 'erronea'.<br>4. Clic en botón 'Login'. | Se muestra el mensaje "Invalid credentials". | ✅ Automatizado |
| TC-03 | Media | Cerrar Sesión | 1. Iniciar sesión.<br>2. Clic en el dropdown de perfil.<br>3. Seleccionar 'Logout'. | El usuario es redirigido a la pantalla de Login. |  ✅ Automatizado

## 2. Módulo: PIM (Gestión de Empleados)

| ID | Prioridad | Caso de Prueba | Pasos | Resultado Esperado | Estado de Automatización |
| :--- | :--- | :--- | :--- | :--- | :--- |
| TC-04 | Alta | Agregar Nuevo Empleado | 1. Ir a PIM.<br>2. Clic en 'Add Employee'.<br>3. Llenar Nombre y Apellido.<br>4. Clic en 'Save'. | Se visualiza el perfil del nuevo empleado creado. |  ✅ Automatizado
| TC-05 | Media | Buscar Empleado por ID | 1. Ir a PIM.<br>2. Ingresar ID en el filtro.<br>3. Clic en 'Search'. | El registro correspondiente aparece en la tabla. | ✅ Automatizado |
| TC-06 | Alta | Eliminar Empleado por ID | 1. Ir a PIM.<br>2. Ingresar ID en el filtro.<br>3. Clic en 'Search'.<br>4. Clic en icono de papelera.<br>5. Confirmar en modal. | El registro desaparece de la tabla y se muestra mensaje de éxito. | ✅ Automatizado |