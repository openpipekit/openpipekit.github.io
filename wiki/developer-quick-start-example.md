# Open Pipe Kit - Developer Quick Start

## Rolling the pipe by hand
Using the [Pirateship disk image for Raspberry Pi](http://pirate.sh) (download the disk image that says "latest"), we can create a pipe that pulls temperature data from the CPU and pushes it to a CSV by adding two files to a USB Drive that we'll plug into our Raspberry Pi.

Create an `autorunonce.sh` file and place the following code in that file. This will run once a download of the command line interfaces that will pull and push data.
```
#! /bin/sh

git clone https://github.com/openpipekit/opk-cli--rpi-cpu-temperature.git
git clone https://github.com/openpipekit/opk-cli--simple-csv.git
```

To pipe the temperature data to CSV, place the following line in a file on the USB Drive named `autorun.sh`. Replace `{{frequencyInSeconds}}` with how often you would like to store data and replace `{{fileName}}` with the name of file where you would like output to go. This will run every time the Raspberry Pi boots but after the `runonce.sh` file.
```
#! /bin/sh

watch -n{{frequencyInSeconds}} './opk-cli--rpi-cpu-temperature/pull | opk-cli--simple-csv/push {{fileName}}'
```

Now plug your USB drive into your Raspberry Pi with an Internet connection.  It will run the `runonce.sh` file to download the dependencies and then the `autorun.sh` from there on out. If your Raspberry Pi is not going to have Internet on it's first boot, you can place those dependencies on the USB Drive manually.


## Roll the pipe using Yeobot, the robot generator
Load this code onto a USB drive even faster next time by utilizing a Yeobot Recipe that will download the code and prompt your for the string replacement. Yeobot requires [Node.js](http://nodejs.org).
```
# Install the yeobot cli
npm install -g yeobot-cli
# Change directory to your USB Drive
cd /path-to-your-usb-drive
# Run the yeobot cli by feeding it a repository URL. It will clone the repo and prompt you for the string replacements.
yeobot --repository=https://github.com/openpipekit/yeobot--pull-from-rpi-cpu-temperature-push-to-simple-csv.git
```

Yeobot is a robot generator. See more recipes [here](https://github.com/openpipekit?utf8=%E2%9C%93&query=yeobot--). 

