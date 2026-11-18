/* ==========================================================
   CATÁLOGO DE BELLA MÍA

   Para añadir fotos:
   1. Copia la foto en img/productos/  (por ejemplo img/productos/bolso-bandolera.jpg)
   2. Escribe su nombre en "fotos" del producto: fotos: ['bolso-bandolera.jpg']
   La primera foto es la que sale en la tienda.

   Para la foto de una sección, ponla en img/categorias/ y
   escribe su nombre en "foto" de la categoría.

   "precio" es opcional: si se deja en null sale "Consultar precio".
   ========================================================== */

window.CATEGORIAS = [
    { id: 'camisetas', nombre: 'Camisetas', grupo: 'Ropa', texto: 'Básicas y estampadas para cada día', tono: '#efe3dc', foto: '' },
    { id: 'jersey', nombre: 'Jerséis', grupo: 'Ropa', texto: 'Punto suave para los días frescos', tono: '#e6dfd3', foto: '' },
    { id: 'sudaderas', nombre: 'Sudaderas', grupo: 'Ropa', texto: 'Cómodas, con y sin capucha', tono: '#dfe3dc', foto: '' },
    { id: 'chaquetas', nombre: 'Chaquetas', grupo: 'Ropa', texto: 'Abrigo y estilo para salir', tono: '#e3dcd6', foto: '' },
    { id: 'pantalones', nombre: 'Pantalones', grupo: 'Ropa', texto: 'Vaqueros, rectos y anchos', tono: '#dde2e6', foto: '' },
    { id: 'conjunto', nombre: 'Conjuntos', grupo: 'Ropa', texto: 'Looks completos, ya combinados', tono: '#efe0e3', foto: '' },
    { id: 'deporte', nombre: 'Deporte', grupo: 'Ropa', texto: 'Mallas, tops y chándal', tono: '#dce5e1', foto: '' },
    { id: 'pijamas', nombre: 'Pijamas', grupo: 'Ropa', texto: 'Para estar en casa a gusto', tono: '#e9e2ee', foto: '' },
    { id: 'ropa-interior', nombre: 'Ropa interior', grupo: 'Ropa', texto: 'Lencería y básicos', tono: '#f0e1e1', foto: '' },
    { id: 'calzado', nombre: 'Calzado', grupo: 'Complementos', texto: 'Zapatillas, botas y sandalias', tono: '#e5ddd3', foto: '' },
    { id: 'bolsos-y-monederos', nombre: 'Bolsos y monederos', grupo: 'Complementos', texto: 'Para llevarlo todo contigo', tono: '#eadfd2', foto: '' },
    { id: 'accesorios', nombre: 'Accesorios', grupo: 'Complementos', texto: 'Pañuelos, gorros, cinturones', tono: '#e2e0d8', foto: '' },
    { id: 'bisuteria', nombre: 'Bisutería', grupo: 'Complementos', texto: 'Pendientes, collares y pulseras', tono: '#efe6d6', foto: '' },
    { id: 'beauty', nombre: 'Beauty', grupo: 'Belleza y hogar', texto: 'Cuidado y maquillaje', tono: '#f1e2e6', foto: '' },
    { id: 'perfume', nombre: 'Perfumes', grupo: 'Belleza y hogar', texto: 'Fragancias para regalar o regalarte', tono: '#e8e1ea', foto: '' },
    { id: 'hogar', nombre: 'Hogar', grupo: 'Belleza y hogar', texto: 'Detalles bonitos para casa', tono: '#e1e4da', foto: '' }
];

const TALLAS_ROPA = ['XS', 'S', 'M', 'L', 'XL'];
const TALLAS_PIE = ['36', '37', '38', '39', '40', '41'];

// Productos de ejemplo: cambia nombres, textos y fotos por los reales
window.PRODUCTOS = [
    { id: 'camiseta-basica', nombre: 'Camiseta básica de algodón', categoria: 'camisetas', texto: 'Algodón suave, cuello redondo y corte recto. La que combina con todo.', precio: null, tallas: TALLAS_ROPA, colores: ['Blanco', 'Negro', 'Beige'], fotos: [], nuevo: true },
    { id: 'camiseta-estampada', nombre: 'Camiseta estampada', categoria: 'camisetas', texto: 'Estampado delantero y tejido ligero para el día a día.', precio: null, tallas: TALLAS_ROPA, colores: ['Blanco', 'Rosa'], fotos: [] },
    { id: 'jersey-punto', nombre: 'Jersey de punto grueso', categoria: 'jersey', texto: 'Punto calentito y holgado, perfecto para el invierno.', precio: null, tallas: TALLAS_ROPA, colores: ['Crudo', 'Marrón', 'Gris'], fotos: [], nuevo: true },
    { id: 'jersey-cuello-alto', nombre: 'Jersey de cuello alto', categoria: 'jersey', texto: 'Ajustado y fino, ideal debajo de una chaqueta.', precio: null, tallas: TALLAS_ROPA, colores: ['Negro', 'Camel'], fotos: [] },
    { id: 'sudadera-capucha', nombre: 'Sudadera con capucha', categoria: 'sudaderas', texto: 'Interior afelpado y bolsillo delantero.', precio: null, tallas: TALLAS_ROPA, colores: ['Gris', 'Rosa', 'Negro'], fotos: [] },
    { id: 'sudadera-oversize', nombre: 'Sudadera oversize', categoria: 'sudaderas', texto: 'Corte amplio y cómodo para cualquier plan.', precio: null, tallas: TALLAS_ROPA, colores: ['Crema', 'Verde'], fotos: [], nuevo: true },
    { id: 'chaqueta-vaquera', nombre: 'Chaqueta vaquera', categoria: 'chaquetas', texto: 'Un clásico que nunca falla, en azul lavado.', precio: null, tallas: TALLAS_ROPA, colores: ['Azul'], fotos: [] },
    { id: 'abrigo-pano', nombre: 'Abrigo de paño', categoria: 'chaquetas', texto: 'Largo, elegante y abrigado.', precio: null, tallas: TALLAS_ROPA, colores: ['Camel', 'Negro'], fotos: [], nuevo: true },
    { id: 'vaquero-recto', nombre: 'Vaquero recto', categoria: 'pantalones', texto: 'Tiro alto y pierna recta. Favorece a todas.', precio: null, tallas: ['34', '36', '38', '40', '42', '44'], colores: ['Azul claro', 'Azul oscuro'], fotos: [] },
    { id: 'pantalon-ancho', nombre: 'Pantalón ancho fluido', categoria: 'pantalones', texto: 'Tejido que cae bonito y cintura elástica.', precio: null, tallas: TALLAS_ROPA, colores: ['Negro', 'Beige'], fotos: [] },
    { id: 'conjunto-punto', nombre: 'Conjunto de punto', categoria: 'conjunto', texto: 'Jersey y pantalón a juego, cómodo y arreglado a la vez.', precio: null, tallas: TALLAS_ROPA, colores: ['Gris', 'Crudo'], fotos: [], nuevo: true },
    { id: 'conjunto-lino', nombre: 'Conjunto camisa y pantalón', categoria: 'conjunto', texto: 'Dos piezas fresquitas que también se llevan por separado.', precio: null, tallas: TALLAS_ROPA, colores: ['Blanco', 'Verde'], fotos: [] },
    { id: 'mallas-deporte', nombre: 'Mallas deportivas', categoria: 'deporte', texto: 'Tiro alto, sujetan y no transparentan.', precio: null, tallas: TALLAS_ROPA, colores: ['Negro', 'Burdeos'], fotos: [] },
    { id: 'top-deporte', nombre: 'Top deportivo', categoria: 'deporte', texto: 'Sujeción media para gimnasio, pilates o caminar.', precio: null, tallas: TALLAS_ROPA, colores: ['Negro', 'Rosa'], fotos: [] },
    { id: 'pijama-invierno', nombre: 'Pijama de invierno', categoria: 'pijamas', texto: 'Tejido polar suave para las noches frías.', precio: null, tallas: TALLAS_ROPA, colores: ['Rosa', 'Gris'], fotos: [], nuevo: true },
    { id: 'pijama-satinado', nombre: 'Pijama satinado', categoria: 'pijamas', texto: 'Camisa y pantalón con tacto de seda.', precio: null, tallas: TALLAS_ROPA, colores: ['Champán', 'Negro'], fotos: [] },
    { id: 'conjunto-lenceria', nombre: 'Conjunto de encaje', categoria: 'ropa-interior', texto: 'Sujetador y braguita de encaje a juego.', precio: null, tallas: ['85', '90', '95', '100'], colores: ['Negro', 'Nude'], fotos: [] },
    { id: 'pack-braguitas', nombre: 'Pack de braguitas de algodón', categoria: 'ropa-interior', texto: 'Pack de 3, cómodas y sin costuras.', precio: null, tallas: ['S', 'M', 'L', 'XL'], colores: ['Surtido'], fotos: [] },
    { id: 'zapatilla-blanca', nombre: 'Zapatillas blancas', categoria: 'calzado', texto: 'Las que van con todo, con suela cómoda.', precio: null, tallas: TALLAS_PIE, colores: ['Blanco'], fotos: [], nuevo: true },
    { id: 'botin-tacon', nombre: 'Botín de tacón ancho', categoria: 'calzado', texto: 'Tacón cómodo para todo el día.', precio: null, tallas: TALLAS_PIE, colores: ['Negro', 'Marrón'], fotos: [] },
    { id: 'bolso-bandolera', nombre: 'Bolso bandolera', categoria: 'bolsos-y-monederos', texto: 'Pequeño, con correa ajustable y cremallera.', precio: null, tallas: [], colores: ['Negro', 'Camel', 'Blanco'], fotos: [], nuevo: true },
    { id: 'monedero', nombre: 'Monedero con cremallera', categoria: 'bolsos-y-monederos', texto: 'Con hueco para tarjetas, monedas y billetes.', precio: null, tallas: [], colores: ['Rosa', 'Negro'], fotos: [] },
    { id: 'panuelo', nombre: 'Pañuelo estampado', categoria: 'accesorios', texto: 'Para el cuello, el pelo o el bolso.', precio: null, tallas: [], colores: ['Multicolor'], fotos: [] },
    { id: 'cinturon', nombre: 'Cinturón de piel', categoria: 'accesorios', texto: 'Hebilla dorada y acabado mate.', precio: null, tallas: [], colores: ['Negro', 'Marrón'], fotos: [] },
    { id: 'pendientes-aro', nombre: 'Pendientes de aro', categoria: 'bisuteria', texto: 'Aros dorados ligeros para todos los días.', precio: null, tallas: [], colores: ['Dorado', 'Plateado'], fotos: [], nuevo: true },
    { id: 'collar-perlas', nombre: 'Collar de perlas', categoria: 'bisuteria', texto: 'Un detalle elegante para regalar.', precio: null, tallas: [], colores: ['Blanco'], fotos: [] },
    { id: 'set-maquillaje', nombre: 'Set de maquillaje', categoria: 'beauty', texto: 'Lo básico para un look natural.', precio: null, tallas: [], colores: [], fotos: [] },
    { id: 'crema-manos', nombre: 'Crema de manos', categoria: 'beauty', texto: 'Hidrata sin dejar sensación grasa.', precio: null, tallas: [], colores: [], fotos: [] },
    { id: 'perfume-floral', nombre: 'Perfume floral', categoria: 'perfume', texto: 'Notas de flores blancas, fresco y duradero.', precio: null, tallas: [], colores: [], fotos: [], nuevo: true },
    { id: 'perfume-dulce', nombre: 'Perfume dulce', categoria: 'perfume', texto: 'Vainilla y frutos rojos para la noche.', precio: null, tallas: [], colores: [], fotos: [] },
    { id: 'vela-aromatica', nombre: 'Vela aromática', categoria: 'hogar', texto: 'Aroma suave y vaso de cristal reutilizable.', precio: null, tallas: [], colores: [], fotos: [] },
    { id: 'manta-sofa', nombre: 'Manta para el sofá', categoria: 'hogar', texto: 'Suave y calentita para las tardes de peli.', precio: null, tallas: [], colores: ['Crudo', 'Gris'], fotos: [] }
];
