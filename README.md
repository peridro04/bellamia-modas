# Bella Mía · Moda y complementos

Web de la tienda Bella Mía. Es HTML, CSS y JavaScript sin dependencias: se abre `index.html` y funciona.

- `index.html`: portada, secciones, novedades, cómo pedir y contacto.
- `tienda.html`: todos los productos con filtro por sección (`tienda.html?seccion=calzado`).
- `producto.html?id=...`: ficha con talla, color y cantidad.
- La cesta se guarda en el navegador. Al enviarla se abre WhatsApp (611 567 619) con el pedido ya escrito.

## Cambiar datos

| Qué | Dónde |
|---|---|
| Teléfono, redes, dirección, horario | `js/config.js` |
| Secciones y productos | `js/catalogo.js` |
| Colores y estilos | `css/estilos.css` (variables al principio) |

## Añadir fotos

1. Copia la foto en `img/productos/` (mejor en `.jpg` o `.webp`, unos 1000 px de ancho, vertical 4:5).
2. En `js/catalogo.js`, en el producto: `fotos: ['bolso-bandolera.jpg', 'bolso-bandolera-2.jpg']`.
3. Para la foto de una sección: cópiala en `img/categorias/` y pon `foto: 'calzado.jpg'` en la sección.
   Si una sección no tiene foto, usa la del primer producto suyo que tenga.

Para poner precio a un producto: `precio: 24.90`. Con `precio: null` sale "Consultar precio".

## Accesibilidad

Enlace para saltar al contenido, navegación con teclado y foco visible, cesta en un `<dialog>` (se cierra con Esc),
textos alternativos, contraste AA, avisos con `aria-live` y sin animaciones si el sistema pide reducir el movimiento.
