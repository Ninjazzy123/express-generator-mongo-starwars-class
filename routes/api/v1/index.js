const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
require('models/Quote')
const Quote = mongoose.model('quotes')

router.get('/', (req, res) => {
    res.send('Hi')
})

router.get('/quotes/character/:character', async (req, res) => {
    character = req.params.character
    console.log(character)
    // const filter = { "character": character}
    // const quotes = await Quote.find(filter)
    // console.log(quotes)
    // res.json(quotes)

    const regExpression = new RegExp(character, 'i')
    const regexFilter = { "character": { $regex: regExpression}}
    const quotes = await Quote.find(regexFilter)
    console.log(quotes)
    res.json(quotes)
})

router.get('/characters', async (req, res) => {
    const characters = await Quote.distinct('character')
    reg.json(characters)
})


module.exports = router