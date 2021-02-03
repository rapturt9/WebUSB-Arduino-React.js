# WebUSB-Arduino-React.js
WebUSB demo when using arduino and React.js. Test link on Chrome: https://rapturt9.github.io/WebUSB-Arduino-React.js/

Most code is taken from https://github.com/webusb/arduino, but here is a React.js implementation.

This allows you to connect a supported Arduino to chrome using WebUSB and use React.js to send and receive messages from Arduino. First, upload the Arduino 
sketch and use the website or download the React side (built with Create React App) for yourself. Then, connect the device by clicking the connect button.
Afterwards, type a number into the input button. This message will be sent to the Arduino, and the Arduino will send at back, causing it to appear in the
console. To increase the size of the messages, add more items to the view array on the javascript side and the arr in the Arduino side.
