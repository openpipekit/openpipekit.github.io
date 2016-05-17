# The how and why of Unix Pipes for PipeBots

## Why Unix Pipes?
The Unix Pipe is a standard on Unix based operating sytems like Mac OS and Linux that connects two programs, also known as Command Line Interfaces (CLI). In the case of a PipeBot, we're connecting device CLI to a CLI that connects to the Internet.

![Unix Pipe example](images/opk-cli-example.png)

- Linux computers are very affordable and everywhere (Raspberry Pi, Beagle Bone Black, etc.).
- A CLI can be programmed in any language and any CLI can be piped to any other CLI of another language.
- The Unix Pipe is already a standard for connecting programs.

While sending text over a Unix Pipe may be a standard, See our PipeBot CLI standard.

## How to use PipeBot CLIs 
Coming soon...


## How to program a new PipeBot CLI 
Open Pipe Kit collects data using interchangeable drivers for sensors and databases. You can write your own driver in any language you want because every driver is a command line inerface (CLI). How do you turn your program into a CLI? Two things. You add `#!/bin/env yourLanguage` to the top of the file and then on the command line you run `chmod +x your-file`. Now you can execute it from the command line by type `./you-file`. We've come up with a couple of conventions along the way as we've been creating our own CLI. First you'll notice is that if you are writing a sensor CLI, we name our file `pull`. If we are writing a database CLI, we name our file `push`. To send the output of a pull to a push, you just have to place the Unix pipe character between the two commands. For example, `./pull | ./push`. Push drivers often require to know where to push data to, like the URL of a database. For that we use parameters like `./pull | ./push --url=http://mydatabase.net`. If you haven't written a program before that takes the input of CLI parameters, don't fret. There are plenty of good libraries for making that easy in every language.  


### Proposals 
- Default behavior of a `pull` or `stream` is to return all sensor values as a JSON object where the keys are the sensor IDs and the values are the current values of the corresponding sensors. ex. `{"sensorId1": 33, "sensorId2": 30}`
- Limit the returned sensors by specifying a comma seperated list of sensor IDs in a `sensor` paramets. ex `./pull --sensors="temp1,humidity1,temp2"`
- `pull` and `stream` commands always return JSON like `{"sensorId":"value"}` even if there is just one sensor.




