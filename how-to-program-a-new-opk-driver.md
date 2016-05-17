# How to program a new Open Pipe Kit driver 

## What is an Open Pipe Kit driver?
![OPK CLI Driver example](images/opk-cli-example.png)

Open Pipe Kit collects data using interchangeable drivers for sensors and databases. You can write your own driver in any language you want because every driver is a command line inerface (CLI). How do you turn your program into a CLI? Two things. You add `#!/bin/env yourLanguage` to the top of the file and then on the command line you run `chmod +x your-file`. Now you can execute it from the command line by type `./you-file`. We've come up with a couple of conventions along the way as we've been creating our own CLI. First you'll notice is that if you are writing a sensor CLI, we name our file `pull`. If we are writing a database CLI, we name our file `push`. To send the output of a pull to a push, you just have to place the Unix pipe character between the two commands. For example, `./pull | ./push`. Push drivers often require to know where to push data to, like the URL of a database. For that we use parameters like `./pull | ./push --url=http://mydatabase.net`. If you haven't written a program before that takes the input of CLI parameters, don't fret. There are plenty of good libraries for making that easy in every language.  

## Standards for all drivers 
- Each command must have a `--help` option and output must follow docopt standard (http://docopt.org/). This is important for both being friendly to your neighbors and compatibility with tools like the Open Pipe Kit Bakery.
- Optionally prefix your package's name with `opk-cli--` so friends can find it.


## pull command
A `pull` command for getting a single reading of one or more sensors on a device.

- Issuing a pull command will print a value on a new line and then exit.
- If there are more than one sensor values returned, 


## stream command
A `stream` command for getting multipe readings of one or more sensors on a device. When a line is returned is up to the logic of the `stream` program.

- Event based sensors make sense to stream as opposed to issuing a `pull` at an arbitrary interval that may miss events.
- Stream commands do not exit after returning a value but instead keep alive.
- Every new value is delimited by a new line.


## detect command
A `detect` command to detect the Sensor IDs available on a device.


## push command
A `push` command for sending one or more sensor values to a database. Compatible with piping from both `pull` and `stream`.

- Accepts input over a `--value=<value>` option or over STDIN (`echo "42" | ./database-cli/push`).
- `push` commands exit immediately after completing execution when using the `value` parameter.
- `push` receiving input over a pipe only exit when they receive an exit code over the pipe from another command.
- Support `stream` command by looking for values on new lines.
- When the database requires a schema and at least one field name, use the `--field_name=<field_name>` option. To keep thing simple for now, we take a schemaless approach. See experimental specifications below for schema based approaches.


## install command
An `install` install command for initialization of required environment variables and downloading of dependencies.

- An install command for initialization of required environment variables and downloading of dependencies.


## onboot command
An `onboot` command for things that need to be done every time a machine boots and before the push or pull commands are used.


## Proposals :-)
- Default behavior of a `pull` or `stream` is to return all sensor values as a JSON object where the keys are the sensor IDs and the values are the current values of the corresponding sensors. ex. `{"sensorId1": 33, "sensorId2": 30}`
- Limit the returned sensors by specifying a comma seperated list of sensor IDs in a `sensor` paramets. ex `./pull --sensors="temp1,humidity1,temp2"`
- `pull` and `stream` commands always return JSON like `{"sensorId":"value"}` even if there is just one sensor.

