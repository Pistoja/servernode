const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  
  res.send('test')
})

// router.get('/personaggi', (req, res) => {
//   res.send('personaggi')
// })

module.exports = router