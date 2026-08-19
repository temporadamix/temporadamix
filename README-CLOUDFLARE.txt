TEMPORADAMIX - PAQUETE LISTO PARA CLOUDFLARE PAGES
============================================================

Este paquete contiene la versión más reciente del sitio web navideño trabajado para TemporadaMix.
Las imágenes fueron optimizadas para que el proyecto pueda cargarse mediante Cloudflare Pages Direct Upload sin superar el límite de tamaño de carga indicado por Cloudflare.

CONTENIDO
---------
index.html                 Página principal del catálogo.
styles.css                 Diseño responsive.
script.js                  Filtros, búsqueda, tarjetas y selector de WhatsApp.
products.js                Catálogo editable de productos y precios.
assets/                    Imágenes optimizadas del catálogo.
navidad/index.html         Ruta compatible con el QR: /navidad/index.html.

PUBLICACIÓN EN CLOUDFLARE PAGES - CARGA DIRECTA
-----------------------------------------------
Cloudflare Pages Direct Upload permite cargar un ZIP o una carpeta de archivos estáticos desde el panel.

1. Entra a Cloudflare y abre Workers & Pages.
2. Selecciona Create application / Pages y la opción de Direct Upload / Drag and drop.
3. Crea el proyecto con un nombre como: temporadamix.
4. Arrastra el archivo ZIP de este paquete al área de carga.
5. Selecciona Deploy site.

El sitio quedará disponible en una dirección similar a:
https://temporadamix.pages.dev/

DOMINIO PERSONALIZADO
---------------------
Cuando conectes www.importacionesjavimix.com.co al proyecto, la página principal quedará en:
https://www.importacionesjavimix.com.co/

La URL que se configuró para el QR también funcionará:
http://www.importacionesjavimix.com.co/navidad/index.html

En producción es recomendable usar HTTPS:
https://www.importacionesjavimix.com.co/navidad/index.html

WHATSAPP
--------
El sitio permite escoger entre:
- 310 881 7014
- 311 259 5043

Los botones de producto preparan un mensaje con el producto y los precios disponibles.

PRECIOS
-------
Los precios actuales están en products.js. La lógica permite definir wholesalePrice individualmente para referencias cuyo margen no permita aplicar una regla general.

NOTA
----
No se han inventado precios adicionales. Las referencias que no tienen retailPrice aparecen como "Consultar".
