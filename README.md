# Heroic Unix Pipes connecting your devices to the Internet!

<img src=images/pipebot-example2.gif width=100% style="border: none">







## Why Unix Pipes?
The Unix Pipe is a universal standard for connecting two programs. Below you will find programs for pulling data from devices/sensors and programs for pushing data to databases that you can mix and match by connecting them with a Unix Pipe on something like the $35 Raspberry Pi computer.







## Devices / Sensors


#### Raspberry Pi Temperature
Pull the temperature from the Raspberry Pi's temperature sensor on the CPU.

- URL: https://github.com/PipeBots/pipebot-raspberry-pi-cpu-temperature-cli
- Download: https://github.com/PipeBots/pipebot-raspberry-pi-cpu-temperature-cli/archive/0.0.0.zip


#### 1-wire temperature sensor
- URL: https://github.com/openpipekit/opk-1-wire-cli
- Download: https://github.com/openpipekit/opk-1-wire-cli/archive/4.tar.gz


#### Arduino Firmata adaptor
An Open Pipe Kit command line interface to any Arduino using the Firmata firmware, which is connected to any sensor via analog, digital, i2c etc interface. By Jeff Warren of Public Lab.

- URL: https://github.com/jywarren/opk-firmata-cli


#### SHT1x humidity/temperature sensor
Open Pipe Kit driver for SHT1x humidity/temperature sensors for Raspberry Pi, based on pi-sht1x node library, built for Public Lab's Particle Sensing project: http://publiclab.org/wiki/particle-sensing

- URL: https://github.com/jywarren/opk-sht1x-cli


#### Thermofisher PDR1500 dust sensor
An Open Pipe Kit command line interface for interacting with the ThermoFisher pDR-1500 optical dust sensor over USB, built for Public Lab's Particle Sensing project: http://publiclab.org/wiki/particle-sensing

- URL: https://github.com/jywarren/opk-thermofisher-pdr1500-cli/


#### Dylos dust sensor
An Open Pipe Kit command line interface for interacting with the Dylos DC1100 optical dust sensor over USB, built for Public Lab's Particle Sensing project: http://publiclab.org/wiki/particle-sensing

- URL: https://github.com/jywarren/opk-dylos-cli
- Download: https://github.com/jywarren/opk-dylos-cli/archive/v0.0.1.tar.gz


#### Speck dust sensor
An Open Pipe Kit command line interface for interacting with the CMU Create Lab's Speck optical dust sensor, built for Public Lab's Particle Sensing project: http://publiclab.org/wiki/particle-sensing

- URL: https://github.com/jywarren/opk-speck-cli/


#### Shinyei PPD42 Dust Sensor
An Open Pipe Kit command line interface for interacting with the Shinyei PPD42 optical dust sensor, built for Public Lab's Particle Sensing project: http://publiclab.org/wiki/particle-sensing

- URL: https://github.com/jywarren/opk-shinyei-ppd42-cli/


#### Temper1 Waterproof Temperature Sensor
This is our classic temperature sensor for $16. Unfortunately it was discontinued recently in favor of the temper2 sensor. We have a temper2 on the way and we'll test to see if this driver works with it. In the meantime, if you have a temper1 USB sensor, give this a try!

- URL: https://github.com/openpipekit/opk-cli--temper1
- Download: https://github.com/openpipekit/opk-cli--temper1/archive/0.5.0.tar.gz


#### Grove DHT Pro Humidity for GrovePi
- URL: https://github.com/openpipekit/opk-cli--grove-dht-pro-humidity
- Download: https://github.com/openpipekit/opk-cli--grove-dht-pro-humidity/archive/0.1.0.tar.gz


#### Grove DHT Pro Temperature for GrovePi
- URL: https://github.com/openpipekit/opk-cli--grove-dht-pro-temperature
- Download: https://github.com/openpipekit/opk-cli--grove-dht-pro-temperature/archive/0.1.0.tar.gz


#### TI Sensor Tag
Wireless Bluetooth device with IR Temperature Sensor, Humidity Sensor, Pressure Sensor, Accelerometer, Gyroscope, Magnetometer.

- URL: https://github.com/openpipekit/opk-cli--sensortag
- Download: https://github.com/openpipekit/opk-cli--sensortag/archive/0.2.0.tar.gz


#### Yoctopuce USB Temperature Sensor
A USB temperature sensor from Yoctopuce http://www.yoctopuce.com/EN/products/usb-environmental-sensors/yocto-temperature

- URL: https://github.com/openpipekit/opk-cli--yoctopuce-temperature
- Download: https://github.com/openpipekit/opk-cli--yoctopuce-temperature/archive/0.1.0.tar.gz






## Databases


#### Spreadsheet on your USB Drive
A CLI for saving data to CSV so it can be opened in Excel, Libre Office, or Google Sheets.

- URL: https://github.com/openpipekit/opk-cli--simple-csv
- Download: https://github.com/openpipekit/opk-cli--simple-csv/archive/0.2.0.tar.gz


#### Adafruit IO
- URL: https://github.com/openpipekit/opk-cli--adafruit-io
- Download: https://github.com/PipeBots/pipebot-adafruit-io-cli/archive/0.1.0.zip


#### Google Sheets by Cloudstitch
Push to a Google Sheet using your Cloudstitch project.

- URL: https://github.com/openpipekit/opk-cli--cloudstitch-google-sheets
- Download: https://github.com/openpipekit/opk-cli--cloudstitch-google-sheets/archive/0.4.0.tar.gz


#### FarmOS
- URL: https://github.com/rjsteinert/opk-cli--farmos
- Download: https://github.com/rjsteinert/opk-cli--farmos/archive/0.1.0.tar.gz


#### Dat: versioned data, collaborated
A CLI for a Dat database `http://dat-data.com/`. Dat is a version-controlled, decentralized data tool for collaboration between data people and data systems.

- URL: https://github.com/openpipekit/opk-cli--dat
- Download: https://github.com/openpipekit/opk-cli--dat/archive/v0.0.1.tar.gz


#### Fido: email alerts if out of bounds
A push CLI that will send an email if piped value is over maximum and under minimum. The email will only trigger once for every time the piped value is in range and then goes out of range.

- URL: https://github.com/openpipekit/opk-cli--fido
- Download: https://github.com/openpipekit/opk-cli--fido/archive/v0.2.0.tar.gz


#### Phant online: try data.sparkfun.com
- URL: https://github.com/openpipekit/opk-cli--phant
- Download: https://github.com/openpipekit/opk-cli--phant/archive/0.5.0.tar.gz


#### Drupal Thing API
- URL: https://github.com/openpipekit/opk-cli--drupal-thing
- Download: https://github.com/openpipekit/opk-cli--drupal-thing/archive/0.0.2.tar.gz


#### CouchDB
- URL: https://github.com/openpipekit/opk-cli--couchdb
- Download: https://github.com/openpipekit/opk-cli--couchdb/archive/0.0.0.tar.gz


















## Standards
Each command must have a `--help` option and we recommend help output follows the docopt standard (http://docopt.org/).


#### pull command
A `pull` command for getting a single reading of one or more sensors on a device.

- Issuing a pull command will print a value on a new line and then exit.
- If there are more than one sensor values returned,


#### stream command
A `stream` command for getting multipe readings of one or more sensors on a device. When a line is returned is up to the logic of the `stream` program.

- Event based sensors make sense to stream as opposed to issuing a `pull` at an arbitrary interval that may miss events.
- Stream commands do not exit after returning a value but instead keep alive.
- Every new value is delimited by a new line.


#### detect command
A `detect` command to detect the Sensor IDs available on a device.


#### push command
A `push` command for sending one or more sensor values to a database. Compatible with piping from both `pull` and `stream`.

- Accepts input over a `--value=<value>` option or over STDIN (`echo "42" | ./database-cli/push`).
- `push` commands exit immediately after completing execution when using the `value` parameter.
- `push` receiving input over a pipe only exit when they receive an exit code over the pipe from another command.
- Support `stream` command by looking for values on new lines.
- When the database requires a schema and at least one field name, use the `--field_name=<field_name>` option. To keep thing simple for now, we take a schemaless approach. See experimental specifications below for schema based approaches.


#### install command
An `install` install command for initialization of required environment variables and downloading of dependencies.

- An install command for initialization of required environment variables and downloading of dependencies.


#### onboot command
An `onboot` command for things that need to be done every time a machine boots and before the push or pull commands are used.







## Get involved
* [Email Forum on Google Groups](https://groups.google.com/forum/#!forum/open-pipe-kit)
* [Live Chat on Gitter](https://gitter.im/openpipekit/openpipekit)
* [Monthly Hangout, first thursday at 8pm ET](https://plus.google.com/hangouts/_/rjsteinert.com/open-pipe-kit)
* [Research Notes tagged on Public Lab](https://publiclab.org/tag/open-pipe-kit)
* [Forum posts tagged on Farm Hack]()
