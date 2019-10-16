// /** config de estrategia local de passport ******/
// require('dotenv').config();


// passport.use(
//   new LocalStrategy(
//     {
//       usernameField: "email",
//       passwordField: "password",
//       session: false
//     },
//     (email, password, done) => {
//      // console.log("ejecutando *callback verify* de estategia local");
//       User.findOne({ email: email })
//         .then(data => {
//           if (data === null) return done(null, false);
//           //el usuario no existe
//           else if (!bcrypt.compareSync(password, data.password)) {
//             return done(null, false);
//           } //no coincide la password
//           return done(null, data); //login ok
//         })
//         .catch(err => done(err, null)); // error en DB
//     }
//   )
// );

// /** config de estrategia jwt de passport ******/
// let opts = {};
// opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
// opts.secretOrKey = process.env.JWT_SECRET;
// opts.algorithms = [process.env.JWT_ALGORITHM];

// passport.use(
//   new JwtStrategy(opts, (jwt_payload, done) => {
//     //console.log("ejecutando *callback verify* de estategia jwt");
//     User.findOne({ _id: jwt_payload.sub })
//       .then(data => {
//         if (data === null) {
//           //no existe el usuario
//           //podríamos registrar el usuario
//           return done(null, false);
//         } else return done(null, data);
//         /*encontramos el usuario así que procedemos a devolverlo para
//         inyectarlo en req.user de la petición en curso*/
//       })
//       .catch(err => done(err, null)); //si hay un error lo devolvemos
//   })
// );
