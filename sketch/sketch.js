let heads = [];
let headCount = 7;
let torsos = [];
let torsoCount = 7;
let feet = [];
let feetCount = 7;
let previousStates = [0, 0, 0, 0];
let socket;

// let serial;
// let portName = "/dev/tty.usbmodem143301";

// let outByte;

let partsToShow = [];
let bodyParts = [];
// let sensors = [];

function preload() {
  for (let i = 0; i < headCount; i++) {
    heads[i] = loadImage(`images/head${i}.jpeg`);
  }
  for (let i = 0; i < torsoCount; i++) {
    torsos[i] = loadImage(`images/torso${i}.jpeg`);
  }
  for (let i = 0; i < feetCount; i++) {
    feet[i] = loadImage(`images/feet${i}.jpeg`);
  }
}

function setup() {
  createCanvas(windowWidth / 2, 810); // FIX CANVAS SIZE TO SCALE FOR SCREEN PROJECTOR
  socket = io.connect();
  socket.on("control", inputControl);
  // serial = new p5.SerialPort();

  // serial.open(portName);

  // serial.on("data", serialEvent);
  bodyParts = [heads, torsos, feet];
}

function draw() {
  // sensorButtons();
  displayImages();
}

function displayImages() {
  background(255);
  imageMode(CENTER);
  if (partsToShow[0]) {
    image(partsToShow[0], width / 2, 135);
  }
  if (partsToShow[1]) {
    image(partsToShow[1], width / 2, 405);
  }
  if (partsToShow[2]) {
    image(partsToShow[2], width / 2, 675);
  }
}

function inputControl(msg) {
  // console.log("hi");
  partsToShow[msg] = random(bodyParts[msg]);
}

// function serialEvent() {
//   if (serial.available() > 0) {
//     let inString = serial.readStringUntil("\r\n");

//     if (inString.length > 0) {
//       //create an array and split at the empty space or tab character?
//       let sensorArray = split(inString, ",");

//       if (sensorArray.length > 3) {
//         sensors[0] = Number(sensorArray[0]);
//         sensors[1] = Number(sensorArray[1]);
//         sensors[2] = Number(sensorArray[2]);
//         sensors[3] = Number(sensorArray[3]);
//       }
//     }
//   }
// }

// function sensorButtons() {
//   for (let i = 0; i < sensors.length; i++) {
//     if (sensors[i] != previousStates[i]) {
//       previousStates[i] = sensors[i];
//       if (sensors[i] == 1) {
//         if (i < sensors.length - 1) {
//           partsToShow[i] = random(bodyParts[i]);
//         } else {
//           for (let i = 0; i < partsToShow.length; i++) {
//             partsToShow[i] = false;
//           }
//         }
//       }
//     }
//   }
// }
