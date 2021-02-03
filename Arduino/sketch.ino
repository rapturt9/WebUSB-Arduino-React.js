#include <WebUSB.h>

/**
 * Creating an instance of WebUSBSerial will add an additional USB interface to
 * the device that is marked as vendor-specific (rather than USB CDC-ACM) and
 * is therefore accessible to the browser.
 *
 * The URL here provides a hint to the browser about what page the user should
 * navigate to to interact with the device.
 */
WebUSB WebUSBSerial(1 /* https:// */, "rapturt9.github.io/WebUSB-Arduino-React.js");

#define Serial WebUSBSerial


int arr[1];
int index;

void setup() {
  while (!Serial) {
    ;
  }
  Serial.begin(9600);
  Serial.write("Sketch begins.\r\n");
  Serial.flush();
  index = 0;
}

void loop() {
  if (Serial && Serial.available()) {
    arr[index++] = Serial.read();
    if (index == 1) {
      Serial.print("Got value: ");
      Serial.print(arr[0]);
      Serial.flush();
      index = 0;
    }
  }
}
