'use strict'

const setAPIOrigin = require('../../lib/set-api-origin')
const config = require('./config')
const example = require('./example')

$('#test-div').hide()

$(() => {
  setAPIOrigin(location, config)
  example.addHandlers()
})
