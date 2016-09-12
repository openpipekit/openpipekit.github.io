# Get in control of your IoT data using pipes! 

> Open Pipe Kit is an open research project seeking to democratize the Internet of Things by seeking out tools and techniques that prioritize user privacy, freedom, and convenience in managing all these little devices running around.  


## The problem 
Some folks have referred to the state of the Internet of Things as the [Internet of Silos](https://allthingsopen.org/talk/monitoring-the-internet-of-silos/), others have referred to it as the [Internet of Shit](http://www.theverge.com/circuitbreaker/2016/7/12/12159766/internet-of-things-iot-internet-of-shit-twitter). To summarize, __users have little to no control over their data being generated on devices ends up. They are not able to say "I want X device data to go to Y database, not Z database that the hardware manufaturer tied my device to."__ [Every](http://supermechanical.com/twine/) [device](http://www2.meethue.com/en-us/) [requires](http://pine-environmental.com/product/instruments/tsi_dustrak_8530/) [their](http://www.samsung.com/us/explore/family-hub-refrigerator/) [own](http://global.parrot.com/au/products/flower-power/) [custom](https://edyn.com/) [Gateway](https://aws.amazon.com/iot/button/) [device](https://www.fitbit.com) [or](https://play.google.com/store/apps/details?id=com.johndeere.jdlink&hl=en) [app](https://nest.com/app/), Gateway devices and apps that only pipe data to the one database on the Internet they were designed for. If you have multiple devices, you end up with your data spread out and often in the hands of providers whom you are [reluctant to sign their TOS in order to use their device](http://www.npr.org/sections/thesalt/2014/01/21/264577744/should-farmers-give-john-deere-and-monsanto-their-data). To make matters worse, when you buy a device that can only communicate with one service, the company you bought that device from has no obligation to keep that service running thus rendering the device you paid good money for useless. 


## The answer 
Imagine a tool for the Internet of Things that empowers users choose where their data is piped to, a tool that you can extend using your preferred programming language, a tool you could run on ubiquitious devices like the $35 Raspberry Pi. After much discussion and prototyping, we realized the ultimate tool for the Internet of Things was in front of us the entire time, we were just using it wrong. It's Linux! More specifically, the Unix Pipe. 

The Unix Pipe allows any program in Linux to send a stream of text to another program in Linux. The example below demostrates a python program that pulls the CPU temperature of a Raspberry Pi, pipes it, the Adafruit program written in node.js receives and sends the data to Adafruit.io.  

<img src=images/pipebot-example2.gif width=100% style="border: none">

So we started writing programs to pull data from Things and programs to push data to Databases on the Internet. Pick any Thing or Database program below and they are compatible with each other over a Unix pipe! Want to write your own? Feel free to write it in any language you wish.  

Here is an example of using a Raspberry Pi to pull data from a Yocto USB Temperature and push that data to farmOS.  

[](https://www.youtube.com/watch?v=fCflGeOpTqk)



## Next steps
- Produce educational materials on how to configure a Raspberry Pi to pipe data from devices to online databases.
- Develop more Thing and Database programs.
- Explore experimental tools for configuring pipes that lower the barrier to entry. Using the command line ain't for everyone even though it's dead simple, it's scary lookin'.



## Things 

### Raspberry Pi Temperature
Pull the temperature from the Raspberry Pi's temperature sensor on the CPU.

- URL: https://github.com/openpipekit/rpi-cpu-temperature
- Download: https://github.com/openpipekit/rpi-cpu-temperature/archive/0.2.0.zip


### 1-wire temperature sensor
A common inexpesnsive digital sensor that allows multiple sensors to connect to a single GPIO pin

- URL: https://github.com/openpipekit/opk-1-wire-cli
- Download: https://github.com/openpipekit/opk-1-wire-cli/archive/4.tar.gz


### Arduino Firmata adaptor
An Open Pipe Kit command line interface to any Arduino using the Firmata firmware, which is connected to any sensor via analog, digital, i2c etc interface. By Jeff Warren of Public Lab.

- URL: https://github.com/jywarren/opk-firmata-cli


### SHT1x humidity/temperature sensor
Open Pipe Kit driver for SHT1x humidity/temperature sensors for Raspberry Pi, based on pi-sht1x node library, built for Public Lab's Particle Sensing project: http://publiclab.org/wiki/particle-sensing

- URL: https://github.com/jywarren/opk-sht1x-cli


### Thermofisher PDR1500 dust sensor
An Open Pipe Kit command line interface for interacting with the ThermoFisher pDR-1500 optical dust sensor over USB, built for Public Lab's Particle Sensing project: http://publiclab.org/wiki/particle-sensing

- URL: https://github.com/jywarren/opk-thermofisher-pdr1500-cli/


### Dylos dust sensor
An Open Pipe Kit command line interface for interacting with the Dylos DC1100 optical dust sensor over USB, built for Public Lab's Particle Sensing project: http://publiclab.org/wiki/particle-sensing

- URL: https://github.com/jywarren/opk-dylos-cli
- Download: https://github.com/jywarren/opk-dylos-cli/archive/v0.0.1.tar.gz


### Speck dust sensor
An Open Pipe Kit command line interface for interacting with the CMU Create Lab's Speck optical dust sensor, built for Public Lab's Particle Sensing project: http://publiclab.org/wiki/particle-sensing

- URL: https://github.com/jywarren/opk-speck-cli/


### Shinyei PPD42 Dust Sensor
An Open Pipe Kit command line interface for interacting with the Shinyei PPD42 optical dust sensor, built for Public Lab's Particle Sensing project: http://publiclab.org/wiki/particle-sensing

- URL: https://github.com/jywarren/opk-shinyei-ppd42-cli/


### Temper1 Waterproof Temperature Sensor
This is our classic temperature sensor for $16. Unfortunately it was discontinued recently in favor of the temper2 sensor. We have a temper2 on the way and we'll test to see if this driver works with it. In the meantime, if you have a temper1 USB sensor, give this a try!

- URL: https://github.com/openpipekit/opk-cli--temper1
- Download: https://github.com/openpipekit/opk-cli--temper1/archive/0.5.0.tar.gz


### Grove DHT Pro Humidity for GrovePi
- URL: https://github.com/openpipekit/opk-cli--grove-dht-pro-humidity
- Download: https://github.com/openpipekit/opk-cli--grove-dht-pro-humidity/archive/0.1.0.tar.gz


### Grove DHT Pro Temperature for GrovePi
- URL: https://github.com/openpipekit/opk-cli--grove-dht-pro-temperature
- Download: https://github.com/openpipekit/opk-cli--grove-dht-pro-temperature/archive/0.1.0.tar.gz


### TI Sensor Tag
Wireless Bluetooth device with IR Temperature Sensor, Humidity Sensor, Pressure Sensor, Accelerometer, Gyroscope, Magnetometer.

- URL: https://github.com/openpipekit/opk-cli--sensortag
- Download: https://github.com/openpipekit/opk-cli--sensortag/archive/0.2.0.tar.gz


### Yoctopuce USB Temperature Sensor
A USB temperature sensor from Yoctopuce http://www.yoctopuce.com/EN/products/usb-environmental-sensors/yocto-temperature

- URL: https://github.com/openpipekit/yoctopuce-temperature-cli
- Download: https://github.com/openpipekit/yoctopuce-temperature-cli/archive/0.2.1.zip



## Databases 

### Spreadsheets
A CLI for saving data to CSV (Excel) so it can be opened in Excel, Libre Office, or Google Sheets.

- URL: https://github.com/openpipekit/csv
- Download: https://github.com/openpipekit/csv/archive/0.0.0.zip


### Adafruit IO
Nice free web based dashboard.

- URL: https://github.com/openpipekit/opk-cli--adafruit-io
- Download: https://github.com/PipeBots/pipebot-adafruit-io-cli/archive/0.1.0.zip


### Google Sheets by Cloudstitch
Push to a Google Sheet using your Cloudstitch project.

- URL: https://github.com/openpipekit/opk-cli--cloudstitch-google-sheets
- Download: https://github.com/openpipekit/opk-cli--cloudstitch-google-sheets/archive/0.4.0.tar.gz


### farmOS
- URL: https://github.com/openpipekitfarmos-cli
- Download: https://github.com/openpipekit/farmos-cli/archive/0.2.0.zip


### Dat: versioned data, collaborated
A CLI for a Dat database `http://dat-data.com/`. Dat is a version-controlled, decentralized data tool for collaboration between data people and data systems.

- URL: https://github.com/openpipekit/opk-cli--dat
- Download: https://github.com/openpipekit/opk-cli--dat/archive/v0.0.1.tar.gz


### Fido: email alerts if out of bounds
A push CLI that will send an email if piped value is over maximum and under minimum. The email will only trigger once for every time the piped value is in range and then goes out of range.

- URL: https://github.com/openpipekit/opk-cli--fido
- Download: https://github.com/openpipekit/opk-cli--fido/archive/v0.2.0.tar.gz


### Phant (AKA data.sparkfun.com)
- URL: https://github.com/openpipekit/opk-cli--phant
- Download: https://github.com/openpipekit/opk-cli--phant/archive/0.5.0.tar.gz


### Drupal Thing API
- URL: https://github.com/openpipekit/opk-cli--drupal-thing
- Download: https://github.com/openpipekit/opk-cli--drupal-thing/archive/0.0.2.tar.gz


### CouchDB
- URL: https://github.com/openpipekit/opk-cli--couchdb
- Download: https://github.com/openpipekit/opk-cli--couchdb/archive/0.0.0.tar.gz



## Develop 
A bundle of commands actually. We recommend creating folder of executable commands for your device or database. See below what each command can be.


### pull command
A `pull` command for getting the values of one or more sensors on a device.

- "Packets" must be in JSON like `{"sensor1": 42, "sensor2": 99}`.
- Multiple packets may be returned, delimit them with a line break.
- If your device is the kind that prefers to send data over when it feels like it, feel free to not exit and delimit each reading on a new line, just make sure to tell people in your README so they don't repeat your command at an interval. Also consider piping into a buffer file and then piping the buffer file to a push command.


### detect command
A `detect` command to detect if there is more than one of the Things in the area you might be able to pull from.


### push command
A `push` command for sending one or more sensor values to a database. 

- Accepts input over STDIN from a pipe. Example:`echo '{"sensor1": 42}' | ./database-cli/push`
- Expect multiple values to be delimited by line breaks.
- Only exit when an exit code is received from the prior program.


### install command
An `install` command for initialization of required environment variables and downloading of dependencies.


### onboot command
An `onboot` command for things that need to be done every time a machine boots and before the push or pull commands are used.



## Get involved
* [Email Forum on Google Groups](https://groups.google.com/forum/#!forum/open-pipe-kit)
* [Live Chat on Gitter](https://gitter.im/openpipekit/openpipekit)
* [Monthly Hangout, first thursday at 8pm ET](https://plus.google.com/hangouts/_/rjsteinert.com/open-pipe-kit)
* [Research Notes tagged on Public Lab](https://publiclab.org/tag/open-pipe-kit)
* [Forum posts tagged on Farm Hack]()
