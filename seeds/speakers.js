require("dotenv").config();
const mongoose = require('mongoose');
const Speaker = require('../models/Speaker');

const speakers = [
  {
    name: {
      firstname: "Claudia",
      lastname: "del Pozo"
    },
    resume:
      "Claudia está a cargo de las operaciones de C Minds, una agencia de innovación para el impacto basada en San Francisco y Ciudad de México. ",
    avatar:
      "https://www.talent-land.mx/wp-content/uploads/2019/03/tl2019-speaker-blockchain-Tone-Vays.jpg",
    occupation:
      "https://www.talent-land.mx/wp-content/uploads/2019/04/tl2019-speaker-twoman-Claudia-del-Pozo.jpg",
    email: "clau@algo.com",
    redes: {
      twitter: "https://twitter.com/tonevays"
    },
    land: "IronLand"
  },
  {
    name: {
      firstname: "Lisette",
      lastname: "Castro"
    },
    resume:
      "Gracias a mi especialización en robótica he conocido y colaborado con gente al rededor del mundo. Es un placer atender Talend Land ya que es un evento muy querido en México",
    occupation:
      "Ingeniera en computación por la Universidad Nacional Autónoma de México.",
    avatar:
      "https://www.talent-land.mx/wp-content/uploads/2019/02/tl2019-speaker-ironland-Lisette-Castro.jpg",
    email: "liz@alco.com",
    redes: {
      twitter: "https://twitter.com/uulalaapp"
    },
    land: "IronLand"
  },
  {
    name: {
      firstname: "Diego",
      lastname: "Guerrero."
    },
    resume:
      " Entusiasta de la tecnología y líder de comunidad en ModdingMX así como HardwaReviews, impulsor del modding en latinoamerica con más de 8años de experiencia en el medio. Ha participado como asesor del area de hardware y modding en Talent Land.",
    avatar:
      "https://www.talent-land.mx/wp-content/uploads/2019/02/tl2019-speaker-ironland-Diego-Guerrero.jpg",
    occupation: "Líder de comunidad en ModdingMX así como en HardwaReviews.",
    land: "BlockchainLand",
    email: "diego@algo.com",
    redes: {
      twitter: "https://www.linkedin.com/in/miguel-ortega-053a2215b/"
    }
  },
  {
    name: {
      firstname: "Saúl ",
      lastname: "Jiménez"
    },
    resume:
      "Es especialista en procesos gubernamentales y tiene más de 10 años de experiencia trabajando en administraciones públicas de las ciudades de Guadalajara y Zapopan en áreas de innovación gubernamental, tecnologías de la información, planeación, calidad, procesos y mejora regulatoria.",
    avatar:
      "https://www.talent-land.mx/wp-content/uploads/2019/02/tl2019-speaker-developer-Saul-Jimenez-Camacho.jpg",
    occupation:
      "Director de Innovación Gubernamental del Gobierno de Guadalajara en el Estado de Jalisco.",
    land: "DevLand",
    email: "saul@algo.com",
    redes: {
      twitter: "https://twitter.com/koibanx"
    }
  },
  {
    name: {
      firstname: "Héctor",
      lastname: "Cuesta"
    },
    resume:
      "Provee consultoría en diseño de productos de datos y Machine Learning con experiencia en áreas como: Servicios Financieros, Retail, Fintech, Identidad Digital y Recursos Humanos.",
    avatar:
      "https://www.talent-land.mx/wp-content/uploads/2019/02/tl2019-speaker-developer-Hector-Cuesta.jpg",
    occupation: "Chief Data Science Officer, Dataxios.",
    land: "DevLand",
    email: "hector@algo.com",
    redes: {
      twitter: "https://twitter.com/arinieto"
    }
  },
  {
    name: {
      firstname: "Samuel ",
      lastname: "Rivera"
    },
    resume:
      "Después de graduarse de la carrera de Ingeniería en Electrónica y Comunicaciones en la ciudad de México, buscó una aventura en la ciudad de Vancouver.",
    avatar:
      "https://www.talent-land.mx/wp-content/uploads/2019/04/tl2019-speaker-gamer-Samuel-Rivera.jpg",
    occupation: "Ha trabajado para el videojuego FIFA por los últimos 10 años.",
   land: "DevLand",
    email: "abril@algo.com"
  },
  {
    name: {
      firstname: "Tania",
      lastname: "Tostado"
    },
    resume:
      "Tania Tostado administradora financiera con especialidad en finanzas corporativas, desde el año 2004 forjo sus bases en el medio de las finanzas trabajando para importantes firmas ",
    avatar:
      "https://www.talent-land.mx/wp-content/uploads/2019/04/tl2019-speaker-twoman-Tania-Tostado.jpg",
    occupation:
      " Administradora financiera con especialidad en finanzas corporativas",
    email: "tania@algo.com",
    land: "TalentWoman"
  },
  {
    name: {
      firstname: "Miranda ",
      lastname: "Jaramillo"
    },
    resume:
      "Emprendedora Mexicana, Co-fundadora de “ATOMX Education”, iniciativa educativa para involucrar a los jóvenes en STEM, así como desarrollo de nuevas tecnologías, a la par es estudiante de la licenciatura de Física en la UNAM",
    avatar:
      "https://www.talent-land.mx/wp-content/uploads/2019/04/tl2019-speaker-twoman-Miranda-Jaramillo.jpg",
    occupation: "Emprendedora Mexicana, Co-fundadora de “ATOMX Education”.",
    land: "TalentWoman",
    email: "miranda@algo.com",
    land: "TalentWoman"
  },
  {
    name: {
      firstname: "Guadalupe",
      lastname: "Avila"
    },
    resume:
      "Nutrióloga egresada de la Universidad de Guadalajara es apasionada por la naturaleza y las tecnologías amigables con el ambiente, ha enfocado gran parte del tiempo al estudio en permacultura en el cual se certificó en este año",
    avatar:
      "https://www.talent-land.mx/wp-content/uploads/2019/02/tl2019-speaker-future-Guadalupe-Avila.jpg",
    occupation:
      "Lidera “gratiferia” y miembro del Nodo Zacatecas, dentro del pilar de sustentabilidad.",
    land: "AgroLand",
    email: "avila@algo.com"
  },
  {
    name: {
      firstname: "Guadalupe",
      lastname: "Avila"
    },
    resume:
      "Nutrióloga egresada de la Universidad de Guadalajara es apasionada por la naturaleza y las tecnologías amigables con el ambiente, ha enfocado gran parte del tiempo al estudio en permacultura en el cual se certificó en este año",
    avatar:
      "https://www.talent-land.mx/wp-content/uploads/2019/02/tl2019-speaker-future-Guadalupe-Avila.jpg",
    occupation:
      "Lidera “gratiferia” y miembro del Nodo Zacatecas, dentro del pilar de sustentabilidad.",
    land: "AgroLand",
    email: "avila@algo.com"
  },
  {
    name: {
      firstname: "Guadalupe",
      lastname: "Avila"
    },
    resume:
      "Nutrióloga egresada de la Universidad de Guadalajara es apasionada por la naturaleza y las tecnologías amigables con el ambiente, ha enfocado gran parte del tiempo al estudio en permacultura en el cual se certificó en este año",
    avatar:
      "https://www.talent-land.mx/wp-content/uploads/2019/02/tl2019-speaker-future-Guadalupe-Avila.jpg",
    occupation:
      "Lidera “gratiferia” y miembro del Nodo Zacatecas, dentro del pilar de sustentabilidad.",
    land: "AgroLand",
    email: "avila@algo.com"
  },
  {
    name: {
      firstname: "Elizabeth",
      lastname: "Salim"
    },
    resume:
      "Lic. en Diseño Industrial con enfoque en moda, tecnología y sustentabilidad, aparte de contar con diplomados en Estilismo de moda e innovación textil por parte del Fashion Institute of Technology (FIT), hizo pasantía en J. Mendel Nueva York donde realizó el proyecto de reciclados híbridos dándole un giro a la visión del diseño sustentable como opción de diseño de lujo",
    avatar:
      "https://www.talent-land.mx/wp-content/uploads/2019/02/tl2019-speaker-creative-Elizabeth-Salim.jpg",
    occupation:
      "Lic en Diseño Industrial con enfoque en moda, tecnología y sustentabilidad.",
    land: "CreativeLand",
    email: "eli@algo.com"
  },
  {
    name: {
      firstname: "Gabriel",
      lastname: "Avila"
    },
    resume:
      "Tengo 34 de los cuales casi 25 he destinado a dibujar gran parte del día, eso me ha dado la posibilidad de vivir de mi pasión y poder compartir mis experiencias, colaborando con proyectos para marcas como IBM, TELEVISA NETWORKS, REVISTA CHILANGO y actualmente como profesor en CREHANA, plataforma líder en Latinoamérica de educación on demand. Con 3 cursos y más de 8 mil alumnos.",
    avatar:
      "https://www.talent-land.mx/wp-content/uploads/2019/03/tl2019-speaker-creative-Mr-Lemonade.jpg",
    occupation: "Profesor en CREHANA",
    land: "CreativeLand",
    email: "gabriel@algo.com"
  },
  {
    name: {
      firstname: "César ",
      lastname: "Salinas"
    },
    resume:
      "César Alfonso Salinas Delgado, Licenciado en Administración Financiera por el TEC de Monterrey, 26 años de edad y co-fundador de la startup tecnológica DATLAS. ",
    avatar:
      "https://www.talent-land.mx/wp-content/uploads/2019/02/tl2019-speaker-bussines-Cesar-Salinas.jpg",
    occupation: "Co-fundador de la startup tecnológica DATLAS.",
    land: "BusinessLand",
    email: "cesar@algo.com"
  },
  {
    name: {
      firstname: "Tanya ",
      lastname: "Melendez"
    },
    resume:
      "MFIT Senior Curator of Education and Public Programs, organizes all Museum symposia and education programming. During at her time at FIT, Melendez has organized over 100 programs for a diversity of audiences.",
    avatar:
      "https://www.talent-land.mx/wp-content/uploads/2019/02/tl2019-speaker-creative-Tanya-Melendez.jpg",
    occupation: "MFIT Senior Curator of Education and Public Programs.",
    land: "CreativeLand",
    email: "tanya@algo.com"
  },
  {
    name: {
      firstname: "Adonay",
      lastname: "Gutierrez"
    },
    resume:
      "Doctor en Educación, con formación en ciencias antropológicas. Docente e investigador orientado al área de la innovación curricular y diseño de métodos de aprendizaje, particularmente en el campo de los idiomas.",
    avatar:
      "https://www.talent-land.mx/wp-content/uploads/2019/04/tl2019-speaker-teducation-Adonay-A-Gutierrez.jpg",
    occupation:
      "Doctor en Educación, con formación en ciencias antropológicas. Docente e investigador orientado al área de la innovación curricular y diseño de métodos de aprendizaje.",
    land: "AgroLand",
    email: "leon@algo.com"
  },
  {
    name: {
      firstname: "Diana",
      lastname: "Andrade"
    },
    resume:
      "Es profesional de museos desde hace casi 10 años. Su labor se ha centrado en conceptualizar, desarrollar, implementar y evaluar exposiciones temporales, exhibiciones, talleres y actividades educativas para distintos museos interactivos dirigidos a niños.",
    avatar:
      "https://www.talent-land.mx/wp-content/uploads/2019/04/tl2019-speaker-teducation-Diana-Andrade.jpg",
    occupation:
      "Gerente de Vinculación Museo-Escuela en Papalote Museo del Niño.",
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