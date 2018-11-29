'use strict'

let testDivState = 'hidden'

// if testDivState is hidden, then run .show and set testDivState as shown
// if testDivState is shown, then run .hide and set testDivState to hidden

const onTestButtonClick = () => {
  if (testDivState === 'hidden') {
    $('#test-div').show()
    testDivState = 'shown'
    console.log('first if working')
  } else if (testDivState === 'shown') {
    $('#test-div').hide()
    testDivState = 'hidden'
    console.log('second if working')
  } else {
    console.log('unknown state of testDivState')
  }
}

const addHandlers = () => {
  $('#test-button').on('click', onTestButtonClick)
}

module.exports = {
  addHandlers
}
