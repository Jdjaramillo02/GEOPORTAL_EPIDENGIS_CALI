// === Límite geográfico de Cali 
var boundsCali = L.latLngBounds(
    [3.32, -76.62],
    [3.52, -76.45]
);

// === Crear mapa ===
var map = L.map('map', {
    center: [3.4190, -76.5630],
    zoom: 14,
    minZoom: 12,
    maxZoom: 18,
    maxBounds: boundsCali,
    maxBoundsViscosity: 1.0
});

// === Capa base ===
var baseOSM = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors'
}).addTo(map);

// === GeoServer ===
var urlGeoServer = "http://localhost:8080/geoserver/proyecto/wms";

// === Capas WMS ===
function crearCapaWMS(nombre, etiqueta) {
    return L.tileLayer.wms(urlGeoServer, {
        layers: `proyecto:${nombre}`,
        format: 'image/png',
        transparent: true,
        attribution: etiqueta
    });
}

// === Capas WMS ===
var capaBarrios = L.tileLayer.wms(urlGeoServer, {
    layers: 'proyecto:barrios',
    format: 'image/png',
    transparent: true,
    attribution: 'Barrios'
});

var capaComuna = L.tileLayer.wms(urlGeoServer, {
    layers: 'proyecto:comuna',
    format: 'image/png',
    transparent: true,
    attribution: 'Comuna'
});

var capaciudad = L.tileLayer.wms(urlGeoServer, {
    layers: 'proyecto:ciudad',
    format: 'image/png',
    transparent: true,
    attribution: 'Ciudad'
});

var capavia = L.tileLayer.wms(urlGeoServer, {
    layers: 'proyecto:via',
    format: 'image/png',
    transparent: true,
    attribution: 'Vias'
});


var capacanal = L.tileLayer.wms(urlGeoServer, {
    layers: 'proyecto:canal',
    format: 'image/png',
    transparent: true,
    attribution: 'Canales'
});

var capacentro_salud = L.tileLayer.wms(urlGeoServer, {
    layers: 'proyecto:centro_salud',
    format: 'image/png',
    transparent: true,
    attribution: 'Centros de Salud'
});

var capasumidero = L.tileLayer.wms(urlGeoServer, {
    layers: 'proyecto:sumidero',
    format: 'image/png',
    transparent: true,
    attribution: 'Sumideros'
});

var capacaso_dengue_2014 = L.tileLayer.wms(urlGeoServer, {
    layers: 'proyecto:caso_dengue_2014',
    format: 'image/png',
    transparent: true,
    attribution: 'Casos dengue Cali 2014'
});

var capacaso_dengue_2015 = L.tileLayer.wms(urlGeoServer, {
    layers: 'proyecto:caso_dengue_2015',
    format: 'image/png',
    transparent: true,
    attribution: 'Casos dengue Cali 2015'
});

var capacaso_dengue_2016 = L.tileLayer.wms(urlGeoServer, {
    layers: 'proyecto:caso_dengue_2016',
    format: 'image/png',
    transparent: true,
    attribution: 'Casos dengue Cali 2016'
});
    // Activar por defecto
    capaciudad.addTo(map);
    capaComuna.addTo(map);

var capaprecipitacion_2014 = L.tileLayer.wms(urlGeoServer, {
    layers: 'proyecto:precipitacion_2014',
    format: 'image/png',
    transparent: true,
    attribution: 'Precipitacion de Cali 2014'
});

var capaprecipitacion_2015 = L.tileLayer.wms(urlGeoServer, {
    layers: 'proyecto:precipitacion_2015',
    format: 'image/png',
    transparent: true,
    attribution: 'Precipitacion de Cali 2015'
});

var capaprecipitacion_2016 = L.tileLayer.wms(urlGeoServer, {
    layers: 'proyecto:precipitacion_2016',
    format: 'image/png',
    transparent: true,
    attribution: 'Precipitacion de Cali 2016'
});

var capahumedad_2014 = L.tileLayer.wms(urlGeoServer, {
    layers: 'proyecto:humedad_2014',
    format: 'image/png',
    transparent: true,
    attribution: 'Humedad de Cali 2014'
});

var capahumedad_2015 = L.tileLayer.wms(urlGeoServer, {
    layers: 'proyecto:humedad_2015',
    format: 'image/png',
    transparent: true,
    attribution: 'Humedad de Cali 2015'
});

var capahumedad_2016 = L.tileLayer.wms(urlGeoServer, {
    layers: 'proyecto:humedad_2016',
    format: 'image/png',
    transparent: true,
    attribution: 'Humedad de Cali 2016'
});

var capatemperatura_2014 = L.tileLayer.wms(urlGeoServer, {
    layers: 'proyecto:temperatura_2014',
    format: 'image/png',
    transparent: true,
    attribution: 'Temperatura de Cali 2014'
});

var capatemperatura_2015 = L.tileLayer.wms(urlGeoServer, {
    layers: 'proyecto:temperatura_2015',
    format: 'image/png',
    transparent: true,
    attribution: 'Temperatura de Cali 2015'
});

var capatemperatura_2016 = L.tileLayer.wms(urlGeoServer, {
    layers: 'proyecto:temperatura_2016',
    format: 'image/png',
    transparent: true,
    attribution: 'Temperatura de Cali 2016'
});



// === Overlays (control de capas) ===
var overlays = {
    "Ciudad": capaciudad,
    "Comuna": capaComuna,
    "Barrios": capaBarrios,
    "Vías": capavia,
    "Canales": capacanal,
    "Centros de Salud": capacentro_salud,
    "Sumideros": capasumidero,
    "Casos Dengue 2014": capacaso_dengue_2014,
    "Casos Dengue 2015": capacaso_dengue_2015,
    "Casos Dengue 2016": capacaso_dengue_2016,
    "Precipitación 2014": capaprecipitacion_2014,
    "Precipitación 2015": capaprecipitacion_2015,
    "Precipitación 2016": capaprecipitacion_2016,
    "Humedad 2014": capahumedad_2014,
    "Humedad 2015": capahumedad_2015,
    "Humedad 2016": capahumedad_2016,
    "Temperatura 2014": capatemperatura_2014,
    "Temperatura 2015": capatemperatura_2015,
    "Temperatura 2016": capatemperatura_2016
};

// Control de capas (opcional)
//L.control.layers(null, overlays, { collapsed: false }).addTo(map);

// Escala
L.control.scale().addTo(map);

// Función para activar/desactivar capas
function toggleLayer(layer, visible) {
    if (visible) {
        map.addLayer(layer);
    } else {
        map.removeLayer(layer);
    }
}

// Botón HOME
L.Control.Home = L.Control.extend({
    onAdd: function () {
        const btn = L.DomUtil.create('button', 'leaflet-bar leaflet-control leaflet-control-custom');
        btn.innerHTML = '🏠';
        btn.title = 'Volver al centro';
        btn.onclick = function () {
            map.setView([3.4190, -76.5630], 14);
        };
        return btn;
    }
});
L.control.home = function (opts) { return new L.Control.Home(opts); };
L.control.home({ position: 'topleft' }).addTo(map);

// Localización GPS
L.control.locate({ position: 'topleft', keepCurrentZoomLevel: true }).addTo(map);

// Buscador
L.Control.geocoder({ placeholder: 'Buscar dirección...' }).addTo(map);

// MiniMap

 // Modifica esta sección para usar directamente una capa base para el minimapa
        const miniLayer = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '© OpenStreetMap contributors',
            // Puedes ajustar el nivel de zoom para el minimapa si quieres
            // maxZoom: 13, // Opcional: para que se vea más grande la ciudad en el minimapa
            // minZoom: 0
        });

        const miniMap = new L.Control.MiniMap(miniLayer, {
            toggleDisplay: true,
            minimized: false,
            position: 'bottomright'
        }).addTo(map);

        setTimeout(() => {
            const container = document.querySelector('.leaflet-control-minimap');
            if (container) { // Asegurarse de que el contenedor existe
                const label = document.createElement('div');
                label.textContent = 'Santiago de Cali';
                label.style = 'position:absolute;top:4px;left:4px;background:rgba(255,255,255,0.8);font-size:12px;text-align:center;font-weight:bold;width:100%';
                container.appendChild(label);
            }
        }, 500);

// === Botones flotantes ===

// Metadatos
document.getElementById("metadata-btn").addEventListener("click", () => {
    const contenido = `
        <div style="max-height:300px; overflow-y:auto; font-size:12px;">
            <b>Nombre:</b> GeoVisor de casos de Dengue de la ciudad Santiago de Cali<br><br>
            <b>Autores:</b> Giselly Daniela Molina, Angie Vanesa Sepúlveda, Johan Camilo Ramírez, Juan Daniel Jaramillo<br><br>
            <b>Fecha de creación:</b> Julio 2025<br><br>
            <b>Escala:</b> 1:25000<br><br>
            <b>Cobertura:</b> Santiago de Cali<br><br>
            <b>CRS:</b> WGS 84 (EPSG:4326)<br><br>
            <b>Fuente:</b> Datos oficiales y trabajo de campo<br><br>
            <b>Licencia:</b> Uso académico<br><br>
            <b>Institución:</b> Universidad del Valle
        </div>`;
    L.popup({ maxWidth: 400 }).setLatLng(map.getCenter()).setContent(contenido).openOn(map);
});

// Compartir
document.getElementById("share-btn").addEventListener("click", () => {
    navigator.clipboard.writeText(window.location.href);
    alert("Enlace del mapa copiado");
});

// Leyenda
document.getElementById("legend-btn").addEventListener("click", function () {
  const legendContainer = document.getElementById("legend-container");
  const legendContent = document.getElementById("legend-content");

  if (legendContainer.style.display === "none") {
    legendContainer.style.display = "block";
    legendContent.innerHTML = ''; // Limpiar

    const capas = [
      { nombre: "ciudad", etiqueta: "Ciudad" },
      { nombre: "comuna", etiqueta: "Comunas" },
      { nombre: "barrios", etiqueta: "Barrios" },
      { nombre: "via", etiqueta: "Vías" },
      { nombre: "canal", etiqueta: "Canales" },
      { nombre: "centro_salud", etiqueta: "Centros de Salud" },
      { nombre: "sumidero", etiqueta: "Sumideros" },
      { nombre: "caso_dengue_2014", etiqueta: "Casos de Dengue 2014" },
      { nombre: "caso_dengue_2015", etiqueta: "Casos de Dengue 2015" },
      { nombre: "caso_dengue_2016", etiqueta: "Casos de Dengue 2016" },
      { nombre: "precipitacion_2014", etiqueta: "Precipitación 2014" },
      { nombre: "precipitacion_2015", etiqueta: "Precipitación 2015" },
      { nombre: "precipitacion_2016", etiqueta: "Precipitación 2016" },
      { nombre: "humedad_2014", etiqueta: "Humedad 2014" },
      { nombre: "humedad_2015", etiqueta: "Humedad 2015" },
      { nombre: "humedad_2016", etiqueta: "Humedad 2016" },
      { nombre: "temperatura_2014", etiqueta: "Temperatura 2014" },
      { nombre: "temperatura_2015", etiqueta: "Temperatura 2015" },
      { nombre: "temperatura_2016", etiqueta: "Temperatura 2016" }
    ];

    capas.forEach(capa => {
      const titulo = document.createElement("div");
      titulo.textContent = capa.etiqueta;
      titulo.style.fontWeight = "bold";
      titulo.style.marginTop = "8px";

      const img = document.createElement("img");
      img.src = `http://localhost:8080/geoserver/proyecto/wms?REQUEST=GetLegendGraphic&VERSION=1.0.0&FORMAT=image/png&LAYER=proyecto:${capa.nombre}`;
      img.alt = capa.etiqueta;
      img.style.marginBottom = "4px";

      legendContent.appendChild(titulo);
      legendContent.appendChild(img);
    });
  } else {
    legendContainer.style.display = "none";
  }
});

// Medición
const measureControl = new L.Control.Measure({
    primaryLengthUnit: 'meters',
    secondaryLengthUnit: 'kilometers',
    activeColor: '#ff7800',
    completedColor: '#000',
    position: 'topright'
});
map.addControl(measureControl);

document.getElementById("measure-btn").addEventListener("click", () => {
    measureControl._toggleMeasure();
});