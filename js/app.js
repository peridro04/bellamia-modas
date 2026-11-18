/* ==========================================================
   Bella Mía · tienda, cesta y pedido por WhatsApp
   ========================================================== */
(() => {
    'use strict';

    const T = window.TIENDA;
    const CATS = window.CATEGORIAS;
    const PRODS = window.PRODUCTOS;
    const CLAVE = 'bellamia_cesta';
    const $ = (s, el = document) => el.querySelector(s);
    const $$ = (s, el = document) => [...el.querySelectorAll(s)];

    const cat = (id) => CATS.find((c) => c.id === id);
    const prod = (id) => PRODS.find((p) => p.id === id);
    const euros = (n) => n.toLocaleString('es-ES', { style: 'currency', currency: 'EUR' });
    const esc = (t) => String(t).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));

    /* ---------- Iconos (SVG en línea, decorativos) ---------- */
    const ICONO = {
        flecha: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"/></svg>',
        bolsa: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M6 7h12l-1 13H7L6 7z"/><path d="M9 7a3 3 0 0 1 6 0"/></svg>',
        mas: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><path d="M12 5v14M5 12h14"/></svg>',
        cerrar: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><path d="M6 6l12 12M18 6L6 18"/></svg>',
        papelera: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 7h16M10 11v6M14 11v6M6 7l1 13h10l1-13M9 7V4h6v3"/></svg>',
        whatsapp: '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2zm0 18.2c-1.5 0-3-.4-4.2-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2zm4.5-6.1c-.2-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1l-.8 1c-.1.2-.3.2-.5.1a6.7 6.7 0 0 1-3.3-2.9c-.3-.4.2-.4.7-1.3.1-.2 0-.3 0-.4l-.8-1.8c-.2-.5-.4-.4-.6-.4h-.5c-.2 0-.4.1-.7.3-.2.3-.9.9-.9 2.2s.9 2.5 1 2.7c.1.2 1.8 2.8 4.4 3.9 1.6.7 2.3.8 3.1.6.5-.1 1.5-.6 1.7-1.2.2-.6.2-1.1.2-1.2-.1-.1-.3-.2-.7-.4z"/></svg>',
        telefono: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2z"/></svg>',
        instagram: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor"/></svg>',
        facebook: '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M14 9V7c0-.8.5-1 1-1h2V2.1L14.3 2C11.4 2 10 3.8 10 6.6V9H7v4h3v9h4v-9h3l.5-4H14z"/></svg>',
        tiktok: '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M16.6 2h-3.3v13.3a2.9 2.9 0 1 1-2-2.8V9.1a6.2 6.2 0 1 0 5.3 6.2V8.6a7.6 7.6 0 0 0 4.4 1.4V6.7a4.4 4.4 0 0 1-4.4-4.7z"/></svg>',
        ubicacion: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 22s7-6.1 7-12a7 7 0 0 0-14 0c0 5.9 7 12 7 12z"/><circle cx="12" cy="10" r="2.5"/></svg>',
        tienda: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M3 9l1.5-5h15L21 9M3 9v11h18V9M3 9h18M9 20v-6h6v6"/></svg>',
        chat: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21 12a8 8 0 0 1-11.8 7L3 21l2-6A8 8 0 1 1 21 12z"/></svg>',
        corazon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1-1.1a5.5 5.5 0 0 0-7.8 7.8L12 21l8.8-8.6a5.5 5.5 0 0 0 0-7.8z"/></svg>'
    };
    $$('[data-icono]').forEach((el) => { el.innerHTML = ICONO[el.dataset.icono] || ''; });

    /* ---------- Piezas visuales ---------- */

    // Foto de la categoría, o si no hay, la del primer producto con foto
    function fotoCategoria(c) {
        if (c.foto) return 'img/categorias/' + c.foto;
        const p = PRODS.find((x) => x.categoria === c.id && x.fotos.length);
        return p ? 'img/productos/' + p.fotos[0] : '';
    }

    function piezaCategoria(c, etiqueta = 'h3') {
        const foto = fotoCategoria(c);
        return `<a class="pieza${foto ? ' con-foto' : ''}" href="tienda.html?seccion=${c.id}" style="--tono:${c.tono}">
            ${foto ? `<img src="${foto}" alt="" loading="lazy">` : `<span class="inicial" aria-hidden="true">${esc(c.nombre[0])}</span>`}
            <span class="flecha">${ICONO.flecha}</span>
            <span class="pie-pieza"><${etiqueta} class="titulo-pieza">${esc(c.nombre)}</${etiqueta}><span class="texto-pieza">${esc(c.texto)}</span></span>
        </a>`;
    }

    function fotoProducto(p, clase = '') {
        const c = cat(p.categoria);
        return p.fotos.length
            ? `<img src="img/productos/${esc(p.fotos[0])}" alt="${esc(p.nombre)}" loading="lazy" class="${clase}">`
            : `<span class="inicial" aria-hidden="true">${esc(c.nombre[0])}</span>`;
    }

    const textoPrecio = (p) => (typeof p.precio === 'number' ? euros(p.precio) : 'Consultar precio');

    function tarjetaProducto(p) {
        const c = cat(p.categoria);
        return `<li class="producto" data-seccion="${c.id}">
            <div class="foto" style="--tono:${c.tono}">
                ${fotoProducto(p)}
                ${p.nuevo ? '<span class="marca-nuevo">Nuevo</span>' : ''}
            </div>
            <button type="button" class="anadir-rapido" data-anadir="${p.id}" aria-label="Añadir ${esc(p.nombre)} a la cesta">${ICONO.mas}</button>
            <h3><a href="producto.html?id=${p.id}">${esc(p.nombre)}</a></h3>
            <p class="seccion-producto">${esc(c.nombre)}</p>
            <p class="precio">${textoPrecio(p)}</p>
        </li>`;
    }

    /* ---------- Página de inicio ---------- */

    const mosaico = $('#mosaico');
    if (mosaico) {
        // En el mosaico los nombres no son encabezados, por eso van en <span>
        ['conjunto', 'bolsos-y-monederos', 'perfume'].forEach((id) => { mosaico.insertAdjacentHTML('beforeend', piezaCategoria(cat(id), 'span')); });
    }

    const secciones = $('#secciones');
    if (secciones) {
        const grupos = [...new Set(CATS.map((c) => c.grupo))];
        secciones.innerHTML = grupos.map((g, i) => `
            <h3 class="grupo-titulo" id="grupo-${i}">${esc(g)}</h3>
            <ul class="rejilla-secciones" aria-labelledby="grupo-${i}">
                ${CATS.filter((c) => c.grupo === g).map((c, j) => `<li${j === 0 ? ' class="grande"' : ''}>${piezaCategoria(c, 'h4')}</li>`).join('')}
            </ul>`).join('');
    }

    const novedades = $('#novedades');
    if (novedades) {
        novedades.innerHTML = PRODS.filter((p) => p.nuevo).slice(0, 8).map(tarjetaProducto).join('');
    }

    $$('[data-total-secciones]').forEach((el) => { el.textContent = CATS.length; });

    /* ---------- Tienda con filtros ---------- */

    const lista = $('#listaProductos');
    if (lista) {
        const filtros = $('#filtros');
        filtros.innerHTML = [{ id: 'todo', nombre: 'Todo' }, ...CATS]
            .map((c) => `<li><button type="button" data-filtro="${c.id}" aria-pressed="false">${esc(c.nombre)}</button></li>`).join('');

        lista.innerHTML = PRODS.map(tarjetaProducto).join('');
        const resultado = $('#resultado');
        const titulo = $('#tituloTienda');

        const filtrar = (id, cambiarUrl = true) => {
            const c = cat(id);
            $$('[data-filtro]', filtros).forEach((b) => b.setAttribute('aria-pressed', b.dataset.filtro === id));
            let n = 0;
            $$('.producto', lista).forEach((li) => {
                const ver = id === 'todo' || li.dataset.seccion === id;
                li.hidden = !ver;
                if (ver) n++;
            });
            titulo.textContent = c ? c.nombre : 'Toda la tienda';
            resultado.textContent = `${n} ${n === 1 ? 'producto' : 'productos'}${c ? ' en ' + c.nombre.toLowerCase() : ''}`;
            document.title = `${c ? c.nombre : 'Tienda'} | ${T.nombre}`;
            if (cambiarUrl) history.replaceState(null, '', c ? `?seccion=${id}` : 'tienda.html');
        };

        filtros.addEventListener('click', (e) => {
            const b = e.target.closest('[data-filtro]');
            if (b) filtrar(b.dataset.filtro);
        });

        const inicial = new URLSearchParams(location.search).get('seccion');
        filtrar(cat(inicial) ? inicial : 'todo', false);
        const activo = $('[aria-pressed="true"]', filtros);
        if (activo && inicial) activo.scrollIntoView({ block: 'nearest', inline: 'center' });
    }

    /* ---------- Ficha de producto ---------- */

    const ficha = $('#ficha');
    if (ficha) {
        const p = prod(new URLSearchParams(location.search).get('id'));
        if (!p) {
            ficha.innerHTML = `<div class="cesta-vacia"><h1>No encontramos ese producto</h1><p>Puede que ya no esté disponible.</p><a class="boton boton-principal" href="tienda.html">Ver la tienda</a></div>`;
        } else {
            const c = cat(p.categoria);
            document.title = `${p.nombre} | ${T.nombre}`;
            $('#migaSeccion').innerHTML = `<a href="tienda.html?seccion=${c.id}">${esc(c.nombre)}</a>`;
            $('#migaProducto').textContent = p.nombre;

            const grupoOpciones = (nombre, valores) => valores.length ? `
                <fieldset class="opciones">
                    <legend>${nombre}</legend>
                    <div class="lista">
                        ${valores.map((v, i) => `<input type="radio" name="${nombre.toLowerCase()}" id="${nombre}-${i}" value="${esc(v)}"${i === 0 && valores.length === 1 ? ' checked' : ''}><label for="${nombre}-${i}">${esc(v)}</label>`).join('')}
                    </div>
                </fieldset>` : '';

            ficha.innerHTML = `
                <div class="galeria">
                    <div class="principal" style="--tono:${c.tono}">${fotoProducto(p, 'foto-principal')}</div>
                    ${p.fotos.length > 1 ? `<div class="miniaturas">${p.fotos.map((f, i) => `<button type="button" data-foto="${esc(f)}" aria-label="Ver foto ${i + 1}"${i === 0 ? ' aria-current="true"' : ''}><img src="img/productos/${esc(f)}" alt=""></button>`).join('')}</div>` : ''}
                </div>
                <div class="info">
                    <p class="etiqueta">${esc(c.nombre)}</p>
                    <h1>${esc(p.nombre)}</h1>
                    <p class="precio-ficha">${textoPrecio(p)}</p>
                    <p class="descripcion">${esc(p.texto)}</p>
                    <form id="formProducto" novalidate>
                        ${grupoOpciones('Talla', p.tallas)}
                        ${grupoOpciones('Color', p.colores)}
                        <p class="campo-error visualmente-oculto" id="errorOpciones" role="alert"></p>
                        <div class="fila-compra">
                            <div class="cantidad" role="group" aria-label="Cantidad">
                                <button type="button" data-paso="-1" aria-label="Quitar una unidad">−</button>
                                <output id="cantidad" aria-live="polite">1</output>
                                <button type="button" data-paso="1" aria-label="Añadir una unidad">+</button>
                            </div>
                            <button type="submit" class="boton boton-principal">${ICONO.bolsa} Añadir a la cesta</button>
                        </div>
                        <button type="button" class="boton boton-wa boton-bloque" id="pedirYa">${ICONO.whatsapp} Pedir ahora por WhatsApp</button>
                    </form>
                    <ul class="ventajas">
                        <li>${ICONO.chat} Te contestamos por WhatsApp para confirmar talla y disponibilidad.</li>
                        <li>${ICONO.tienda} Recógelo en la tienda o pregúntanos por el envío.</li>
                        <li>${ICONO.corazon} Si no te queda bien, te lo cambiamos.</li>
                    </ul>
                </div>`;

            const relacionados = $('#relacionados');
            relacionados.innerHTML = PRODS.filter((x) => x.categoria === p.categoria && x.id !== p.id)
                .concat(PRODS.filter((x) => x.categoria !== p.categoria && x.nuevo)).slice(0, 4).map(tarjetaProducto).join('');

            let cantidad = 1;
            ficha.addEventListener('click', (e) => {
                const paso = e.target.closest('[data-paso]');
                if (paso) {
                    cantidad = Math.max(1, Math.min(20, cantidad + Number(paso.dataset.paso)));
                    $('#cantidad').textContent = cantidad;
                }
                const mini = e.target.closest('[data-foto]');
                if (mini) {
                    $('.foto-principal').src = 'img/productos/' + mini.dataset.foto;
                    $$('[data-foto]').forEach((b) => b.removeAttribute('aria-current'));
                    mini.setAttribute('aria-current', 'true');
                }
            });

            // Comprueba que se ha elegido talla y color
            const leerOpciones = () => {
                const error = $('#errorOpciones');
                const faltan = [];
                const talla = $('input[name="talla"]:checked')?.value;
                const color = $('input[name="color"]:checked')?.value;
                if (p.tallas.length && !talla) faltan.push('una talla');
                if (p.colores.length && !color) faltan.push('un color');
                if (faltan.length) {
                    error.textContent = `Elige ${faltan.join(' y ')} antes de continuar.`;
                    error.classList.remove('visualmente-oculto');
                    $(`input[name="${p.tallas.length && !talla ? 'talla' : 'color'}"]`).focus();
                    return null;
                }
                error.textContent = '';
                error.classList.add('visualmente-oculto');
                return { talla, color };
            };

            $('#formProducto').addEventListener('submit', (e) => {
                e.preventDefault();
                const o = leerOpciones();
                if (o) anadir(p.id, o, cantidad);
            });

            $('#pedirYa').addEventListener('click', () => {
                const o = leerOpciones();
                if (!o) return;
                window.open(enlaceWhatsApp([{ id: p.id, ...o, cantidad }]), '_blank', 'noopener');
            });
        }
    }

    /* ---------- Cesta ---------- */

    const leer = () => { try { return JSON.parse(localStorage.getItem(CLAVE)) || []; } catch (e) { return []; } };
    const guardar = (c) => { localStorage.setItem(CLAVE, JSON.stringify(c)); pintarCesta(); };

    function anadir(id, { talla, color } = {}, cantidad = 1) {
        const c = leer();
        const ya = c.find((i) => i.id === id && i.talla === talla && i.color === color);
        if (ya) ya.cantidad = Math.min(20, ya.cantidad + cantidad);
        else c.push({ id, talla, color, cantidad });
        guardar(c);
        avisar(`${prod(id).nombre} se ha añadido a la cesta.`);
    }

    // Cesta: <dialog> nativo (cierra con Esc y atrapa el foco)
    document.body.insertAdjacentHTML('beforeend', `
        <dialog class="cesta" id="cesta" aria-labelledby="tituloCesta">
            <div class="cesta-cabecera">
                <h2 id="tituloCesta">Tu cesta</h2>
                <button type="button" class="cerrar" data-cerrar-cesta aria-label="Cerrar la cesta">${ICONO.cerrar}</button>
            </div>
            <div class="cesta-cuerpo"><ul class="cesta-lista" id="cestaLista"></ul></div>
            <div class="cesta-pie" id="cestaPie">
                <div class="campo">
                    <label for="nombreCliente">Tu nombre (opcional)</label>
                    <input type="text" id="nombreCliente" autocomplete="given-name">
                </div>
                <div class="campo">
                    <label for="entrega">¿Cómo lo quieres?</label>
                    <select id="entrega">
                        <option>Lo recojo en la tienda</option>
                        <option>Quiero que me lo enviéis</option>
                    </select>
                </div>
                <p class="total" id="cestaTotal" hidden><span>Total aproximado</span><span></span></p>
                <a class="boton boton-wa boton-bloque" id="enviarPedido" href="#" target="_blank" rel="noopener">${ICONO.whatsapp} Enviar pedido por WhatsApp</a>
                <p class="nota">Se abrirá WhatsApp con tu pedido escrito para ${esc(T.nombre)}.<br>¿Prefieres llamar? <a href="tel:+${T.whatsapp}">${esc(T.telefonoVisible)}</a></p>
            </div>
        </dialog>
        <div class="aviso" id="aviso" role="status" aria-live="polite">
            <span></span>
            <button type="button" data-abrir-cesta>Ver cesta</button>
        </div>`);

    const dialogo = $('#cesta');

    function abrirCesta() {
        if (!dialogo.open) dialogo.showModal();
    }

    document.addEventListener('click', (e) => {
        if (e.target.closest('[data-abrir-cesta]')) { abrirCesta(); return; }
        if (e.target.closest('[data-cerrar-cesta]')) { dialogo.close(); return; }
        const rapido = e.target.closest('[data-anadir]');
        if (rapido) {
            const p = prod(rapido.dataset.anadir);
            // Si tiene tallas o varios colores hay que elegirlos en la ficha
            if (p.tallas.length || p.colores.length > 1) {
                location.href = `producto.html?id=${p.id}`;
                return;
            }
            anadir(p.id, { color: p.colores[0] });
        }
        const cambio = e.target.closest('[data-cambiar]');
        if (cambio) {
            const c = leer();
            const i = Number(cambio.dataset.indice);
            c[i].cantidad += Number(cambio.dataset.cambiar);
            if (c[i].cantidad <= 0) c.splice(i, 1);
            guardar(c);
        }
        const quitar = e.target.closest('[data-quitar]');
        if (quitar) {
            const c = leer();
            c.splice(Number(quitar.dataset.quitar), 1);
            guardar(c);
            $('#tituloCesta').focus?.();
        }
    });

    // Clic fuera del panel lo cierra
    dialogo.addEventListener('click', (e) => { if (e.target === dialogo) dialogo.close(); });

    function lineaPedido(i) {
        const p = prod(i.id);
        const extra = [i.talla && 'talla ' + i.talla, i.color].filter(Boolean).join(', ');
        return `${i.cantidad} × ${p.nombre}${extra ? ' (' + extra + ')' : ''}`;
    }

    function enlaceWhatsApp(items) {
        const nombre = $('#nombreCliente')?.value.trim();
        const entrega = $('#entrega')?.value;
        const lineas = items.map((i) => '• ' + lineaPedido(i)).join('\n');
        const texto = `¡Hola ${T.nombre}! 👋${nombre ? ' Soy ' + nombre + '.' : ''}\nMe gustaría pedir:\n${lineas}${entrega ? '\n\n' + entrega + '.' : ''}\n\n¿Me confirmáis si lo tenéis? ¡Gracias!`;
        return `https://wa.me/${T.whatsapp}?text=${encodeURIComponent(texto)}`;
    }

    function pintarCesta() {
        const c = leer().filter((i) => prod(i.id));
        const unidades = c.reduce((s, i) => s + i.cantidad, 0);
        $$('.contador').forEach((el) => { el.textContent = unidades; });
        $$('.boton-cesta').forEach((b) => b.setAttribute('aria-label', `Abrir la cesta, ${unidades} ${unidades === 1 ? 'producto' : 'productos'}`));

        const listaCesta = $('#cestaLista');
        $('#cestaPie').hidden = c.length === 0;
        if (!c.length) {
            listaCesta.innerHTML = `<li class="cesta-vacia"><p>Tu cesta está vacía.</p><a class="boton boton-borde" href="tienda.html">Ver la tienda</a></li>`;
            return;
        }
        listaCesta.innerHTML = c.map((i, n) => {
            const p = prod(i.id);
            const k = cat(p.categoria);
            const extra = [i.talla && 'Talla ' + i.talla, i.color].filter(Boolean).join(' · ');
            return `<li class="cesta-item">
                <div class="mini" style="--tono:${k.tono}">${p.fotos.length ? `<img src="img/productos/${esc(p.fotos[0])}" alt="">` : `<span aria-hidden="true">${esc(k.nombre[0])}</span>`}</div>
                <div>
                    <h3><a href="producto.html?id=${p.id}">${esc(p.nombre)}</a></h3>
                    <p class="detalle">${esc(extra || k.nombre)} · ${textoPrecio(p)}</p>
                    <div class="cantidad" role="group" aria-label="Cantidad de ${esc(p.nombre)}">
                        <button type="button" data-cambiar="-1" data-indice="${n}" aria-label="Quitar una unidad">−</button>
                        <output>${i.cantidad}</output>
                        <button type="button" data-cambiar="1" data-indice="${n}" aria-label="Añadir una unidad">+</button>
                    </div>
                </div>
                <button type="button" class="quitar" data-quitar="${n}" aria-label="Eliminar ${esc(p.nombre)} de la cesta">${ICONO.papelera}</button>
            </li>`;
        }).join('');

        // Total solo si todos los productos tienen precio
        const total = $('#cestaTotal');
        const conPrecio = c.every((i) => typeof prod(i.id).precio === 'number');
        total.hidden = !conPrecio;
        if (conPrecio) total.lastElementChild.textContent = euros(c.reduce((s, i) => s + prod(i.id).precio * i.cantidad, 0));

        $('#enviarPedido').href = enlaceWhatsApp(c);
    }

    // El enlace se actualiza al escribir el nombre o cambiar la entrega
    ['input', 'change'].forEach((ev) => $('#cestaPie').addEventListener(ev, () => { $('#enviarPedido').href = enlaceWhatsApp(leer().filter((i) => prod(i.id))); }));

    let temporizador;
    function avisar(texto) {
        const a = $('#aviso');
        a.querySelector('span').textContent = texto;
        a.classList.add('visible');
        clearTimeout(temporizador);
        temporizador = setTimeout(() => a.classList.remove('visible'), 4000);
    }

    /* ---------- Menú móvil ---------- */

    const botonMenu = $('.boton-menu');
    const menu = $('#menu');
    botonMenu?.addEventListener('click', () => {
        const abierto = menu.classList.toggle('abierto');
        botonMenu.setAttribute('aria-expanded', abierto);
    });
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && menu?.classList.contains('abierto')) {
            menu.classList.remove('abierto');
            botonMenu.setAttribute('aria-expanded', 'false');
            botonMenu.focus();
        }
    });

    /* ---------- Datos de contacto ---------- */

    $$('[data-wa]').forEach((a) => { a.href = `https://wa.me/${T.whatsapp}?text=${encodeURIComponent(`¡Hola ${T.nombre}! Tengo una pregunta:`)}`; });
    $$('[data-tel]').forEach((a) => { a.href = `tel:+${T.whatsapp}`; });
    $$('[data-tel-texto]').forEach((el) => { el.textContent = T.telefonoVisible; });
    $$('[data-red]').forEach((a) => { a.href = T.redes[a.dataset.red]; });
    $$('[data-usuario]').forEach((el) => { el.textContent = '@' + T.usuarioRedes; });
    $$('[data-mapa]').forEach((a) => { if (T.mapa) a.href = T.mapa; else a.closest('li').hidden = true; });
    $$('[data-direccion]').forEach((el) => { el.textContent = T.direccion || 'Ver en Google Maps'; });
    $$('[data-horario]').forEach((el) => { if (T.horario) el.textContent = T.horario; else el.hidden = true; });
    $$('.anio').forEach((el) => { el.textContent = new Date().getFullYear(); });

    pintarCesta();
})();
