const mongoose = require('mongoose');
const Event = require('../models/Event');

const events = [
  {
    title:
      "Artificial Intelligence and how it will be much more disruptive and exciting to our lives, than the personal computer",
    description:
      "Artificial Intelligence and how it will be much more disruptive and exciting to our lives, than the personal computer.I will be focusing more on the good than the bad:) Future products and Technologies that will change our daily lives forever much more than the personal computer did",
    scheduledFor: new Date("2019-04-22T14:00:00"),
    location: "5d8546ab19dcd3bfbece63b6",
    speaker: "5d84f22813cd7ebc9010f94d",
    type: "Conferencia"
  },
  {
    title:
      "Roomie Bot creadores de robots humanoides: Como no quedarte en la investigación y llevarlos al “Business”.",
    description:
      "Roomie Bot es un Robot humanoide que evolucionó desde un prototipo de control del hogar, a un caso de éxito de innovación reconocido por el MIT Technology Review como una de las tecnologías con más potencial para cambiar el mundo, el cual es actualmente utilizado por importantes corporaciones como Bayer y Bimbo para transformar digitalmente su negocio.",
    scheduledFor: new Date ("2019-04-22T15:00:00"),
    location: "5d8546ab19dcd3bfbece63b6",
    speaker: "5d84f22813cd7ebc9010f950",
    type: "Conferencia"
  },
  {
    title: "10 ideas de ciencia ficción que están a punto de ser realidad",
    description:
      "Lo hemos leído en libros, visto en las películas y series de televisión; la ciencia ficción nos presenta ideas tan descabelladas que parecen pertenecer a un futuro muy lejano. Sin embargo día a día personas alrededor del mundo están haciéndolas realidad: manipulación genética, carros autónomos, viajes al espacio y la conquista de Marte, por mencionar solo algunas. El futuro está por dejar de ser ficción y es momento de prepararnos para hacer el mejor uso de estas nuevas herramientas y tecnologías. Freddy ha seguido de cerca el desarrollo de varias de estas ideas y nos presentará las diez que ya están aquí.",
    scheduledFor:new Date ("2019-04-22T17:00:00"),
    location: "5d8546ab19dcd3bfbece63b6",
    speaker: "5d84f22813cd7ebc9010f952",
    type: "Conferencia"
  },
  {
    title: "Orquesta Sinfónica Juvenil de Guadalajara",
    description: "",
    scheduledFor: new Date ("2019-04-22T18:00:00"),
    location: "5d8546ab19dcd3bfbece63b6",
    speaker: "5d856fdc43bd6ac2143fbe8b",
    type: "Show"
  },
  {
    title: "Talent Match",
    description: "",
    scheduleFor:new Date ("2019-04-22T23:00:00"),
    location: "5d8546ab19dcd3bfbece63b6",
    type: "Fun"
  },
  {
    title:
      "Creando una real-time Progressive Web Application con Vue.js, Node.js y Socket.io.",
    description:
      "Se analizará la ventaja de usar Vue.js contra los frameworks que le compiten actualmente (Angular.js, React.js), así mismo se desenvuelve el concepto de que es una Progressive Web Application (PWA) y se crea una usando Vue.js para el front-end y Node-js en el back-end haciendo uso de Socket.io para añadir la funcionalidad de real-time bidireccional.",
    scheduledFor:new Date ("2019-04-22T16:00:00"),
    location: "5d8546ab19dcd3bfbece63b7",
    speaker: "5d856fdc43bd6ac2143fbe8a",
    type: "Conferencia",
    land: "DevLand"
  },
  {
    title:
      "Cleaning up the mess: Estilos arquitectónicos para la era de la nube.",
    description:
      "En la era actual se hace necesario desarrollar aplicaciones en una forma que permita aprovechar las características de un entorno en la nube. Es muy común partir nuestra aplicación en microservicios, pero ¿cómo diseñamos la arquitectura de dichos microservicios de forma que sean escalables y mantenibles? En esta charla exploraremos estilos arquitectónicos clásicos y modernos, y cómo se aplican a la construcción de microservicios.",
    scheduledFor:new Date ("2019-04-22T19:00:00"),
    location: "5d8546ab19dcd3bfbece63b7",
    land: "DevLand",
    speaker: "5d856fdc43bd6ac2143fbe8c",
    type: "Conferencia"
  },
  {
    title:
      "Arquitectura y despliegue de MySQL para soportar tráfico de alto volumen.",
    description:
      "Es bien sabido que, en cualquier sistema, la performance de sus bases de datos es uno de los mayores cuellos de botella. En este panel, exploramos como utilizar MySQL y su ecosistema open-source para lograr soluciones de alto rendimiento, escalables y económicas.",
    scheduledFor:new Date ("2019-04-22T14:00:00"),
    location: "5d8546ab19dcd3bfbece63b8",
    speaker: "5d856fdc43bd6ac2143fbe8d",
    type: "Conferencia",
    land: "DevLand"
  },
  {
    title: "mHealth: Inteligencia artificial integrada a la salud",
    description:
      "El objetivo de esta charla es dar a conocer los beneficios de integrar métodos como la inteligencia artificial en el área médica, además de mostrar un proyecto con impacto social que la comunidad Ikigai desarrolla.",
    scheduledFor: new Date("2019-04-22T22:00:00"),
    location: "5d8546ab19dcd3bfbece63b8",
    speaker: "5d856fdc43bd6ac2143fbe8f",
    type: "Conferencia"
  },
  {
    title: "El poder del almacenamiento en el mundo de los videojuegos",
    description: "5d856fdc43bd6ac2143fbe90",
    scheduledFor:new Date ("2019-04-22T20:00:00"),
    location: "5d8546ab19dcd3bfbece63b9",
    speaker: "5d856fdc43bd6ac2143fbe91",
    type: "Conferencia"
  },
  {
    title: "Cómo iniciarte en el mundo de la ciberseguridad",
    description:
      "Los hackers siempre han causado gran curiosidad y misterio para las personas, desde películas de hollywood hasta sus hazañas reales vistas en noticieros y redes sociales. Pero, ¿cómo nace un hacker? ¿cómo inicio en ciberseguridad? Esta charla es para aquellos que quieren iniciar en este mundo pero no saben cómo.",
    scheduledFor: new Date("2019-04-22T20:00:00"),
    location: "5d8546ab19dcd3bfbece63b9",
    speaker: "5d856fdc43bd6ac2143fbe91",
    type: "Conferencia"
  },
  {
    title: "Electrónica y materiales exóticos",
    description:
      "En esta charla abordaremos esas posibilidades y expondremos los beneficios de incluir materiales alternativos en las tecnologías.",
    scheduledFor:new Date ("2019-04-22T20:00:00"),
    location: "5d8546ab19dcd3bfbece63c0",
    speaker: "5d856fdc43bd6ac2143fbe92",
    type: "Conferencia"
  }
];


mongoose
  .connect(
    `mongodb+srv://Admin:wM3fQPcG26mXNdC@cluster0-b3btc.mongodb.net/talent-imap?retryWrites=true&w=majority`,
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(db => console.log("La base de datos ha sido actualizada"))
  .catch(err => console.log(err));

Event.insertMany(events);
