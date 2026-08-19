// Catálogo de productos.
// retailPrice = precio al detal.
// wholesalePrice = precio especial por mayor para esa referencia.
// Si wholesalePrice es null/no existe, se calcula automáticamente con 20% de descuento.
// Esto permite manejar referencias con márgenes diferentes sin mostrar un porcentaje general en la página.
const PRODUCTS = [
  {name:'Campana Farol',file:'campana-farol.webp',cat:'iluminacion',tag:'Iluminación',retailPrice:80000},
  {name:'Faroles',file:'faroles.webp',cat:'iluminacion',tag:'Iluminación',retailPrice:null},
  {name:'Farol Grande',file:'farol-grande.webp',cat:'iluminacion',tag:'Iluminación',retailPrice:80000},
  {name:'Farol Pequeño',file:'farol-pequeno.webp',cat:'iluminacion',tag:'Iluminación',retailPrice:10000},
  {name:'Entrada Dorada',file:'entrada-dorada.webp',cat:'decoracion',tag:'Decoración',retailPrice:35000},
  {name:'Entrada Navidad',file:'entrada-navidad.webp',cat:'decoracion',tag:'Decoración',retailPrice:35000},
  {name:'Entrada Rosado',file:'entrada-rosado.webp',cat:'decoracion',tag:'Decoración',retailPrice:35000},
  {name:'Entrada Rojo',file:'entrada-rojo.webp',cat:'decoracion',tag:'Decoración',retailPrice:35000},
  {name:'Flores',file:'flores.webp',cat:'decoracion',tag:'Decoración',retailPrice:5000},
  {name:'Flor Dorada',file:'flor-dorada.webp',cat:'decoracion',tag:'Decoración',retailPrice:5000},
  {name:'Flor Plata',file:'flor-plata.webp',cat:'decoracion',tag:'Decoración',retailPrice:5000},
  {name:'Flor Roja',file:'flor-roja.webp',cat:'decoracion',tag:'Decoración',retailPrice:5000},

  // Barrigones: 10% de descuento por mayor para proteger el margen.
  {name:'Muñeco de Nieve Barrigón',file:'muneco-nieve-barrigon.webp',cat:'figuras',tag:'Figuras',retailPrice:200000,wholesalePrice:180000},
  {name:'Papá Noel Barrigón',file:'papa-noel-barrigon.webp',cat:'figuras',tag:'Figuras',retailPrice:200000,wholesalePrice:180000},

  {name:'Muñeco de Nieve de Entrada',file:'muneco-nieve-entrada.webp',cat:'figuras',tag:'Figuras',retailPrice:70000},
  {name:'Muñeco Reno de Entrada',file:'muneco-reno-entrada.webp',cat:'figuras',tag:'Figuras',retailPrice:70000},
  {name:'Muñecos de Entrada',file:'munecos-entrada.webp',cat:'figuras',tag:'Figuras',retailPrice:90000},

  // Referencias de $30.000: precio especial por mayor de $28.000.
  {name:'Papá Noel de Entrada',file:'papa-noel-entrada.webp',cat:'figuras',tag:'Figuras',retailPrice:30000,wholesalePrice:28000},

  {name:'Piernas Largas Galleta',file:'piernas-largas-galleta.webp',cat:'figuras',tag:'Figuras',retailPrice:60000},
  {name:'Piernas Largas Rosadas',file:'piernas-largas-rosadas.webp',cat:'figuras',tag:'Figuras',retailPrice:70000},
  {name:'Piernas Largas',file:'piernas-largas.webp',cat:'figuras',tag:'Figuras',retailPrice:70000},
  {name:'Forros para Cojín',file:'forros-cojin.webp',cat:'textil',tag:'Textil',retailPrice:8000},
  {name:'Forros para Cojínes',file:'cojin1.webp',cat:'textil',tag:'Textil',retailPrice:8000},
  {name:'Forros paraCojínes',file:'cojin2.webp',cat:'textil',tag:'Textil',retailPrice:8000},
  {name:'Forros paraCojínes',file:'cojin3.webp',cat:'textil',tag:'Textil',retailPrice:8000},
  {name:'Forros paraCojínes',file:'cojin4.webp',cat:'textil',tag:'Textil',retailPrice:8000},
  {name:'Forros paraCojínes',file:'cojin5.webp',cat:'textil',tag:'Textil',retailPrice:8000},
  {name:'Forros paraCojínes',file:'cojin6.webp',cat:'textil',tag:'Textil',retailPrice:8000},
  {name:'Canecas Navideñas',file:'canecas-navidenas.webp',cat:'decoracion',tag:'Decoración',retailPrice:8000},
  {name:'Tapetes',file:'tapetes.webp',cat:'textil',tag:'Textil',retailPrice:8000}
];
