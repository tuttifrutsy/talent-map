const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
  res.json({msg: 'Inicia sesión para continuar..'});
})



module.exports = router;