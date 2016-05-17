# Getting started with making pipes on the command line 

## What is an Open Pipe Kit driver?
![OPK CLI Driver example](images/opk-cli-example.png)

Open Pipe Kit collects data using interchangeable drivers for sensors and databases. You can write your own driver in any language you want because every driver is a command line inerface (CLI). How do you turn your program into a CLI? Two things. You add `#!/bin/env yourLanguage` to the top of the file and then on the command line you run `chmod +x your-file`. Now you can execute it from the command line by type `./you-file`. We've come up with a couple of conventions along the way as we've been creating our own CLI. First you'll notice is that if you are writing a sensor CLI, we name our file `pull`. If we are writing a database CLI, we name our file `push`. To send the output of a pull to a push, you just have to place the Unix pipe character between the two commands. For example, `./pull | ./push`. Push drivers often require to know where to push data to, like the URL of a database. For that we use parameters like `./pull | ./push --url=http://mydatabase.net`. If you haven't written a program before that takes the input of CLI parameters, don't fret. There are plenty of good libraries for making that easy in every language.  


