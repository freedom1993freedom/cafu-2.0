import fs from 'fs';
import xlsx from 'xlsx';

// --- CONFIGURACIÓN ---
// CAMBIO: Ahora apunta al archivo .csv
const CSV_FILE_PATH = './catalogo-cafu.csv';
const OUTPUT_DATA_PATH = './app/lib/data.js';

console.log('Iniciando la conversión de CSV a data.js...');

// --- Funciones de procesamiento (sin cambios) ---
const createId = (text) => {
    if (!text) return '';
    return text
        .toString()
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .replace(/[^a-z0-9 -]/g, "")
        .trim()
        .replace(/\s+/g, "-")
        .replace(/-+/g, "-");
};

const parseMultiValueCell = (cellContent, separator = '|') => {
    if (!cellContent) return [];
    return cellContent.split(separator).map(item => {
        const [title, description] = item.split(':');
        return { title: title ? title.trim() : '', description: description ? description.trim() : '' };
    });
};

const parseSpecsCell = (cellContent, separator = '|') => {
    if (!cellContent) return {};
    const specs = {};
    cellContent.split(separator).forEach(item => {
        const [key, value] = item.split(':');
        if (key && value) {
            specs[key.trim()] = value.trim();
        }
    });
    return specs;
};

// --- LECTURA Y PROCESAMIENTO DEL CSV ---
try {
    const workbook = xlsx.readFile(CSV_FILE_PATH);
    const sheetName = workbook.SheetNames[0];
    const sheet = workbook.Sheets[sheetName];
    const data = xlsx.utils.sheet_to_json(sheet);

    const lineasMap = new Map();

    data.forEach(row => {
        const {
            linea_id, linea_nombre, linea_descripcion, linea_color, linea_imagen,
            sublinea_id, sublinea_nombre,
            producto_nombre, producto_imagen, producto_descripcion_corta,
            producto_descripcion_larga, puntos_fuertes, especificaciones
        } = row;

        if (!linea_id || !sublinea_id || !producto_nombre) return;

        if (!lineasMap.has(linea_id)) {
            lineasMap.set(linea_id, {
                id: linea_id,
                name: linea_nombre,
                description: linea_descripcion,
                heroImage: linea_imagen,
                color: linea_color,
                sublineas: new Map(),
            });
        }
        const currentLinea = lineasMap.get(linea_id);

        if (!currentLinea.sublineas.has(sublinea_id)) {
            currentLinea.sublineas.set(sublinea_id, {
                id: sublinea_id,
                name: sublinea_nombre,
                productos: [],
            });
        }
        const currentSublinea = currentLinea.sublineas.get(sublinea_id);

        currentSublinea.productos.push({
            id: createId(producto_nombre),
            name: producto_nombre,
            shortDescription: producto_descripcion_corta,
            longDescription: producto_descripcion_larga,
            image: producto_imagen,
            keyFeatures: parseMultiValueCell(puntos_fuertes),
            specs: parseSpecsCell(especificaciones),
        });
    });

    const finalLineas = Array.from(lineasMap.values()).map(linea => ({
        ...linea,
        sublineas: Array.from(linea.sublineas.values()),
    }));

    // --- GENERACIÓN DEL ARCHIVO data.js ---
    const fileContent = `
// Este archivo es generado automáticamente. ¡NO EDITAR MANUALMENTE!
export const lineas = ${JSON.stringify(finalLineas, null, 2)};

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
`;

    fs.writeFileSync(OUTPUT_DATA_PATH, fileContent.trim());
    console.log(`\x1b[32m%s\x1b[0m`, `¡Éxito! El archivo ${OUTPUT_DATA_PATH} ha sido actualizado con ${data.length} productos.`);

} catch (error) {
    console.error(`\x1b[31m%s\x1b[0m`, 'Error durante el proceso:', error.message);
}

