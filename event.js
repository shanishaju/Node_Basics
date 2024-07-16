// import module
const event = require('events')

//create object for the EventEmitter
const eventEmitter = new event.EventEmitter()

//create event
eventEmitter.on('onDisplay', ()=>{

    //logic
    console.log('inside the event');
})
//execute 
eventEmitter.emit('onDisplay')

