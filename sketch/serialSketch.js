// ADD TO MAIN SKETCH AFTER TESTING SERIAL

let serial;
let portName = "/dev/tty.usbmodem144301";

let sensor1;
let sensor2;
let sensor3;
let sensor4;

let mapSensor1;
let mapSensor2;
let mapSensor3;
let mapSensor4;

let outByte;

function setup() {
  serial = new p5.SerialPort();

  serial.open(portName);

  serial.on("data", serialEvent);
}

function serialEvent() {
  if (serial.available() > 0) {
    let inString = serial.readStringUntil("\r\n");

    if (inString.length > 0) {
      //create an array and split at the empty space or tab character?
      let sensorArray = split(inString, ",");

      if (sensorArray.length > 3) {
        sensor1 = Number(sensorArray[0]);
        sensor2 = Number(sensorArray[1]);
        sensor3 = Number(sensorArray[2]);
        sensor4 = Number(sensorArray[3]);
      }

      //separate array into individual variables

      console.log(sensor1, sensor2, sensor3, sensor4);
    }
  }
}
