# 🧪 Trabajo Práctico Complementario: Implementación de Búsqueda por Nombre

## 📄  Descripción

Este proyecto es una aplicación CRUD de productos desarrollada con Node.js, Express, MongoDB y React. En esta entrega se implementó la mejora solicitada: búsqueda de productos por nombre.

Se agregó un campo de búsqueda en el frontend, que permite al usuario ingresar un término para filtrar productos. En el backend, se creó una ruta específica que recibe este término de búsqueda y devuelve los productos coincidentes, ya sea parcial o totalmente, sin diferenciar mayúsculas/minúsculas.

## 🚀 Tecnologías utilizadas

Frontend

    React

    Vite

    JavaScript

    Axios

    CSS

Backend

    Node.js

    Express

    Mongoose

    MongoDB

## ⚙️ Instrucciones para ejecutar el proyecto

Backend

1. Clonar el repositorio
```
git clone https://github.com/MaitenaChomicz/Final_UTN.git

```
2. Ingresar al directorio del backend
```
cd backend

```
3. Instalar dependencias
```
npm install

```
4. Configurar el archivo .env con los datos de conexión a la base de datos (ver archivo .env.example).
5. Iniciar el servidor
```
npm run dev

```
Frontend
1. Ir al directorio del frontend
```
cd frontend

```
2. Instalar dependencias
```
npm install

```
3. Configurar el archivo .env con la URL del backend (ver archivo .env.example).
4. Iniciar la aplicación
```
npm run dev

```

## 🔐 Variables de entorno

Backend (backend/.env.example)
```
PORT=1234
URI_DB=mongodb://127.0.0.1:27017/api-auth
JWT_SECRET=kira
```
Frontend (frontend/.env.example)
```
VITE_API_URL=http://localhost:1234/api
```

## ✅ Estado

Funcionalidad de búsqueda agregada exitosamente

Rutas y controladores adaptados para búsquedas parciales

Resultados dinámicos en el frontend

Proyecto validado y probado