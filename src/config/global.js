export default {
  global: {
    numeroUnidad: '2',
    tituloUnidad:
      'Funcionamiento del mercado y tipos de estructuras de mercado',
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Clases de mercado',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Monopolio',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Oligopolio',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: 'Competencia perfecta',
            hash: 't_1_3',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Interacción entre oferta y demanda',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: ' La Ley de la oferta',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'La Ley de la demanda',
            hash: 't_2_2',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Fallos de mercado',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo: 'Externalidades',
            hash: 't_3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo: 'Bienes públicos',
            hash: 't_3_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.3',
            titulo: 'Información asimétrica',
            hash: 't_3_3',
          },
        ],
      },
      {
        nombreRuta: 'sintesis',
        titulo: 'Síntesis',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      // {
      //   nombreRuta: 'actividad',
      //   icono: 'far fa-question-circle',
      //   titulo: 'Actividad didáctica',
      //   desarrolloContenidos: true,
      // },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      // {
      //   nombreRuta: 'complementario',
      //   icono: 'far fa-folder-open',
      //   titulo: 'Material complementario',
      // },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'Acemoglu, D. Laibson, D. & List, J. A. (2017). Economía: ( ed.). Antoni Bosch editor. ',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/129484',
    },
    {
      referencia:
        'Cue Mancera, A. (2015). Fundamentos de economía: ( ed.). Grupo Editorial Patria. ',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/39385',
    },
    {
      referencia:
        'Pelino, A. D. García Forciniti, A. & Molina, M. (2020). Temas de Economía: ( ed.). Eudeba. ',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/153601',
    },
    {
      referencia:
        'Torres López, J. A. (2016). Economía política: (5 ed.). Difusora Larousse - Ediciones Pirámide. ',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/49120',
    },
    {
      referencia:
        'Hernández Pérez, A. & Hernández Pérez, A. (2014). Economía: ( ed.). Editorial Digital UNID. ',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/41178',
    },
    {
      referencia:
        'Rodríguez Sánchez, A. M. (2015). Economía 1: ( ed.). Grupo Editorial Patria. ',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/40388',
    },
    {
      referencia:
        'Domínguez Gonzalo, E. (2016). Iniciación a la economía: ( ed.). Editorial Tutor Formación. ',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/44220',
    },
    {
      referencia: 'Begg, D. (2006). Economía: (8 ed.). McGraw-Hill España. ',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/50090',
    },
    {
      referencia:
        'Peréz Pino, A. (2010). Economía general: ( ed.). Firmas Press. ',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/36409',
    },
    {
      referencia:
        'Olivera Novelo, J. (2015). Fundamentos de economía: ( ed.). Editorial Digital UNID. ',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/41176',
    },
  ],
  glosario: [
    {
      termino: 'Bienes Públicos',
      significado:
        'Bienes de consumo no excluyente y no rival, como la seguridad y la educación pública, financiados por el Estado.',
    },
    {
      termino: 'Competencia Perfecta',
      significado:
        'Mercado con muchos oferentes y demandantes donde ningún agente influye en el precio y los bienes son homogéneos.',
    },
    {
      termino: 'Economía de Escala',
      significado:
        'Reducción del costo unitario de producción a medida que aumenta la cantidad producida.',
    },
    {
      termino: 'Externalidades',
      significado:
        'Efectos secundarios positivos o negativos de una actividad económica que afectan a terceros sin estar reflejados en el precio del bien.',
    },
    {
      termino: 'Fallos de Mercado',
      significado:
        'Ineficiencias en la asignación de recursos debido a monopolios, externalidades, bienes públicos o información asimétrica.',
    },
    {
      termino: 'Información Asimétrica',
      significado:
        'Situación donde una de las partes de una transacción posee más información relevante que la otra, afectando la eficiencia del mercado.',
    },
    {
      termino: 'Interdependencia Empresarial',
      significado:
        'Relación entre empresas en mercados oligopólicos, donde las decisiones de una afectan directamente a las demás.',
    },
    {
      termino: 'Monopolio',
      significado:
        'Mercado donde un único productor controla la oferta y establece precios sin competencia.',
    },
    {
      termino: 'Oligopolio',
      significado:
        'Estructura de mercado con pocos vendedores dominantes que pueden influir en precios y condiciones de competencia.',
    },
    {
      termino: 'Poder de Mercado',
      significado:
        'Capacidad de una empresa para influir en los precios de un bien o servicio debido a su posición dominante.',
    },
    {
      termino: 'Precio de Equilibrio',
      significado:
        'Punto donde la cantidad demandada de un bien iguala la cantidad ofrecida, determinando el precio en el mercado.',
    },
    {
      termino: 'Regulación Económica',
      significado:
        'Normas impuestas por el Estado para corregir fallos de mercado y garantizar una  competencia justa.',
    },
    {
      termino: 'Selección Adversa',
      significado:
        'Problema de información asimétrica donde compradores o vendedores desconocen características clave de un bien antes de la transacción.',
    },
    {
      termino: 'Teoría del Juego',
      significado:
        'Modelo matemático que analiza decisiones estratégicas entre agentes interdependientes en mercados oligopólicos.',
    },
    {
      termino: 'Transparencia del Mercado',
      significado:
        'Acceso equitativo a información relevante para que consumidores y productores tomen decisiones informadas.',
    },
  ],
}
