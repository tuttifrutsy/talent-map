const mongoose = require('mongoose');
const Stage = require('../models/Stage');

const stages = [
  {
    name: "JALISCO (MAIN STAGE)",
    zone: "A1",
    location: "",
    events: [],
    type: "Stage",
    description: "",
    sponsors: []
  },
  {
    name: "CLOUD",
    zone: "B1",
    location: "",
    events: [],
    section: "5d8eab90a079923ee1126db5",
    type: "Stage",
    land: "DevLand",
    description: "",
    sponsors: []
  },
  {
    name: "A.I & IOT",
    zone: "B2",
    location: "",
    events: [],
    section: "5d8eab90a079923ee1126db9",
    type: "Stage",
    description: "",
    sponsors: []
  },
  {
    name: "DEV. GAMES & VR",
    zone: "B3",
    location: "",
    events: [],
    section: "5d8eab90a079923ee1126db5",
    land: "DevLand",
    type: "Stage",
    description: "",
    sponsors: []
  },
  {
    name: "CONNECTORY",
    zone: "B4",
    location: "",
    events: [],
    section: "5d8eab90a079923ee1126db5",
    land: "DevLand",
    type: "Pabellón",
    description: "",
    sponsors: []
  },
  {
    name: "DEVELOPER LAB - WORKSHOP",
    zone: "B5A",
    location: "",
    events: [],
    section: "5d8eab90a079923ee1126db5",
    land: "DevLand",
    type: "Lab",
    description: "",
    sponsors: []
  },
  {
    name: "TRANSMEDIA",
    zone: "C1",
    location: "",
    events: [],
    section: "5d8eab90a079923ee1126db4",
    land: "CreativeLand",
    type: "Stage",
    description:
      "Espacio de conferencias sobre el cine, la fotografía y la música"
  },
  {
    name: "FASHION",
    zone: "C2",
    location: "",
    events: [],
    section: "5d8eab90a079923ee1126db4",
    land: "CreativeLand",
    type: "Stage",
    description:
      "Conferencias acerca de la moda y textil, aplicación de Nuevas tecnologías, uso de herramientas en producción..."
  },
  {
    name: "DESIGN",
    zone: "C3",
    location: "",
    events: [],
    section: "5d8eab90a079923ee1126db4",
    land: "CreativeLand",
    type: "Stage",
    description:
      "Espacio de Conferencias y exposición de conocimientos y actualizaciones de la industria del diseño, ilustración y animación"
  },
  {
    name: "C4 - PABELLÓN ADOBE",
    zone: "C4",
    location: "",
    events: [],
    section: "5d8eab90a079923ee1126db4",
    land: "CreativeLand",
    type: "Pabellón",
    description: "",
    sponsors: []
  },
  {
    name: "WORKSHOP UDG",
    zone: "C5",
    location: "",
    events: [],
    section: "5d8eab90a079923ee1126db5",
    land: "DevLand",
    type: "Workshop",
    description: "",
    sponsors: []
  },
  {
    name: "CIUDAD CREATIVA DIGITAL",
    zone: "C6",
    location: "",
    events: [],
    section: "5d8eab90a079923ee1126db4",
    land: "CreativeLand",
    type: "Stage",
    description: "",
    sponsors: []
  },
  {
    name: "AULA DE MEDIOS DIGITAL",
    zone: "C7A",
    location: "",
    events: [],
    section: "5d8eab90a079923ee1126db4",
    land: "CreativeLand",
    type: "Lab",
    description: "",
    sponsors: []
  },
  {
    name: "SALA DE FOTOGRAFÍA",
    zone: "C7B",
    location: "",
    events: [],
    section: "5d8eab90a079923ee1126db4",
    land: "CreativeLand",
    type: "Lab",
    description: "",
    sponsors: []
  },
  {
    name: "SALA DE VÍDEO",
    zone: "C7C",
    location: "",
    events: [],
    section: "5d8eab90a079923ee1126db4",
    land: "CreativeLand",
    type: "Lab",
    description: "",
    sponsors: []
  },
  {
    name: "AULA TRANSMEDIA",
    zone: "C7D",
    location: "",
    events: [],
    section: "5d8eab90a079923ee1126db4",
    land: "CreativeLand",
    type: "Lab",
    description: "",
    sponsors: []
  },
  {
    name: "ATELIER",
    zone: "C7E",
    location: "",
    events: [],
    section: "5d8eab90a079923ee1126db4",
    type: "Lab",
    description:
      "Laboratorio vivencial, donde te podrás adentrar en el mundo de la moda, ",
    sponsors: []
  },
  {
    name: "ENERGÍA - INDUSTRIA 4.0",
    zone: "D1",
    location: "",
    events: [],
    section: "5d8eab90a079923ee1126db9",
    land: "IronLand",
    type: "Stage",
    description: "",
    sponsors: []
  },
  {
    name: "MAKERS, ROBOTS & DRONES",
    zone: "D2",
    location: "",
    events: [],
    section: "5d8eab90a079923ee1126db9",
    land: "IronLand",
    type: "Stage",
    description: "",
    sponsors: []
  },
  {
    name: "LTH",
    zone: "D3",
    location: "",
    events: [],
    section: "5d8eab90a079923ee1126db9",
    land: "IronLand",
    type: "Pabellón",
    description: "",
    sponsors: []
  },
  {
    name: "MAKER ED",
    zone: "D5A",
    location: "",
    events: [],
    section: "5d8eab90a079923ee1126db9",
    land: "IronLand",
    type: "Lab",
    description: "",
    sponsors: []
  },
  {
    name: "CRAFTING",
    zone: "D58",
    location: "",
    events: [],
    section: "5d8eab90a079923ee1126db9",
    land: "IronLand",
    type: "Lab",
    description: "",
    sponsors: []
  },
  {
    name: "MESA DE TALLERES 1",
    zone: "D5C1",
    location: "",
    events: [],
    section: "5d8eab90a079923ee1126db9",
    land: "IronLand",
    type: "Lab",
    description: "",
    sponsors: []
  },
  {
    name: "MESA DE TALLERES 2",
    zone: "D5C2",
    location: "",
    events: [],
    section: "5d8eab90a079923ee1126db9",
    land: "IronLand",
    type: "Lab",
    description: "",
    sponsors: []
  },
  {
    name: "MESA DE TALLERES 3",
    zone: "D5C3",
    location: "",
    events: [],
    section: "5d8eab90a079923ee1126db9",
    land: "IronLand",
    type: "Lab",
    description: "",
    sponsors: []
  },
  {
    name: "MESA DE TALLERES 4",
    zone: "D5C4",
    location: "",
    events: [],
    section: "5d8eab90a079923ee1126db9",
    land: "IronLand",
    type: "Lab",
    description: "",
    sponsors: []
  },
  {
    name: "MODDING",
    zone: "D5D",
    location: "",
    events: [],
    section: "5d8eab90a079923ee1126db9",
    land: "IronLand",
    type: "Lab",
    description: "",
    sponsors: []
  },
  {
    name: "CARPINTERÍA",
    zone: "D5D - D5E",
    location: "",
    events: [],
    section: "5d8eab90a079923ee1126db9",
    land: "IronLand",
    type: "Lab",
    description: "",
    sponsors: []
  },
  {
    name: "Dremel + Bosch Carpintería",
    zone: "D5F",
    location: "",
    events: [],
    section: "5d8eab90a079923ee1126db9",
    land: "IronLand",
    type: "Lab",
    description: "",
    sponsors: []
  },
  {
    name: "EMPRENDEDORES",
    zone: "E1",
    location: "",
    events: [],
    section: "5d8eab90a079923ee1126db8",
    land: "BusinessLand",
    type: "Stage",
    description: "",
    sponsors: []
  },
  {
    name: "E-COMMERCE",
    zone: "E2",
    location: "",
    events: [],
    section: "5d8eab90a079923ee1126db8",
    land: "BusinessLand",
    type: "Stage",
    description: "",
    sponsors: []
  },
  {
    name: "MARKETING",
    zone: "E3",
    location: "",
    events: [],
    section: "5d8eab90a079923ee1126db8",
    land: "BusinessLand",
    type: "Stage",
    description: "",
    sponsors: []
  },
  {
    name: "POSIBLE ROOM",
    zone: "E4A",
    location: "",
    events: [],
    section: "5d8eab90a079923ee1126db8",
    land: "BusinessLand",
    type: "Lab",
    description: "",
    sponsors: []
  },
  {
    name: "INNOVATION ROOM",
    zone: "E4B",
    location: "",
    events: [],
    section: "5d8eab90a079923ee1126db8",
    land: "BusinessLand",
    type: "Lab",
    description: "",
    sponsors: []
  },
  {
    name: "BLOCKCHAIN",
    zone: "F1",
    location: "",
    events: [],
    land: "BlockchainLand",
    section: "5d8eab90a079923ee1126db6",
    type: "Stage",
    description: "",
    sponsors: []
  },
  {
    name: "BITSO LAB",
    zone: "F2",
    location: "",
    events: [],
    land: "BlockchainLand",
    section: "5d8eab90a079923ee1126db6",
    type: "Lab",
    description: "",
    sponsors: []
  },
  {
    name: "SMART COLISEUM",
    zone: "G1",
    location: "",
    events: [],
    land: "GamerLand",
    section: "5d8eab90a079923ee1126db7",
    type: "Stage",
    description:
      "Un espacio monumental para 400 espectadores y escenario de 180 gragos, donde las finales de las justas de e-Sports.",
    sponsors: []
  },
  {
    name: "NVIDIA GAMING ARENA",
    zone: "G2",
    location: "",
    events: [],
    section: "5d8eab90a079923ee1126db7",
    land: "GamerLand",
    type: "Stage",
    description: "",
    sponsors: []
  },
  {
    name: "AJEDREZ",
    zone: "G3",
    location: "",
    events: [],
    section: "5d8eab90a079923ee1126db7",
    land: "GamerLand",
    type: "Smart Games",
    description: "",
    sponsors: []
  },
  {
    name: "SPEEDCUBES",
    zone: "G4",
    location: "",
    events: [],
    section: "5d8eab90a079923ee1126db7",
    land: "GamerLand",
    type: "Smart Games",
    description: "",
    sponsors: []
  },
  {
    name: "TABLE TOP",
    zone: "G5",
    location: "",
    events: [],
    section: "5d8eab90a079923ee1126db7",
    land: "GamerLand",
    type: "Smart Games",
    description: "",
    sponsors: []
  },
  {
    name: "HACKATHON",
    zone: "H1",
    location: "",
    events: [],
    section: "5d8eab90a079923ee1126dc1",
    type: "Stage",
    description: "",
    sponsors: []
  },
  {
    name: "HACKATHON WORKSHOP 1",
    zone: "H2",
    location: "",
    section: "5d8eab90a079923ee1126dc1",
    events: [],
    type: "Workshop",
    description: "",
    sponsors: []
  },
  {
    name: "HACKATHON WORKSHOP 3",
    zone: "H4",
    location: "",
    events: [],
    section: "5d8eab90a079923ee1126dc1",
    type: "Workshop",
    description: "",
    sponsors: []
  },
  {
    name: "JALISCO",
    zone: "I1",
    location: "5d8eab90a079923ee1126dbd",
    events: [],
    type: "Workshop",
    description: "",
    sponsors: []
  },
  {
    name: "GUADALAJARA",
    zone: "I2",
    location: "",
    section: "5d8eab90a079923ee1126dbe",
    events: [],
    type: "Pabellón",
    description: "",
    sponsors: []
  },
  {
    name: "SUPERPODERES (SOFT SKILLS)",
    zone: "I3",
    location: "",
    events: [],
    section: "5d8eab90a079923ee1126dbc",
    type: "Stage",
    description: "",
    sponsors: []
  },
  {
    name: "TALENT EDUCATION",
    zone: "I4",
    location: "",
    events: [],
    section: "5d8eab90a079923ee1126dbf",
    type: "Stage",
    description: "",
    sponsors: []
  },
  {
    name: "TALENT WOMAN",
    zone: "I5",
    section: "5d8eab90a079923ee1126dbb",
    location: "",
    events: [],
    type: "Stage",
    description: "",
    sponsors: []
  },
  {
    name: "AGRO",
    zone: "J1",
    location: "",
    events: [],
    section: "5d8eab90a079923ee1126dba",
    type: "Stage",
    description: "",
    sponsors: []
  },
  {
    name: "TALENT JOBS",
    zone: "I5",
    section: "5d8eab90a079923ee1126dc0",
    location: "",
    events: [],
    type: "Stage",
    description: "",
    sponsors: []
  }
];

mongoose
  .connect(
    `mongodb+srv://Admin:wM3fQPcG26mXNdC@cluster0-b3btc.mongodb.net/talent-imap?retryWrites=true&w=majority`,
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(db => console.log("La base de datos ha sido actualizada"))
  .catch(err => console.log(err));

Stage.insertMany(stages);

  


