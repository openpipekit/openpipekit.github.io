! This doc is under construction. Not done yet but it will be soon :-) !

# Open Pipe Kit for Developers

Howdy dev. Welcome to the Open Pipe Kit project. We've been doing weekly online hangouts sharing ideas and insights we've had around pulling data from sensors and pushing data to databases. In the process we've come up with a couple of ideas we think are going to make all of our lives easier. We're interested in your thoughts so please do chime in on our issue queue. 


## The magic sauce that binds us all together

We started out on this journey thinking about how we could make our code that pulls from sensors and pushes to databases reusable between projects and shareable between developers. It was too much to ask everyone to use the same language and environment so instead of making a framework that has plugins, we've settled on building Command Line Interface (cli) libraries that work with each other no matter what language we write them in. You may not have built a CLI before, but fret not, you already know 95% of what you need to know to build one. Let's fill in that gap with some examples.

Let's start with the example of pulling data from a USB Temperature sensor and pushing that data to a Phant database.  

```
> ./opk-yoctopuce-temperature-cli/pull | ./opk-phant-database-cli/push --url=http://data.sparkfun.com/f4jf4w4rDKh --private_key=ffDJs8efjslj --field=temperature
Sent 45.6 to  http://data.sparkfun.com/f4jf4w4rDKh
```
This is a statement that has two commands, on the left of the pipe character we have a command that pulls data from a sensor and on the right we have a push command that pushes to a database the data it receives from the output of the pull.

The first statement, the pull command, is `./opk-yoctopuce-temperature-cli/pull`. This assumes there is a folder in your current directory called `opk-yoctopuce-temperature-cli` and inside of that directory there is an exectable file named `pull`.  Because it is an executable on the command line, it could be in any language, yet all we need to know is that if we run the command, we get some output.
```
> ./opk-yoctopuce-temperature-cli/pull
45.6
```

When looking at the contents of that `pull` command ([see on Github here](https://github.com/openpipekit/opk-yoctopuce-temperature-cli/blob/master/pull)), you'll find it's a python script with the magic shebang at the top of the file to let the system know how to interpret the script when run as an executable.

```
#!/usr/bin/python
```

When making your own cli, you'll also need to make the file executable by running `chmod +x yourFile`.   


The next statement is a little more complex because it requires parameters `./opk-phant-database-cli/push --url=http://data.sparkfun.com/f4jf4w4rDKh --private_key=ffDJs8efjslj --field=temperature`.  CLI's are a lot like simple functions. If the CLI follows the GNU CLI standards, you can ask the CLI what parameters it takes.  

```
> ./opk-phant-cli/push --help
./push
  --url <url> Example: data.sparkfun.com
  --public_key <public_key> Example: RM1nQNbVRGtaMMgvVz8Y
  --private_key <private_key> Example: lz6d0j7KxPH1VVryqMw5
  --field_name <field_name> Example: temp
  --data [data] This is optional because you can also pipe data to this command.
```

What may trip you up here is that the square brackets around the `data` parameter tells us that you can submit the data parameter to the CLI through a pipe.  By that we mean that if you send some output from one command over a pipe character, this command will catch that output and place it in the data parameter. In the pipe example above, the pull command usually outputs the current value to the screen but because there is a pipe character in front of that, it gets captured by the pull command. The technical terms here are that the pull command emits a string over STDOUT (standard out) and the pull command accepts that string over STDIN (standard in). A lot of commamnds out there accept data through STDIN, it's how much of UNIX based systems work. 

> Write programs that do one thing and one thing well

That's from the guy who came up with the idea for the Unix pipe. We think it's pretty rad, especially for piping data from one place to another!  

## Keeping it running


## Getting it to start on boot the SUPER EASY WAY



## Structured data

```
> ./opk-yoctopuce-temperature-cli/pull --output_format=csv --field=temperature | ./opk-csv-cli/push --input_format=csv --file=./output.csv
```
