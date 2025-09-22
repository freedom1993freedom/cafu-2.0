const createId = (text) => {
  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9 -]/g, "")
    .trim()
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
};

export const lineas = [
  {
    id: 'volare',
    name: 'Volare',
    description: 'Diseño de vanguardia y rendimiento excepcional en grifería.',
    heroImage: '/images/hero/placeholder.jpg',
    color: '#e9741f',
    sublineas: [
      {
        id: 'reno',
        name: 'Reno',
        productos: [
          {
            id: createId('Griferia RENO – Lavatorio'),
            name: 'Griferia RENO – Lavatorio',
            shortDescription: 'Descripción corta para este producto.',
            image: '/images/hero/placeholder.jpg',
          },
          {
            id: createId('Griferia RENO - Bidet'),
            name: 'Griferia RENO - Bidet',
            shortDescription: 'Descripción corta para este producto.',
            image: '/images/hero/placeholder.jpg',
          },
          {
            id: createId('Griferia RENO - Bañera Exterior'),
            name: 'Griferia RENO - Bañera Exterior',
            shortDescription: 'Descripción corta para este producto.',
            image: '/images/hero/placeholder.jpg',
          },
          {
            id: createId('Griferia RENO - Cocina'),
            name: 'Griferia RENO - Cocina',
            shortDescription: 'Descripción corta para este producto.',
            image: '/images/hero/placeholder.jpg',
          },
          {
            id: createId('Griferia RENO - Cocina Pico Bar'),
            name: 'Griferia RENO - Cocina Pico Bar',
            shortDescription: 'Descripción corta para este producto.',
            image: '/images/hero/placeholder.jpg',
          },
          {
            id: createId('Griferia RENO – Cocina Pico Cisne'),
            name: 'Griferia RENO – Cocina Pico Cisne',
            shortDescription: 'Descripción corta para este producto.',
            image: '/images/hero/placeholder.jpg',
          },
        ]
      },
      {
        id: 'roma-cruz',
        name: 'Roma Cruz',
        productos: [
          {
            id: createId('Griferia Roma Cruz – Lavatorio'),
            name: 'Griferia Roma Cruz – Lavatorio',
            shortDescription: 'Descripción corta para este producto.',
            image: '/images/hero/placeholder.jpg',
          },
          {
            id: createId('Griferia Roma Cruz – Bidet'),
            name: 'Griferia Roma Cruz – Bidet',
            shortDescription: 'Descripción corta para este producto.',
            image: '/images/hero/placeholder.jpg',
          },
          {
            id: createId('Griferia Roma Cruz – Bañera Exterior con Duchador'),
            name: 'Griferia Roma Cruz – Bañera Exterior con Duchador',
            shortDescription: 'Descripción corta para este producto.',
            image: '/images/hero/placeholder.jpg',
          },
          {
            id: createId('Griferia Roma Cruz – Bañera'),
            name: 'Griferia Roma Cruz – Bañera',
            shortDescription: 'Descripción corta para este producto.',
            image: '/images/hero/placeholder.jpg',
          },
          {
            id: createId('Griferia Roma Cruz – Cocina Mesada'),
            name: 'Griferia Roma Cruz – Cocina Mesada',
            shortDescription: 'Descripción corta para este producto.',
            image: '/images/hero/placeholder.jpg',
          },
          {
            id: createId('Griferia Roma Cruz – Cocina Pared'),
            name: 'Griferia Roma Cruz – Cocina Pared',
            shortDescription: 'Descripción corta para este producto.',
            image: '/images/hero/placeholder.jpg',
          },
        ]
      },
      {
        id: 'roma',
        name: 'Roma',
        productos: [
          {
            id: 'lavatorio',
            name: 'Grifería Roma – Lavatorio',
            shortDescription: 'Un diseño clásico y elegante que perdura en el tiempo.',
            longDescription: 'La grifería Roma para lavatorio combina un diseño atemporal con la robustez y confiabilidad que caracterizan a Cafu. Su acabado en cromo brillante no solo aporta un toque de elegancia a cualquier baño, sino que también garantiza una resistencia superior a la corrosión y al uso diario. Los volantes ergonómicos permiten un control preciso del caudal y la temperatura, asegurando una experiencia de uso confortable y eficiente.',
            image: '/images/hero/placeholder.jpg',
            keyFeatures: [
                { title: 'Cierre Cerámico', description: 'Mecanismo de 1/4 de vuelta para un cierre suave y preciso.' },
                { title: 'Cuerpo de Latón', description: 'Garantiza la máxima durabilidad y resistencia a la corrosión.' },
                { title: 'Acabado Brillante', description: 'Múltiples capas de cromo que aseguran un brillo inalterable.' }
            ],
            specs: { 
              'Acabado': 'Cromo brillante',
              'Comando': 'Doble comando',
              'Material del Cuerpo': 'Latón',
              'Tipo de Cierre': 'Cerámico',
              'Pico': 'Aireador espumante para ahorro de agua'
            }
          },
          {
            id: createId('Griferia Roma – Bidet'),
            name: 'Griferia Roma – Bidet',
            shortDescription: 'Descripción corta para este producto.',
            image: '/images/hero/placeholder.jpg',
          },
          {
            id: createId('Griferia Roma – Bañera Exterior con Duchador'),
            name: 'Griferia Roma – Bañera Exterior con Duchador',
            shortDescription: 'Descripción corta para este producto.',
            image: '/images/hero/placeholder.jpg',
          },
          {
            id: createId('Griferia Roma – Bañera'),
            name: 'Griferia Roma – Bañera',
            shortDescription: 'Descripción corta para este producto.',
            image: '/images/hero/placeholder.jpg',
          },
          {
            id: createId('Griferia Roma – Cocina Mesada'),
            name: 'Griferia Roma – Cocina Mesada',
            shortDescription: 'Descripción corta para este producto.',
            image: '/images/hero/placeholder.jpg',
          },
          {
            id: createId('Griferia Roma – Cocina Pared'),
            name: 'Griferia Roma – Cocina Pared',
            shortDescription: 'Descripción corta para este producto.',
            image: '/images/hero/placeholder.jpg',
          },
        ]
      },
      {
        id: 'roma-metal',
        name: 'Roma Metal',
        productos: [
          {
            id: createId('Griferia Roma Metal – Lavatorio'),
            name: 'Griferia Roma Metal – Lavatorio',
            shortDescription: 'Descripción corta para este producto.',
            image: '/images/hero/placeholder.jpg',
          },
          {
            id: createId('Griferia Roma Metal – Bidet'),
            name: 'Griferia Roma Metal – Bidet',
            shortDescription: 'Descripción corta para este producto.',
            image: '/images/hero/placeholder.jpg',
          },
          {
            id: createId('Griferia Roma Metal – Bañera Exterior con Duchador'),
            name: 'Griferia Roma Metal – Bañera Exterior con Duchador',
            shortDescription: 'Descripción corta para este producto.',
            image: '/images/hero/placeholder.jpg',
          },
          {
            id: createId('Griferia Roma Metal – Bañera'),
            name: 'Griferia Roma Metal – Bañera',
            shortDescription: 'Descripción corta para este producto.',
            image: '/images/hero/placeholder.jpg',
          },
          {
            id: createId('Griferia Roma Metal – Cocina Mesada'),
            name: 'Griferia Roma Metal – Cocina Mesada',
            shortDescription: 'Descripción corta para este producto.',
            image: '/images/hero/placeholder.jpg',
          },
          {
            id: createId('Griferia Roma Metal – Cocina Pared'),
            name: 'Griferia Roma Metal – Cocina Pared',
            shortDescription: 'Descripción corta para este producto.',
            image: '/images/hero/placeholder.jpg',
          },
        ]
      }
    ]
  },
  {
    id: 'cafuflex',
    name: 'CafuFlex',
    description: 'Máxima flexibilidad y durabilidad para conexiones de agua seguras.',
    heroImage: '/images/hero/placeholder.jpg',
    color: '#235f83',
    sublineas: [
      {
        id: 'flexibles',
        name: 'Flexibles',
        productos: [
            { id: createId('Flexible de Cobre Cromado'), name: 'Flexible de Cobre Cromado', shortDescription: 'Descripción corta para este producto.', image: '/images/hero/placeholder.jpg' },
            { id: createId('Flexible Mallado de Acero Inoxidable Macho Giratorio'), name: 'Flexible Mallado de Acero Inoxidable Macho Giratorio', shortDescription: 'Descripción corta para este producto.', image: '/images/hero/placeholder.jpg' },
            { id: createId('Flexible Mallado de Acero Inoxidable Macho Fijo'), name: 'Flexible Mallado de Acero Inoxidable Macho Fijo', shortDescription: 'Descripción corta para este producto.', image: '/images/hero/placeholder.jpg' },
            { id: createId('Flexible Mallado de Aluminio'), name: 'Flexible Mallado de Aluminio', shortDescription: 'Descripción corta para este producto.', image: '/images/hero/placeholder.jpg' },
            { id: createId('Flexibles Para Monocomando Hembra'), name: 'Flexibles Para Monocomando Hembra', shortDescription: 'Descripción corta para este producto.', image: '/images/hero/placeholder.jpg' },
            { id: createId('Flexibles Para Monocomando Macho'), name: 'Flexibles Para Monocomando Macho', shortDescription: 'Descripción corta para este producto.', image: '/images/hero/placeholder.jpg' },
            { id: createId('Flexible para Duchadores Pulido'), name: 'Flexible para Duchadores Pulido', shortDescription: 'Descripción corta para este producto.', image: '/images/hero/placeholder.jpg' },
            { id: createId('Flexible para Duchadores Cromado'), name: 'Flexible para Duchadores Cromado', shortDescription: 'Descripción corta para este producto.', image: '/images/hero/placeholder.jpg' }
        ]
      },
      {
        id: 'descarga-sifones-prolongaciones',
        name: 'Descarga / Sifones / Prolongaciones',
        productos: [
            { id: createId('Prolongación Cromada y Estriada'), name: 'Prolongación Cromada y Estriada', shortDescription: 'Descripción corta para este producto.', image: '/images/hero/placeholder.jpg' },
            { id: createId('Descargas de Cobre Cromadas Para Lavatorio – Flexible'), name: 'Descargas de Cobre Cromadas Para Lavatorio – Flexible', shortDescription: 'Descripción corta para este producto.', image: '/images/hero/placeholder.jpg' },
            { id: createId('Descargas de Cobre Cromada Para Inodoro - Flexible'), name: 'Descargas de Cobre Cromada Para Inodoro - Flexible', shortDescription: 'Descripción corta para este producto.', image: '/images/hero/placeholder.jpg' },
            { id: createId('Descargas de Cobre Cromada Para Inodoro – Rigida'), name: 'Descargas de Cobre Cromada Para Inodoro – Rigida', shortDescription: 'Descripción corta para este producto.', image: '/images/hero/placeholder.jpg' },
            { id: createId('Descarga de Cobre Cromada Para Mingitorio – Entrada'), name: 'Descarga de Cobre Cromada Para Mingitorio – Entrada', shortDescription: 'Descripción corta para este producto.', image: '/images/hero/placeholder.jpg' },
            { id: createId('Descarga de Cobre Cromada Para Mingitorio – Salida'), name: 'Descarga de Cobre Cromada Para Mingitorio – Salida', shortDescription: 'Descripción corta para este producto.', image: '/images/hero/placeholder.jpg' },
            { id: createId('Sifon Metálico para Lavatorio Fijo'), name: 'Sifon Metálico para Lavatorio Fijo', shortDescription: 'Descripción corta para este producto.', image: '/images/hero/placeholder.jpg' },
            { id: createId('Sifón Metálico Flexible'), name: 'Sifón Metálico Flexible', shortDescription: 'Descripción corta para este producto.', image: '/images/hero/placeholder.jpg' }
        ]
      }
    ]
  },
  {
    id: 'cafuval',
    name: 'CafuVal',
    description: 'Control total y resistencia superior en válvulas y canillas.',
    heroImage: '/images/hero/placeholder.jpg',
    color: '#c91f3a',
    sublineas: [
        {
            id: 'cuatro-estrellas',
            name: 'Cuatro Estrellas',
            productos: [
                { id: createId('Canilla de Bronce Mariposa'), name: 'Canilla de Bronce Mariposa', shortDescription: 'Descripción corta para este producto.', image: '/images/hero/placeholder.jpg' },
                { id: createId('Canilla de Bronce Palanca'), name: 'Canilla de Bronce Palanca', shortDescription: 'Descripción corta para este producto.', image: '/images/hero/placeholder.jpg' },
                { id: createId('Válvula Esférica de Bronce'), name: 'Válvula Esférica de Bronce', shortDescription: 'Descripción corta para este producto.', image: '/images/hero/placeholder.jpg' }
            ]
        },
        {
            id: 'tres-estrellas',
            name: 'Tres Estrellas',
            productos: [
                { id: createId('Canilla Económica Mariposa'), name: 'Canilla Económica Mariposa', shortDescription: 'Descripción corta para este producto.', image: '/images/hero/placeholder.jpg' },
                { id: createId('Canilla Económica Palanca'), name: 'Canilla Económica Palanca', shortDescription: 'Descripción corta para este producto.', image: '/images/hero/placeholder.jpg' },
                { id: createId('Válvula Esférica de Bronce Tres Estrellas'), name: 'Válvula Esférica de Bronce', shortDescription: 'Descripción corta para este producto.', image: '/images/hero/placeholder.jpg' }
            ]
        },
        {
            id: 'dos-estrellas',
            name: 'Dos Estrellas',
            productos: [
                { id: createId('Canilla Compacta Mariposa'), name: 'Canilla Compacta Mariposa', shortDescription: 'Descripción corta para este producto.', image: '/images/hero/placeholder.jpg' },
                { id: createId('Canilla Compacta Palanca'), name: 'Canilla Compacta Palanca', shortDescription: 'Descripción corta para este producto.', image: '/images/hero/placeholder.jpg' },
                { id: createId('Válvula Esférica de Riego'), name: 'Válvula Esférica de Riego', shortDescription: 'Descripción corta para este producto.', image: '/images/hero/placeholder.jpg' }
            ]
        },
        {
            id: 'valvulas-de-retencion',
            name: 'Válvulas de Retención',
            productos: [
                { id: createId('Valvula de Retención'), name: 'Valvula de Retención', shortDescription: 'Descripción corta para este producto.', image: '/images/hero/placeholder.jpg' },
                { id: createId('Valvula de Retención de Bronce'), name: 'Valvula de Retención de Bronce', shortDescription: 'Descripción corta para este producto.', image: '/images/hero/placeholder.jpg' }
            ]
        },
        {
            id: 'canillas-lavarropa',
            name: 'Canillas Lavarropa',
            productos: [
                { id: createId('Canilla Doble Para Lavarropas con Pico y Sin Pico'), name: 'Canilla Doble Para Lavarropas con Pico y Sin Pico', shortDescription: 'Descripción corta para este producto.', image: '/images/hero/placeholder.jpg' },
                { id: createId('Canilla Escuadra Para Lavarropas'), name: 'Canilla Escuadra Para Lavarropas', shortDescription: 'Descripción corta para este producto.', image: '/images/hero/placeholder.jpg' }
            ]
        },
        {
            id: 'canillas-un-agua',
            name: 'Canillas Un Agua',
            productos: [
                { id: createId('Canilla Lavatorio Un Agua'), name: 'Canilla Lavatorio Un Agua', shortDescription: 'Descripción corta para este producto.', image: '/images/hero/placeholder.jpg' },
                { id: createId('Canilla Lavatorio Un Agua Cierre Cerámico'), name: 'Canilla Lavatorio Un Agua Cierre Cerámico', shortDescription: 'Descripción corta para este producto.', image: '/images/hero/placeholder.jpg' },
                { id: createId('Canilla Lavatorio Un Agua Volante Cruz'), name: 'Canilla Lavatorio Un Agua Volante Cruz', shortDescription: 'Descripción corta para este producto.', image: '/images/hero/placeholder.jpg' },
                { id: createId('Canilla Lavatorio Un Agua Volante Cruz Cierre Cerámico'), name: 'Canilla Lavatorio Un Agua Volante Cruz Cierre Cerámico', shortDescription: 'Descripción corta para este producto.', image: '/images/hero/placeholder.jpg' },
                { id: createId('Canilla Mesada Un Agua Pico J'), name: 'Canilla Mesada Un Agua Pico J', shortDescription: 'Descripción corta para este producto.', image: '/images/hero/placeholder.jpg' },
                { id: createId('Canilla Pared Un Agua Pico Alto'), name: 'Canilla Pared Un Agua Pico Alto', shortDescription: 'Descripción corta para este producto.', image: '/images/hero/placeholder.jpg' },
                { id: createId('Canilla Pared Un Agua Pico Bajo'), name: 'Canilla Pared Un Agua Pico Bajo', shortDescription: 'Descripción corta para este producto.', image: '/images/hero/placeholder.jpg' }
            ]
        },
        {
            id: 'filtros-y-minivalvulas',
            name: 'Filtros y Miniválvulas',
            productos: [
                { id: createId('Filtros para Válvula de Retención'), name: 'Filtros para Válvula de Retención', shortDescription: 'Descripción corta para este producto.', image: '/images/hero/placeholder.jpg' },
                { id: createId('Miniválvula Esférica Cromada'), name: 'Miniválvula Esférica Cromada', shortDescription: 'Descripción corta para este producto.', image: '/images/hero/placeholder.jpg' }
            ]
        }
    ]
  },
  {
    id: 'cafuplas',
    name: 'CafuPlas',
    description: 'Soluciones prácticas y confiables en descargas y complementos.',
    heroImage: '/images/hero/placeholder.jpg',
    color: '#f3c330',
    sublineas: [
        {
            id: 'retractiles',
            name: 'Retráctiles',
            productos: [
                { id: createId('Retráctil Blanco'), name: 'Retráctil Blanco', shortDescription: 'Descripción corta para este producto.', image: '/images/hero/placeholder.jpg' },
                { id: createId('Retráctil Cromado'), name: 'Retráctil Cromado', shortDescription: 'Descripción corta para este producto.', image: '/images/hero/placeholder.jpg' }
            ]
        },
        {
            id: 'sopapas',
            name: 'Sopapas',
            productos: [
                { id: createId('Sopapa PVC Lisa Acero Inox.'), name: 'Sopapa PVC Lisa Acero Inox.', shortDescription: 'Descripción corta para este producto.', image: '/images/hero/placeholder.jpg' },
                { id: createId('Sopapa PVC Roscada Acero Inox.'), name: 'Sopapa PVC Roscada Acero Inox.', shortDescription: 'Descripción corta para este producto.', image: '/images/hero/placeholder.jpg' }
            ]
        },
        {
            id: 'teflon',
            name: 'Teflon',
            productos: [
                { id: createId('Teflón Standard'), name: 'Teflón Standard', shortDescription: 'Descripción corta para este producto.', image: '/images/hero/placeholder.jpg' },
                { id: createId('Teflón de alta densidad'), name: 'Teflón de alta densidad', shortDescription: 'Descripción corta para este producto.', image: '/images/hero/placeholder.jpg' },
                { id: createId('Teflon Premium'), name: 'Teflon Premium', shortDescription: 'Descripción corta para este producto.', image: '/images/hero/placeholder.jpg' }
            ]
        }
    ]
  },
  {
    id: 'cafuplus',
    name: 'CafuPlus',
    description: 'Herramientas y accesorios para una instalación profesional.',
    heroImage: '/images/hero/placeholder.jpg',
    color: '#065d28',
    sublineas: [
        {
            id: 'bombas',
            name: 'Bombas',
            productos: [
                { id: createId('Bomba Presurizadora'), name: 'Bomba Presurizadora', shortDescription: 'Descripción corta para este producto.', image: '/images/hero/placeholder.jpg' },
                { id: createId('Bomba Periférica 1/2HP'), name: 'Bomba Periférica 1/2HP', shortDescription: 'Descripción corta para este producto.', image: '/images/hero/placeholder.jpg' }
            ]
        },
        {
            id: 'fusoras',
            name: 'Fusoras',
            productos: [
                { id: createId('Fusora Económica con Maletín Plástico y Boquillas'), name: 'Fusora Económica con Maletín Plástico y Boquillas', shortDescription: 'Descripción corta para este producto.', image: '/images/hero/placeholder.jpg' },
                { id: createId('Fusora con Caja metálica y Boquilla'), name: 'Fusora con Caja metálica y Boquilla', shortDescription: 'Descripción corta para este producto.', image: '/images/hero/placeholder.jpg' }
            ]
        },
        {
            id: 'llaves-de-paso-repuestos',
            name: 'Llaves de paso / Repuestos',
            productos: [
                { id: createId('Llave de Paso Fusión Cabezal Bronce'), name: 'Llave de Paso Fusión Cabezal Bronce', shortDescription: 'Descripción corta para este producto.', image: '/images/hero/placeholder.jpg' },
                { id: createId('Llave de Paso Fusión Cabezal Plástico'), name: 'Llave de Paso Fusión Cabezal Plástico', shortDescription: 'Descripción corta para este producto.', image: '/images/hero/placeholder.jpg' },
                { id: createId('Repuesto Cabezal de Bronce'), name: 'Repuesto Cabezal de Bronce', shortDescription: 'Descripción corta para este producto.', image: '/images/hero/placeholder.jpg' },
                { id: createId('Repuesto Cabezal de Plástico'), name: 'Repuesto Cabezal de Plástico', shortDescription: 'Descripción corta para este producto.', image: '/images/hero/placeholder.jpg' },
                { id: createId('Repuesto Capuchón Cromado'), name: 'Repuesto Capuchón Cromado', shortDescription: 'Descripción corta para este producto.', image: '/images/hero/placeholder.jpg' },
                { id: createId('Repuesto Roseta Cromada'), name: 'Repuesto Roseta Cromada', shortDescription: 'Descripción corta para este producto.', image: '/images/hero/placeholder.jpg' }
            ]
        },
        {
            id: 'tijeras',
            name: 'Tijeras',
            productos: [
                { id: createId('Tijera Cortatubo Mini'), name: 'Tijera Cortatubo Mini', shortDescription: 'Descripción corta para este producto.', image: '/images/hero/placeholder.jpg' },
                { id: createId('Tijera cortatubos reforzada'), name: 'Tijera cortatubos reforzada', shortDescription: 'Descripción corta para este producto.', image: '/images/hero/placeholder.jpg' },
                { id: createId('Tijera Cortatubos Económica'), name: 'Tijera Cortatubos Económica', shortDescription: 'Descripción corta para este producto.', image: '/images/hero/placeholder.jpg' },
                { id: createId('Tijera Cortatubo Full'), name: 'Tijera Cortatubo Full', shortDescription: 'Descripción corta para este producto.', image: '/images/hero/placeholder.jpg' }
            ]
        }
    ]
  }
];

export const getAllLineas = () => lineas;
export const getLineaById = (id) => lineas.find(linea => linea.id === id);
export const getProductoByIds = (lineaId, sublineaId, productoId) => {
    const linea = getLineaById(lineaId);
    if (!linea) return null;
    const sublinea = linea.sublineas.find(s => s.id === sublineaId);
    if (!sublinea) return null;
    const producto = sublinea.productos.find(p => p.id === productoId);
    if (producto) {
        return { ...producto, linea, sublinea };
    }
    return null;
};
