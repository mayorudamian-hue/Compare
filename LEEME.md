# Mis ilustraciones: puesta en marcha (30 a 40 minutos, una sola vez)

Archivos: index.html, manifest.webmanifest, sw.js, icon-192.png, icon-512.png y reglas-firestore.txt.

## 1. Crear el proyecto en Firebase
1. Entrá a https://console.firebase.google.com con tu cuenta de Google y tocá **Crear un proyecto** (nombre libre; podés desactivar Google Analytics).
2. En el menú **Compilación**, abrí **Authentication**, tocá **Comenzar** y activá el proveedor **Google** (poné tu correo como correo de asistencia).
3. En **Compilación**, abrí **Firestore Database** y tocá **Crear base de datos**. Elegí modo **producción** y una ubicación (por ejemplo southamerica-east1, São Paulo).
4. En Firestore, pestaña **Reglas**: borrá todo, pegá el contenido de reglas-firestore.txt, **cambiá los tres correos por los de ustedes** y tocá **Publicar**.
5. En **Configuración del proyecto** (rueda dentada), sección **Tus apps**, tocá el ícono **</>** (Web), registrá la app y copiá los valores `apiKey`, `authDomain`, `projectId` y `appId`.
6. Abrí index.html con el Bloc de notas, buscá la línea `const CFG=` y reemplazá cada PEGAR por tus valores, entre comillas.

## 2. Subir a GitHub
1. Creá un repositorio nuevo en https://github.com (público, nombre por ejemplo `ilustraciones`).
2. Tocá **Add file → Upload files** y subí los 5 archivos de la app (no hace falta subir reglas-firestore.txt ni este archivo).
3. En **Settings → Pages**, elegí **Deploy from a branch**, rama `main`, carpeta `/ (root)` y guardá. En un par de minutos te da la dirección, del estilo `https://tuusuario.github.io/ilustraciones/`.

## 3. Autorizar la dirección en Firebase
En Firebase: **Authentication → Configuración → Dominios autorizados → Agregar dominio**: poné `tuusuario.github.io` (solo el dominio, sin la ruta).

## 4. Usarla
1. Abrí la dirección en Chrome del celular y en la PC, entrá con Google y elegí **Agregar a pantalla de inicio** (o Instalar).
2. Para pasar lo que ya tenés: en la app vieja (claude.ai) usá **Exportar** y, en la nueva, **Importar respaldo**.
3. Pasales la dirección a tus amigos. Solo van a poder entrar los tres correos que pusiste en las reglas.

Cada vez que cambiemos la app, subís el index.html nuevo al repositorio (Add file → Upload files, reemplazando el anterior).
