'use strict'

const setAPIOrigin = require('../../lib/set-api-origin')
const config = require('./config')
const example = require('./example')
const gameboard = require('./gameboard.js')

$('#test-div').hide()

$(() => {
  setAPIOrigin(location, config)
  example.addHandlers()
  gameboard.addHandlers()
})
