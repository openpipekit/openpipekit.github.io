# Open Pipe Kit - Developer Quick Start

Using the [Pirateship disk image for Raspberry Pi](http://pirate.sh) (download the disk image that says "latest"), we can create a pipe that pulls temperature data from the CPU and pushes it to a CSV by adding two files to a USB Drive that we'll plug into our Raspberry Pi.

Create an `autorunonce.sh` file and place th following in that file. This will run once a download of the command line interfaces that will pull and push data.
```
git clone https://github.com/openpipekit/opk-cli--rpi-cpu-temperature.git
git clone https://github.com/openpipekit/opk-cli--simple-csv.git
```

To pipe the temperature data to CSV every 60 seconds, place the following line in a file on the USB Drive named `autorun.sh`. This will run every time the Raspberry Pi boots but after the `runonce.sh` file.
```
watch -n60 './opk-cli--rpi-cpu-temperature/pull | opk-cli--simple-csv/push'
```

Now plug your USB drive into your Raspberry Pi with an Internet connection.  It will run the `runonce.sh` file to download the dependencies and then the `autorun.sh` there on out. If your Raspberry Pi is not going to have Internet on it's first boot, you can place those dependencies on the USB Drive manually.
