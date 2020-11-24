'use strict'

//ls /dev/ttyUSB0
//sudo chmod a+rw /dev/ttyUSB0


const SerialPort = require('serialport')
const Readline = require('@serialport/parser-readline')
const port = new SerialPort('/dev/ttyUSB0')

const parser = port.pipe(new Readline({ delimiter: '\r\n' }))
parser.on('data', console.log)