# Kale.tech
Silicon Hacks 2017 project.

May 6 - 7, 2017

![alt logo](https://github.com/eugesd/SHProject/blob/master/kaletech_logo.png)


## Team
* Eugenio Rivera
* Paul Delgado

## Pitch

Kale.tech is ultimate one-stop solution for maximazing home-grown vegetables, fruits, and personal plants. Simply place the device near the plant, open the online web application, input the type of plant being grown, and in the quickest time possible, you will be able to see your plant grow healthy and plentiful.

Monitor your plants' soil, moisture, and temperature with our smart IoT device. Track the progress of growth through the intuitive online web application powered by IBM's Watson and Bluemix platform-as-a-service tools.

## Synopsis

The purpose of this project is to implement working sensors which output data to a Raspberry Pi 3 Model B, which then connects to our platform, with resulting output to the web application.

## API Reference & Tools
* IBM Watson
* IBM Bluemix
* Raspbian OS
* Node-Red (Node.js)
* get.tech (domain purchase)

### Hardware
* Raspberry Pi 3 Model B v1.2
* DHT-11 Sensor
* YL-69 sensor

## Images
![alt hardware](https://github.com/eugesd/SHProject/blob/master/content/images/hardware.jpg)
![alt output](../master/content/images/output.jpg)

## Sample Code
```python
import sys
import Adafruit_DHT

while True:
	humidity, temperature = Adafruit_DHT.read_retry(11, 4)
	print 'Temp: {0:0.1f} C Humidity: {0:0.1f} %'.format(temperature, humidity)
```

## Links
* [KaleTech](http://www.kale.tech "KaleTech")