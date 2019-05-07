const express = require('express');
const router = express.Router();
const characters = require('../data/characters')
// QUery
// chiedi http://localhost:7070/personaggi?colore=giallo&sesso=m
router.get('/', (req, res, next) => {
    const query = req.query
    let personaggi = characters.characters
    if ('lastname' in query) {
      personaggi = personaggi.filter((personaggio) => {
        return personaggio.lastname === query.lastname
      })
    }
    if ('firstname' in query) {
      personaggi = personaggi.filter((personaggio) => {
        return personaggio.firstname === query.firstname
      })
    }
    res.send(personaggi)
    // next();
  }, (req, res, next) => {
    console.log('FIRE 2')
  }
)

// Params
//http://localhost:7070/personaggi/9

router.get('/:id/', (req, res) => {
//convert string in number
  const id = Number(req.params.id)
  res.json(characters.characters.filter(personaggio => personaggio.id === id))
})

//metodo post
router.post('/form', (req,res) => {
  const body = req.body
  const {
    nome,
    cognome,
    occupazione,
    tel
  } = req.body

  const status ={}
  console.log(nome, cognome, occupazione, tel)
  if(nome){
    status.code = 'ok'
    status.message = `Benvenuto ${nome}`
  } else
  { status.code = 'error'
    status.message = 'nome non valido'
    status.campo = 'nome'

  } 
  res.send(status)
})


module.exports = router