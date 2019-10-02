require("dotenv").config();
const mongoose = require('mongoose');
const Speaker = require('../models/Speaker');

const speakers = [
  {
    name: "Alejandro Lomelín",
    resume:
      "Alejandro Lomelín asume el rol de Director de Canales y Alianzas en Noviembre de 2018. Antes fungió como Director de Venta y Preventa para Hybrid IT en Hewlett Packard Enterprise desde Noviembre 2016, donde fue responsable de desarrollar la estrategia de crecimiento y operación del negocio de Servidores, Almacenamiento y Redes en del Centro de Datos, además de las tecnologías definidas por Software, soluciones para Nube y Analíticos",
    avatar:
      "https://www.talent-land.mx/wp-content/uploads/2019/04/tl2019-speaker-superpoderes-Alejandro-Lomelin.jpg",
    occupation: "Director de Canales y Alianzas en Hewlett Packard Enterprise.",
    land: "IronLand"
  },
  {
    name: "Diego Flores Jiménez",
    resume:
      "Actualmente asesor del Secretario de Relaciones Exteriores para temas de tecnologías exponenciales y el cambio tecnológico rápido. ",
    occupation:
      "Internacionalista con interés y experiencia en el liderazgo joven y eficaz como un proceso de transformación",
    avatar:
      "https://www.talent-land.mx/wp-content/uploads/2019/04/tl2019-speaker-superpoderes-Diego-Flores-Jimenez.jpg",
    land: "IronLand"
  },
  {
    name: "Helios Herrera",
    resume:
      "Experto en vincular Desarrollo Humano y Productividad. Cuenta con casi 3 décadas de experiencia, dictando alrededor de 3,500 conferencias, seminarios y talleres para EUA, Latinoamérica y España. ",
    avatar:
      "https://www.talent-land.mx/wp-content/uploads/2019/02/tl2019-speaker-ironland-Diego-Guerrero.jpg",
    occupation:
      "Conferenciante, escritor, colaborador en diversos medios de comunicación. | Experto en vincular Desarrollo Humano y Productividad. ",
    land: "BlockchainLand"
  },
  {
    name: "Alejandro García Romero",
    resume:
      "Alejandro García es un jóven empresario mexicano que ha vendido más de un millón de dólares en su haber y se ha especializado en entrenar a grandes empresarios de todo el mundo.",
    avatar:
      "https://www.talent-land.mx/wp-content/uploads/2019/02/tl2019-speaker-developer-Saul-Jimenez-Camacho.jpg",
    occupation: "Jóven empresario mexicano.",
    land: "DevLand"
  },
  {
    name: "Lucero Miranda Ballesteros",
    resume:
      "Docente, arquitecta y artista son las tres palabras que definen el quehacer profesional de Lucero Miranda Ballesteros. El arte corre por sus venas a través de sus abuelos, uno pintor, otro escritor, del amor a la lectura inculcado por sus padres.",
    avatar:
      "https://www.talent-land.mx/wp-content/uploads/2019/04/tl2019-speaker-teducation-Lucero-Miranda-Ballesteros.jpg",
    occupation:
      "Profesora del Tec de Monterrey y fundadora y artista de ITARTI diseño.",
    land: "DevLand"
  },
  {
    name: "Bárbara Aguilera Arcos",
    resume:
      "Después de graduarse de la carrera de Ingeniería en Electrónica y Comunicaciones en la ciudad de México, buscó una aventura en la ciudad de Vancouver.",
    avatar:
      "https://www.talent-land.mx/wp-content/uploads/2019/04/tl2019-speaker-teducation-Barbara-Aguilera-Arcos.jpg",
    occupation: "Gerente de desarrollo al ecosistema educativo IBM México",
    land: "DevLand"
  },
  {
    name: "Manuel Moreno Castañeda",
    resume:
      "Hasta el 30 de abril de 2016. Rector del Sistema de Universidad Virtual en la Universidad de Guadalajara. Desde 1980 a la fecha se ha dedicado al estudio y docencia en educación a distancia y desde 1989 a la administración de programas en esta modalidad, además de asesorar proyectos en México y otros países.",
    avatar:
      "https://www.talent-land.mx/wp-content/uploads/2019/04/tl2019-speaker-teducation-Manuel-Moreno-Castaneda.jpg",
    occupation: " Profesor en todos los niveles educativos."
  },
  {
    name: "Diana Andrade",
    resume:
      "Es profesional de museos desde hace casi 10 años. Su labor se ha centrado en conceptualizar, desarrollar, implementar y evaluar exposiciones temporales, exhibiciones, talleres y actividades educativas para distintos museos interactivos dirigidos a niños. Actualmente es gerente del área que vincula los contenidos del Museo con los Planes y Programas de Estudio para la Educación Preescolar y Primaria en su país.",
    avatar:
      "https://www.talent-land.mx/wp-content/uploads/2019/04/tl2019-speaker-teducation-Diana-Andrade.jpg",
    occupation:
      "Gerente de Vinculación Museo-Escuela en Papalote Museo del Niño.",
    land: "TalentWoman"
  },
  {
    name: "Tina Hovsepian",
    resume:
      "Tina Hovsepian is an architect, inventor, and social entrepreneur with a bachelor of architecture from the University of Southern California. As a licensed architect in California, she has extensive experience in the process of taking a project through construction and is very familiar with Los Angeles, Santa Monica, and New York city building codes. She is most interested in innovation, sustainability, and design excellence in the built environment.",
    avatar:
      "https://www.talent-land.mx/wp-content/uploads/2019/02/tl2019-speaker-future-Guadalupe-Avila.jpg",
    occupation: "Engineer doing non-engineering stuff for engineers.",
    land: "AgroLand"
  },
  {
    name: "Ruth Vela Huerta",
    resume:
      "Ganadora de la beca del gobierno alemán DAAD, realizó estudios en ingeniería en Telecomunicaciones en la Universidad Técnica de Dresde",
    avatar:
      "https://www.talent-land.mx/wp-content/uploads/2019/02/tl2019-speaker-future-Guadalupe-Avila.jpg",
    occupation: "Engineer doing non-engineering stuff for engineers.",
    land: "AgroLand"
  },
  {
    name: "Lenia Ruvalcaba",
    resume:
      "Lenia Ruvalcaba nací en Guadalajara Jalisco México el 23 de abril de 1986. Inicie en el deporte a la edad de 11 años, representante en el deporte convencional y paralímpico, es la primera mujer en participar en unos juegos panamericanos y para-panamericanos, actualmente es doble medallista paralímpica, promotora de los derechos de las personas con discapacidad y promotora de Judo.",
    avatar:
      "https://www.talent-land.mx/wp-content/uploads/2019/03/tl2019-speaker-twoman-Lenia-Ruvalcaba.jpg",
    occupation:
      "Doble medallista paralímpica, promotora de los derechos de las personas con discapacidad y promotora de Judo. ",
    land: "AgroLand"
  },
  {
    name: "Leonardo Rico",
    resume:
      "Ingeniero en sistemas electrónicos graduado del TEC de monterrey campus estado de México. Desde el 2016 esta a cargo del proyecto Lluvia Sólida, ha sido parte de programas como POSiBLE, Momentum Project, Segunda generación de emprendedores públicos, SVX y The Venture.",
    avatar:
      "https://www.talent-land.mx/wp-content/uploads/2019/04/tl2019-speaker-agro-Leonardo-Rico.jpg",
    occupation:
      "Ingeniero en Sistemas Electrónicos graduado del TEC de Monterrey Campus Estado de México.",
    land: "CreativeLand"
  },
  {
    name: "Martín Rodríguez Sánchez",
    resume:
      "Ha participado en comisiones de Gobierno Federal, Congreso de la Unión, Secretarías de Estado y múltiples organismos empresariales nacionales e internacionales; diplomático generador de vínculos empresariales y políticos; líder de opinión, analista, y columnista; empresario con amplia especialidad en política pública; promotor de la adopción tecnológica en los negocios y los procesos empresariales; así como gestor y defensor del emprendimiento y la educación.",
    avatar:
      "https://www.talent-land.mx/wp-content/uploads/2019/03/tl2019-speaker-creative-Mr-Lemonade.jpg",
    occupation:
      "Presidente del Consejo Internacional de Empresarios (COINE), CEO de una importante firma de consultoría especialista en temas contable, fiscal, financiero, jurídico y de negocios; socio de una red global de despachos, líder de opinión en temas empresariales, filántropo y ferviente defensor del crecimiento económico regional.",
    land: "CreativeLand"
  },
  {
    name: "Gabriel Richaud",
    resume:
      "En el entorno digital que vivimos actualmente, se están transformando industrias completas, los modelos de negocio están quedando obsoletos rápidamente así como las tradicionales estrategias de comunicación. Por lo anterior, es fundamental que el rol de Marketing evolucione para crear, comunicar e intercambiar ofertas que tengan valor para clientes, socios y sociedad en general, aprovechando la interactividad y personalización que ofrecen las plataformas digitales.",
    avatar:
      "https://www.talent-land.mx/wp-content/uploads/2019/03/tl2019-speaker-business-Gabriel-Richaud.jpg",
    occupation: "Director General de IAB México.",
    land: "BusinessLand"
  },
  {
    name: "César Fajardo",
    resume:
      "Creador mexicano obsesionado con hacer cosas, pero sobre todo con hacer que las cosas mejoren. Fanático de todas las herramientas creativas, masivas e influyentes que regala internet, desde su época de estudiante empezó a crear proyectos que fusionan el arte y la tecnología, desde montajes escénicos, hasta aplicaciones digitales",
    avatar:
      "https://www.talent-land.mx/wp-content/uploads/2019/02/tl2019-speaker-creative-Tanya-Melendez.jpg",
    occupation:
      "En 2017 creó Hunters. Hoy en día César es parte del equipo de Platzi.",
    land: "CreativeLand"
  },
  {
    name: "Ricardo Flores",
    resume:
      "eCommercemx se consolidó como el único evento 100% práctico, siendo Shopify Partner con conferencias gratuitas y piso de soluciones con la proveeduría para llevar tu eCommerce. También es el único con capacitación en tiempo real para que al final del evento tengas todo tu desarrollo listo para trabajar.",
    avatar:
      "https://www.talent-land.mx/wp-content/uploads/2019/03/tl2019-speaker-bussines-Ricardo-Flores.jpg",
    occupation:
      "Doctor en Educación, con formación en ciencias antropológicas. Docente e investigador orientado al área de la innovación curricular y diseño de métodos de aprendizaje.",
    land: "AgroLand"
  },
  {
    name: "Pepe Villatoro",
    resume:
      "Es un emprendedor serial premiado a nivel mundial que ha creado 5 empresas. Es co-fundador y CEO de Fuckup, emprendimiento mexicano que busca crear un mundo donde todos compartamos nuestros fracasos libremente. Fuckup Nights actualmente tiene eventos en más de 300 ciudades de más de 80 países y trabaja con gobiernos y multinacionales para crear cambios de mentalidad que fomenten la innovación. Pepe también es asesor y consultor en innovación y coworking. Le gustan los viajes, la comida rica y las buenas conversaciones.",
    avatar:
      "https://www.talent-land.mx/wp-content/uploads/2019/02/tl2019-speaker-bussines-Pepe-Villatoro.jpg",
    occupation: "Co-fundador y CEO de Fuckup.",
    land: "TalentEducation",
    email: "diana@algo.com"
  }
];

mongoose
  .connect(
    `mongodb+srv://Admin:wM3fQPcG26mXNdC@cluster0-b3btc.mongodb.net/talent-imap?retryWrites=true&w=majority`,
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(db => console.log("La base de datos ha sido actualizada"))
  .catch(err => console.log(err));

  Speaker.insertMany(speakers);