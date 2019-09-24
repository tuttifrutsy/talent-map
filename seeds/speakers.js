require("dotenv").config();
const mongoose = require('mongoose');
const Speaker = require('../models/Speaker');

const speakers = [
  {
    name: {
      firstname: "Nathan",
      lastname: "Schulhof"
    },
    resume:
      "Has been a visionary from the beginning of the Technology Era bringing  new and innovative  devises and technologies to our world such as the MP3 Player ",
    avatar: "https://avatars.sched.co/9/e1/7628829/avatar.jpg?551",
    occupation: "The Inventor of the MP3 Player",
    email: "nathan@algo.com",
    redes: {
      twitter: "@nathan"
    }
  },
  {
    name: {
      firstname: "Aldo",
      lastname: "Luévano"
    },
    resume:
      "El Ingeniero Aldo Luévano es uno de los mas significativos referentes de la tecnología disruptiva en la escena actual latinoamericana.",
    occupation: "Director General de Roomie IT",
    avatar: "https://avatars.sched.co/4/eb/7629033/avatar.jpg?573",
    email: "aldo@alco.com",
    redes: {
      twitter: "https://twitter.com/aldo_luevano_it"
    }
  },
  {
    name: {
      firstname: "Orquesta Sinfónica Juvenil de Guadalajara",
      lastname:""
    },
    resume:
      "Obtuvo el grado de Maestro en Ciencias y Doctor por el Massachusetts Institute of Tecnology (MIT) en donde trabajó como asistente de investigador en el Intelligent Engineering Systems Laboratory",
    occupation:
      "Investigador titular del Departamento de Ciencias de la Computación del CICESE.",
    avatar:
      "https://www.google.com/url?sa=i&source=images&cd=&ved=2ahUKEwiI6LCfyODkAhUvHjQIHVQEAFcQjRx6BAgBEAQ&url=https%3A%2F%2Fwww.ntrguadalajara.com%2Fpost.php%3Fid_nota%3D101075&psig=AOvVaw2BtjMmzYI4IUGGdaMKJsJ-&ust=1569108859018090"
  },
  {
    name: {
      firstname: "Miguel",
      lastname: "Ortega"
    },
    resume:
      " Egresado de Ingeniería en sistemas computacionales, trabajando como desarrollador Javascript para Softtek asignado a proyectos de DXC Technology en un equipo de DevOps Automation enfocado a SaaS desde las perspectiva de base de datos.",
    avatar:
      "https://media.licdn.com/dms/image/C5603AQFfpcO0ZRMr4g/profile-displayphoto-shrink_200_200/0?e=1574294400&v=beta&t=kUz13bmNSBOAuTsYwTcAiNyd8F3QARGsPbF1zOG7Em0",
    occupation: "Front-end developer en Softtek",
    land: "DevLand",
    email: "migui@algo.com",
    redes: {
      linkedin: "https://www.linkedin.com/in/miguel-ortega-053a2215b/"
    }
  },
  {
    name: {
      firstname: "José Ernesto",
      lastname: "Lara"
    },
    resume:
      "Lara es hoy miembro del equipo de arquitectura de Kueski, la plataforma líder de préstamos 100% a través de Internet en Latinoamérica. ",
    avatar:
      "https://media.licdn.com/dms/image/C5603AQGReeUrn-tfMQ/profile-displayphoto-shrink_200_200/0?e=1574294400&v=beta&t=swSeuOqTNPI9kiBKb_GGllOnpJ4mJVc_xtAaDyxGxcQ",
    occupation: "Senior Software Engineer at Kueski",
    land: "DevLand",
    email: "jose@algo.com",
    redes: {
      linkedin: "https://www.linkedin.com/in/jelarar/"
    }
  },
  {
    name: {
      firstname: "Roy",
      lastname: "Kailidis"
    },
    resume:
      "Desarrollador. Arquitectura, investigación y desarrollo. Implementación de nuevas tecnologías.",
    avatar: "https://avatars.sched.co/8/58/7789212/avatar.jpg?7b8",
    occupation: "Team Leader @ Best Day Travel Group",
    land: "DevLand",
    email: "roy@algo.com",
    redes: {
      linkedin: "Websitehttps://linkedin.com/in/roy-kailidis-061a9b16/"
    }
  },
  {
    name: {
      firstname: "Aleida",
      lastname: "Pérez"
    },
    resume:
      "Mexicana, informática fundadora de Ikigai Creators, empresa dedicada al desarrollo de software, soluciones en seguridad, inteligencia artificial e investigación.",

    occupation:
      "Executive Assistant to CEO en Ikigai servicios de consultoría e investigación.",
    land: "DevLand",
    email: "aleida@algo.com"
  },
  {
    name: {
      firstname: "Alexandro",
      lastname: "Alfaro"
    },
    resume:
      "Alfaro es licenciado en Finanzas por el ITAM en Mexico y cuenta con una Maestría en Marketing en España por la Universal Complutense de Madrid.",
    avatar: "https://avatars.sched.co/c/30/7980435/avatar.jpg?6e4",
    occupation: " Gerente de Mercadotecnia en Western Digital México.",
    land: "GamerLand",
    email: "alfaro@algo.com",
    redes: {
      facebook: "alfaro.fb",
      twitter: "@alfaro"
    }
  },
  {
    name: {
      firstname: "Zallyhg",
      lastname:""
    },
    resume:
      "Lidero junto con otras chicas la comunidad HackerGirlMx donde nos dedicamos a unir mujeres con tecnología. Me dedico a la ciberseguridad. Hago videos en mi canal.",
    avatar:
      "https://scontent.fmex5-1.fna.fbcdn.net/v/t1.0-9/26805364_1797310416948384_7539497522562769904_n.jpg?_nc_cat=108&_nc_eui2=AeESY3jH3fxsaZ2_ZrUAP-vTLlSxJhvHJ016JpJBb_QX0vgJmbjUV6_tplH1NF5boCSlnmgYkDEzzqcepofyhzairApgKMoqxpkQkilvRpAlmw&_nc_oc=AQm0R1BlVaOSERv11s4WnyFk45-2pk_1Ukz5RSmd9T5acbGVoYYLuSAF44KtlxGRz5M&_nc_ht=scontent.fmex5-1.fna&oh=7a7dcaca7e14312c38b0c5dc105f1af7&oe=5DF85158",
    occupation: "Part of HackerGirlMx community",
    land: "DevLand",
    email: "zally@algo.com",
    redes: {
      facebook: "https://www.facebook.com/Zallyhg/"
    }
  },
  {
    name: {
      firstname: "Mario Alberto",
      lastname: "García Ramírez"
    },
    resume:
      "La investigación del Dr. García-Ramírez se centra en materiales emergentes para el desarrollo de dispositivos novedosos en varias áreas 'biodispositivos', el objetivo principal. Ha publicado más de 10 artículos en revistas, más de 40 conferencias nacionales e internacionales y ha asesorado a estudiantes de pregrado y posgrado",
    avatar: "http://cas.cucei.udg.mx/sites/default/files/mario_.jpg",
    occupation: "Prof Asociado",
    land: "CreativeLand",
    email: "mario@algo.com",
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