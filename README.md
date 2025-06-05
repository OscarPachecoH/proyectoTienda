# 🏪 Proyecto Tienda en línea
**Tienda en línea**, es una aplicación web desarrollada con las tecnologías de **Laravel 9.19** y **React**, este proyecto simula una tienda en línea con tres tipos de usuarios (administrador, cliente e invitado), dándole mejores beneficios a los clientes, entre las cuales se encuentra el uso de un carrito de compras, así como, también un historial de compras.
Este proyecto, originalmente desarrollado por estudiantes para la materia de “Desarrollo web”, está siendo retomado para completar secciones pendientes, corregir errores y aplicar buenas prácticas.

## ⭐Características
- Página principal con productos listados: Se muestra un catalogo divido en 3 secciones (Hombre, Mujeres y Niños).
- Inicio de sesión: Autentificación para clientes y administradores del negocio.
- Carrito de compras: Permite agregar, modificar o eliminar productos antes de comprar ()
- Gestión de productos: Los administradores pueden crear, editar, eliminar y listar productos.
- Gestión de historial de compras: Los clientes puedes consultar su historial de compras.
- Interfaz responsiva con Bootstrap: Interfaces que se adaptan a cualquier dispositivo.

## 🧑‍💻Tecnologías
- **Laravel 9.19**
- **PHP 8.2**
- **MySQL**
- **React 18.2.0**
- **Node.js 22.16.0**
- **Bootstrap**

## 📁Estructura del proyecto
El proyecto se divide en dos carpetas, api, creada con Laravel, y el reactfront, creado con ayuda de React.
Laravel ofrece una estructura ya definida al momento de crear el proyecto, por lo que me limitare en describir las rutas de carpetas que fueron modificadas o agregadas. 
- **`/app/Http/Controllers`:** Controladores personalizados para gestionar autentificación de usuarios, productos y carritos de compra. 
- **`/app/ Http/Middleware/Admin.php `:** Intermediario para permisos de peticiones de tipo administrativas.
- **`/app/Models`:** Modelos para la lógica de datos.
- **`/database/migrations`:** Migraciones para las tablas de usuarios, productos, historial de compras, etc.
- **`/routes/api.php`:** Definición de rutas para las funcionalidades principales del proyecto.
La estructura del cliente seria de la siguiente forma:
- **`/public/img`:** Carpeta publica que guarda las imágenes de los productos.
- **`/src/components`:** Componentes reutilizables.
- **`/src/pages`:** Vistas del sistema, Home.js, Login.js, Dashboar.js, etc.
- **`/src/services`:** Funciones para las peticiones para la api.
- **`/src/styles`:** Estilos para específicos para los componente o secciones del sistema.
- **`/src/index.css`:**Estilos generales del sistema.

## 🚀Instalación:
Sigue los siguientes pasos para ejecutar el proyecto localmente.
### Requisitos
- PHP >= 8.0
- Composer 2.x
- Node.js >= 16.x
- MySQL o cualquier base de datos compatibles con Laravel
- Git

### 📋Pasos
1. **Clona el repositorio:** Usa el comando:  
```bash
git clone https://github.com/OscarPachecoH/proyectoTienda
```
2. **Instalar las dependencias:** Para la api en Laravel entraremos al proyecto e instalaremos las dependencias correspondientes a cada carpeta: 
```bash
cd ./proyectoTienda
cd ./api
composer install
```
Para el front haremos los siguiente:
```bash
cd ./proyectoTienda
cd ./reactfront
npm install
```
3. **Verifica archivo .env.example:** Entra en la carpeta proyectoTienda > api, y verifica que este el archivo, este contiene la estructura de las variables de entorno del proyecto; crea un archivo y nómbralo .env, después copia todo el contenido del archivo .env.example en .env. o solo renombra el archivo .env.example a .env
4. **Crear key app:** Crea la llave para la aplicación y verifica que está en tu archivo .env o pégala de forma manual en la variable APP_KEY=
```bash
php artisan key:generate
```
6. **Crear base de datos:** Crea la base de datos en tu gestor y llámala `tienda`.
7. **Ejecuta las migraciones:** Ejecuta el comando para la creación de las tablas y sus estructuras correspondientes.
```bash
php artisan migrate
```
8. **Inicia los servidores:** Para la api haz lo siguiente
```bash
cd ./proyectoTienda
cd ./api
php artisan serve
```
Ahora para el frontend usa
```bash
cd ./proyectoTienda
cd ./reactfront
npm start
```
Para poder probar solo la api en clientes como Postman o Thunder Client, usa la url http://127.0.0.1:8000 o http://localhost:8000
Y en el caso del cliente, este abrirá de forma automática la ventana principal del proyecto, de lo contrario usa la url http://localhost:3000/
## ✌️Uso del Proyecto
- Administrador: Gestiona productos y visualiza el historial de compras de los clientes.
- Cliente: Navega por el catálogo, agrega productos al carrito y consulta su historial.
- Invitado: Visualiza el catálogo de productos sin acceso al carrito o historial.
## ⚠️Limitaciones Conocidas
- La funcionalidad de historial de compras está en desarrollo.
- Algunas páginas no son completamente responsivas en dispositivos móviles.