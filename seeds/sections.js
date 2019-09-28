const mongoose = require("mongoose");
const Section = require("../models/Section");

 const sections = [
   {
     title: "Creative Land",
     description:
       "Es el espacio donde convergen los Talentos Creativos, para el desarrollo de ides y proyectos enfocados en el diseño, música, moda, comic y transmedia",
     logoUrl:
       "https://www.talent-land.mx/wp-content/uploads/2019/07/tl2020-home-land-creative-b-210x310.png"
   },
   {
     title: "Developer Land",
     speakers: [],
     events: [],
     stages: [],
     description:
       "Nada está escrito y todo es programable. bienvenido a la tierra de los desarroladores. Una de las zonas que pareciera ser milenaria dentro de este ecosistema o quizá ¿es qué ha formado parte de otra historia?",
     logoUrl:
       "https://www.talent-land.mx/wp-content/uploads/2019/07/tl2020-home-land-developer-b-210x310.png"
   },
   {
     title: "Blockchain Land",
     description:
       "Tierra dedicada por completo a las nuevas tecnologías y tendencias que cada vez están tomando mayor terreno en matería de economía tradicional.",
     logoUrl:
       "https://www.talent-land.mx/wp-content/uploads/2019/07/tl2020-home-land-blockchain-b-210x310.png"
   },
   {
     title: "Gamer Land",
     description:
       "Los conceptos de diversión  y educación aquí no están planeados. Hay acción de sobra.",
     logoUrl:
       "https://www.talent-land.mx/wp-content/uploads/2019/07/tl2020-home-land-gamer-b-210x310.png"
   },
   {
     title: "Bussiness Land",
     description:
       "Re-inventar las nuevas modalidades de hacer negocios es unos de los objetivos de esta tierra",
     logoUrl:
       "https://www.talent-land.mx/wp-content/uploads/2019/07/tl2020-home-land-business-b-210x310.png"
   },
   {
     title: "Iron Land",
     description:
       "Una tierra dedicada a dar forma tangible a la tecnología, donde la creación, las adiciones o mejoras toman su lugar.",
     logoUrl:
       "https://www.talent-land.mx/wp-content/uploads/2019/07/tl2020-home-land-iron-b-210x310.png"
   },
   {
     title: "Agro Land",
     description:
       "Por primera vez interactuamos con el ecosistema de la tecnología en el campo.",
     logoUrl:
       "https://www.talent-land.mx/wp-content/uploads/2019/07/tl2020-home-land-agro-B-210x310.png"
   },
   {
     title: "Talent Woman",
     description:
       "Movimeinto que busca revindicar la participaciópn de la mujer en áreas de la ciencia, tecnología y negocios",
     logoUrl:
       "https://talent-woman.org/wp-content/uploads/2019/08/Talent-Woman-B-LR.png"
   },
   {
     title: "Superpoderes",
     description:
       "La cultura pop ha demostradop que un personaje exitoso de ficción y aventura cuantan con personalidad y talento que los hace únicos",
     logoUrl:
       "https://www.talent-land.mx/wp-content/uploads/2019/03/Logo-Superpoderes-540x230.png"
   },
   {
     title: "Recrea Land",
     description:
       "Zona abierta con actividades lúdicas para promover la ciencia, ingeniería e innovación a temprana edad",
     logoUrl:
       "https://www.talent-land.mx/wp-content/uploads/2019/04/Recreland-400x210.png"
   },
   {
     title: "Zapopan Ciudad de los niños",
     description: "Zona abierta a cargo del Municipio de Zapopan",
     logoUrl:
       "https://www.talent-land.mx/wp-content/uploads/2019/04/Zapopan-Ciudad-de-los-ninos-400x210.png"
   },
   {
     title: "Talent Education",
     description:
       "Iniciativa de talent Network, para crear un espacio de disción y debate par los temas de actualización tecnologíca y su impacto en la brecha generacional",
     logoUrl:
       "https://www.talent-land.mx/wp-content/uploads/2019/03/Logo-Talent-Education-540x230.png"
   },
   {
     title: "Talent Jobs",
     description:
       "Busca promover el talento joven del país, vinculando con oportunidades de desarrolo profesional.",
     logoUrl:
       "https://talent-jobs.net/wp-content/uploads/2017/08/logo-jobs-black.png"
   },
   {
     title: "Talent Hackathon",
     description:
       "Competencia contra reloj en la que los participantes podrán buscar soluciones en grupo a problemas sociales tecnológicos y/ o sustentables.",
     logoUrl:
       "https://hackathon.talent-network.org/wp-content/uploads/2019/06/2019-Talent-Hackathon-CCD-Logo.png"
   }
 ];

mongoose
  .connect(
    `mongodb+srv://Admin:wM3fQPcG26mXNdC@cluster0-b3btc.mongodb.net/talent-imap?retryWrites=true&w=majority`,
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(db => console.log("La base de datos ha sido actualizada"))
  .catch(err => console.log(err));

Section.insertMany(sections);