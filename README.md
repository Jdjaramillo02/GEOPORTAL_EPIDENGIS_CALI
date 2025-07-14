
# GEOPORTAL EPIDENGIS CALI

Este geoportal ha sido desarrollado como parte del proyecto final del curso **Diseño de Proyectos en SIG (720135M)** de la Universidad del Valle. Su propósito es visualizar y analizar la desigualdad espacial en el acceso a la seguridad social en la Comuna 15 de Cali, con énfasis en los casos de dengue entre los años 2014 y 2016.

## 🌐 Estructura del proyecto

- `index.html`: Página de inicio del geoportal.
- `geovisor.html`: Visor SIG interactivo con capas temáticas.
- `visor.js`: Lógica de visualización Leaflet, conexión con servicios WMS.
- `css/`: Estilos del sitio web.
- `assets/`, `img/`: Imágenes y logotipos utilizados.
- `capas/`: Capas geográficas en formato GeoJSON o conectadas por GeoServer.
- `README.md`: Documento de descripción del proyecto.

## 🗺️ Funcionalidades del Geoportal

- Visualización de capas WMS desde GeoServer.
- Consulta de atributos por clic (`GetFeatureInfo`) para capas de casos de dengue.
- Capas de barrios, comunas, vías, sumideros, humedad, temperatura y precipitación.
- Mapa base, herramientas de medición, localización y leyenda dinámica.
- Navegación web por secciones del proyecto: Inicio, Geovisor, Metodología, Tablero, Contacto, ¿Quiénes somos?

## 🧪 Tecnología utilizada

- HTML5, CSS3, JavaScript
- Leaflet.js y plugins asociados
- GeoServer (servicios WMS)
- PostgreSQL/PostGIS (en la base de datos del backend)
- Amazon EC2 (para despliegue en la nube)

## 👥 Créditos

**Autoras y autores:**
- Vanessa Sepúlveda Pérez
- Giselly Daniela Molina
- Juan Daniel Jaramillo
- Johan Camilo Ramírez

**Institución:** Universidad del Valle  
**Curso:** Diseño de Proyectos en SIG  
**Docente:** Robin Alexis Olaya  
**Año:** 2025

---

Este proyecto es de carácter académico y no tiene fines comerciales.
