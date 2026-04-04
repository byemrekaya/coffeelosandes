export interface VenezuelaCoffeeMasterItem {
  segment: 'MICRO LOT' | 'SPECIALTY' | 'COMMERCIAL';
  uretici: string;
  ciftlik: string;
  bolge: string;
  cesit: string;
  cupping_score: string;
  ticari_segment: string;
}

export interface VenezuelaCoffeeMasterItemWithSlug extends VenezuelaCoffeeMasterItem {
  slug: string;
}

function toAscii(value: string): string {
  return value
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

export function getVenezuelaCoffeeMasterSlug(item: VenezuelaCoffeeMasterItem, index: number): string {
  const base = `${toAscii(item.cesit)}-${toAscii(item.bolge)}`;
  return `${base}-${index + 1}`;
}

export const venezuelaCoffeeMaster: VenezuelaCoffeeMasterItem[] = [
  { segment: 'MICRO LOT', uretici: 'Victor Montilla', ciftlik: 'El Caotal', bolge: 'Trujillo', cesit: 'Bourbon', cupping_score: '84-86', ticari_segment: 'Stabil Premium' },
  { segment: 'SPECIALTY', uretici: 'Victor Montilla', ciftlik: 'El Caotal', bolge: 'Trujillo', cesit: 'Caturra', cupping_score: '84-86', ticari_segment: 'Stabil Premium' },
  { segment: 'MICRO LOT', uretici: 'Yordany Megías', ciftlik: 'La Huaca', bolge: 'Mérida', cesit: 'Inia 01', cupping_score: '84-86', ticari_segment: 'Stabil Premium' },
  { segment: 'MICRO LOT', uretici: 'Yunior Andrade', ciftlik: 'Finca La Curva', bolge: 'Mérida', cesit: 'Monteclaro', cupping_score: '85-87', ticari_segment: 'Yüksek Segment' },
  { segment: 'SPECIALTY', uretici: 'Pausides J. Yepez G.', ciftlik: 'Finca Don Teo', bolge: 'Trujillo', cesit: 'Colombia 27', cupping_score: '84-86', ticari_segment: 'Stabil Premium' },
  { segment: 'MICRO LOT', uretici: 'Rafael J. Coronado A.', ciftlik: 'San José Gregorio', bolge: 'Trujillo', cesit: 'Geisha', cupping_score: '87-90', ticari_segment: 'Premium Segment' },
  { segment: 'SPECIALTY', uretici: 'Reinaldo Salas', ciftlik: 'Finca Capoliveri', bolge: 'Trujillo', cesit: 'Castillo', cupping_score: '84-86', ticari_segment: 'Stabil Premium' },
  { segment: 'MICRO LOT', uretici: 'Ricardo J. Lozada M.', ciftlik: 'El Recreo', bolge: 'Carabobo', cesit: 'Geisha', cupping_score: '87-90', ticari_segment: 'Premium Segment' },
  { segment: 'SPECIALTY', uretici: 'Ricardo J. Lozada M.', ciftlik: 'El Recreo', bolge: 'Carabobo', cesit: 'Castillo', cupping_score: '84-86', ticari_segment: 'Stabil Premium' },
  { segment: 'SPECIALTY', uretici: 'Robinson L. Arias M.', ciftlik: 'El Eden', bolge: 'Yaracuy', cesit: 'Caturra', cupping_score: '84-86', ticari_segment: 'Stabil Premium' },
  { segment: 'SPECIALTY', uretici: 'Roney A. Durán Mejía', ciftlik: 'The Roros Coffee', bolge: 'Trujillo', cesit: 'Tabi', cupping_score: '84-86', ticari_segment: 'Stabil Premium' },
  { segment: 'MICRO LOT', uretici: 'Vicencino Ramírez / Diego Ramírez', ciftlik: 'La Herradura del Unitón', bolge: 'Mérida', cesit: 'Araguaney', cupping_score: '85-87', ticari_segment: 'Yüksek Segment' },
  { segment: 'SPECIALTY', uretici: 'Mercedes R. Campos', ciftlik: 'Fundo Bella Vista', bolge: 'Yaracuy', cesit: 'Castillo Colombia', cupping_score: '84-86', ticari_segment: 'Stabil Premium' },
  { segment: 'SPECIALTY', uretici: 'Miguel Á. Manzano M.', ciftlik: 'Mis Tres Hijos', bolge: 'Lara', cesit: 'Colombia y Castilla', cupping_score: '84-86', ticari_segment: 'Stabil Premium' },
  { segment: 'SPECIALTY', uretici: 'Miguel Ortega', ciftlik: 'Fondo El Trapiche', bolge: 'Miranda', cesit: 'Castillo', cupping_score: '84-86', ticari_segment: 'Stabil Premium' },
  { segment: 'SPECIALTY', uretici: 'Morella del Carmen Pargas', ciftlik: 'El Guamito', bolge: 'Lara', cesit: 'Caturra', cupping_score: '84-86', ticari_segment: 'Stabil Premium' },
  { segment: 'SPECIALTY', uretici: 'Morella del Carmen Pargas', ciftlik: 'El Guamito', bolge: 'Lara', cesit: 'Colombia 27', cupping_score: '84-86', ticari_segment: 'Stabil Premium' },
  { segment: 'SPECIALTY', uretici: 'Néstor A. Rosales S.', ciftlik: 'Villa Nueva', bolge: 'Táchira', cesit: 'Villanueva', cupping_score: '84-86', ticari_segment: 'Stabil Premium' },
  { segment: 'SPECIALTY', uretici: 'Norymar Pérez', ciftlik: 'Mi Ilusión', bolge: 'Lara', cesit: 'Caturra', cupping_score: '84-86', ticari_segment: 'Stabil Premium' },
  { segment: 'MICRO LOT', uretici: 'Paula A. Gómez C.', ciftlik: 'El Carmen', bolge: 'Mérida', cesit: 'Araguaney', cupping_score: '85-87', ticari_segment: 'Yüksek Segment' },
  { segment: 'MICRO LOT', uretici: 'Israel Schwars', ciftlik: 'San Antonio', bolge: 'Yaracuy', cesit: 'Inia 01', cupping_score: '84-86', ticari_segment: 'Stabil Premium' },
  { segment: 'SPECIALTY', uretici: 'Javier Fernández Ascesio Cruz', ciftlik: 'Finca Bella Vista', bolge: 'Barinas', cesit: 'Castillo / Naranjal', cupping_score: '84-86', ticari_segment: 'Stabil Premium' },
  { segment: 'COMMERCIAL', uretici: 'Jenny Escalona / Alberto Gil', ciftlik: 'Don Jesús', bolge: 'Lara', cesit: 'Desconocido', cupping_score: '80-82', ticari_segment: 'Alt Segment' },
  { segment: 'COMMERCIAL', uretici: 'Jesús A. Sangronis H.', ciftlik: 'Jesús Rey', bolge: 'Lara', cesit: 'Desconocido', cupping_score: '80-82', ticari_segment: 'Alt Segment' },
  { segment: 'SPECIALTY', uretici: 'Jesús Manuel Durán', ciftlik: 'Loma de los Guamos', bolge: 'Mérida', cesit: 'Caturra Amarillo', cupping_score: '84-86', ticari_segment: 'Stabil Premium' },
  { segment: 'MICRO LOT', uretici: 'Jhon Castañeda Pulido', ciftlik: 'Las Primas', bolge: 'Trujillo', cesit: 'Typica', cupping_score: '84-86', ticari_segment: 'Stabil Premium' },
  { segment: 'SPECIALTY', uretici: 'Johan A. Castro Rivas', ciftlik: 'Los Castros', bolge: 'Trujillo', cesit: 'Cenicafe', cupping_score: '84-86', ticari_segment: 'Stabil Premium' },
  { segment: 'MICRO LOT', uretici: 'José L. Sepúlveda M.', ciftlik: 'La Esmeralda', bolge: 'Táchira', cesit: 'Monteclaro', cupping_score: '85-87', ticari_segment: 'Yüksek Segment' },
  { segment: 'SPECIALTY', uretici: 'Juliette Valentina Ramírez', ciftlik: 'Agropecuaria La Morita', bolge: 'Mérida', cesit: 'Castillo', cupping_score: '84-86', ticari_segment: 'Stabil Premium' },
  { segment: 'MICRO LOT', uretici: 'Luis Andrade', ciftlik: 'La Cuba', bolge: 'Mérida', cesit: 'Monteclaro', cupping_score: '85-87', ticari_segment: 'Yüksek Segment' },
  { segment: 'MICRO LOT', uretici: 'Luis Chumaceiro', ciftlik: 'Río Chiquito', bolge: 'Táchira', cesit: 'Catuai Rojo', cupping_score: '84-86', ticari_segment: 'Stabil Premium' },
  { segment: 'SPECIALTY', uretici: 'Luis Lacruz', ciftlik: 'Los Luices', bolge: 'Portuguesa', cesit: 'Costa Rica', cupping_score: '84-86', ticari_segment: 'Stabil Premium' },
  { segment: 'SPECIALTY', uretici: 'Luz Dalai Gómez C.', ciftlik: 'El Regalo de Dios', bolge: 'Trujillo', cesit: 'Castillo', cupping_score: '84-86', ticari_segment: 'Stabil Premium' },
  { segment: 'SPECIALTY', uretici: 'María F. Zambrano M.', ciftlik: 'El Bebedero', bolge: 'Mérida', cesit: 'Castillo', cupping_score: '84-86', ticari_segment: 'Stabil Premium' },
  { segment: 'MICRO LOT', uretici: 'María Guerra', ciftlik: 'San Pedro La Comarca', bolge: 'Miranda', cesit: 'Monteclaro', cupping_score: '85-87', ticari_segment: 'Yüksek Segment' },
  { segment: 'MICRO LOT', uretici: 'María Guerrero de Hernández', ciftlik: 'La Clavelina', bolge: 'Táchira', cesit: 'Monteclaro', cupping_score: '85-87', ticari_segment: 'Yüksek Segment' },
  { segment: 'SPECIALTY', uretici: 'Antonio J. González Q.', ciftlik: 'El Topio', bolge: 'Trujillo', cesit: 'Colombia 27', cupping_score: '84-86', ticari_segment: 'Stabil Premium' },
  { segment: 'COMMERCIAL', uretici: 'Bernis A. Piñero', ciftlik: 'La Asunción', bolge: 'Portuguesa', cesit: 'Desconocido', cupping_score: '80-82', ticari_segment: 'Alt Segment' },
  { segment: 'MICRO LOT', uretici: 'Bruno E. Oviedo', ciftlik: 'San Antonio', bolge: 'Trujillo', cesit: 'Typica', cupping_score: '84-86', ticari_segment: 'Stabil Premium' },
  { segment: 'MICRO LOT', uretici: 'Carlos A. López Sánchez', ciftlik: 'Finca El Ocho', bolge: 'Trujillo', cesit: 'Catuai', cupping_score: '84-86', ticari_segment: 'Stabil Premium' },
  { segment: 'MICRO LOT', uretici: 'Carlota Salas Gómez', ciftlik: 'El Carmen', bolge: 'Mérida', cesit: 'Monteclaro', cupping_score: '85-87', ticari_segment: 'Yüksek Segment' },
  { segment: 'MICRO LOT', uretici: 'César Serrano', ciftlik: 'Cantarrana', bolge: 'Mérida', cesit: 'Monteclaro', cupping_score: '85-87', ticari_segment: 'Yüksek Segment' },
  { segment: 'SPECIALTY', uretici: 'Damary E. Rivero Ortiz', ciftlik: 'La Divina Providencia', bolge: 'Yaracuy', cesit: 'Castillo', cupping_score: '84-86', ticari_segment: 'Stabil Premium' },
  { segment: 'MICRO LOT', uretici: 'David F. Bastidas B.', ciftlik: 'Finca Familia Bastidas', bolge: 'Trujillo', cesit: 'Monteclaro', cupping_score: '85-87', ticari_segment: 'Yüksek Segment' },
  { segment: 'SPECIALTY', uretici: 'Abel Antonio Asuaje', ciftlik: 'La Púrpura', bolge: 'Yaracuy', cesit: 'Colombia', cupping_score: '84-86', ticari_segment: 'Stabil Premium' },
  { segment: 'SPECIALTY', uretici: 'Adelso Guerrero A.', ciftlik: 'Cabaña Terranova', bolge: 'Mérida', cesit: 'Caturra Roja', cupping_score: '84-86', ticari_segment: 'Stabil Premium' },
  { segment: 'SPECIALTY', uretici: 'Albanis Pérez', ciftlik: 'Finca La Esperanza', bolge: 'Lara', cesit: 'Colombia 27', cupping_score: '84-86', ticari_segment: 'Stabil Premium' },
  { segment: 'COMMERCIAL', uretici: 'Ana Karina Rodríguez', ciftlik: 'Las Marías', bolge: 'Lara', cesit: 'Desconocido', cupping_score: '80-82', ticari_segment: 'Alt Segment' },
  { segment: 'MICRO LOT', uretici: 'Ana Magnolia Mora V.', ciftlik: 'El Cabullal', bolge: 'Mérida', cesit: 'Monteclaro', cupping_score: '85-87', ticari_segment: 'Yüksek Segment' },
  { segment: 'SPECIALTY', uretici: 'Andrés Román García', ciftlik: 'Santa María', bolge: 'Trujillo', cesit: 'Villanueva', cupping_score: '84-86', ticari_segment: 'Stabil Premium' },
  { segment: 'SPECIALTY', uretici: 'Angelimar Barillas', ciftlik: 'La Loma de Ovejo', bolge: 'Mérida', cesit: 'Villanueva', cupping_score: '84-86', ticari_segment: 'Stabil Premium' },
];

export const venezuelaCoffeeMasterWithSlug: VenezuelaCoffeeMasterItemWithSlug[] = venezuelaCoffeeMaster.map((item, index) => ({
  ...item,
  slug: getVenezuelaCoffeeMasterSlug(item, index),
}));
