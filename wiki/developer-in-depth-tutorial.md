# In Depth Tutorial of Pipes
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

When looking at the contents of that `pull` command ([see on Github here](https://github.com/openpipekit/opk-yoctopuce-temperature-cli/blob/master/pull)), you'll find it's a python script with the magic "shebang" at the top of the file to let the system know how to interpret the script when run as an executable.

```
#!/usr/bin/python
```

When making your own cli, you'll also need to make the file executable by running `chmod +x yourFile`.

The next statement is a little more complex because it requires parameters `./opk-phant-database-cli/push --url=http://data.sparkfun.com/f4jf4w4rDKh --private_key=ffDJs8efjslj --field=temperature`.  CLI's are a lot like simple functions. If the CLI follows the GNU CLI standards, you can ask the CLI what parameters it takes by using the help option.  

```
> ./opk-phant-cli/push --help
./push
  --url <url> Example: data.sparkfun.com
  --public_key <public_key> Example: RM1nQNbVRGtaMMgvVz8Y
  --private_key <private_key> Example: lz6d0j7KxPH1VVryqMw5
  --field_name <field_name> Example: temp
  --data [data] This is optional because you can also pipe data to this command.
```

What may trip you up here is that the square brackets around the `data` parameter indicates that it is an optional parameter and then explains that you can submit the data parameter to the CLI through a pipe.  By that we mean that if you send some output from one command over a pipe character like we did in the first example, this command will catch that output and use that in replace of the data parameter. The pipe character in Unix based systems (Mac OS, Linux, etc) is literally a pipe that connects commands to each other. In the pipe example above, the pull command usually outputs the current value to the screen but because there is a pipe character connecting the two, the output gets captured by the pull command. The technical terms here are that the pull command emits a string over STDOUT (standard out) and the pull command accepts that string over STDIN (standard in). A lot of commamnds out there accept data through STDIN, it's the glue that holds a lot of systems like Linux together.

> Write programs that do one thing and do it well. Write programs to work together. Write programs to handle text streams, because that is a universal interface. [[source]](https://en.wikipedia.org/wiki/Unix_philosophy#Doug_McIlroy_on_Unix_programming) 

That's from the guy who came up with the idea for the Unix pipe, Doug McIlroy. We think it's pretty rad. Especially because it allows us to write sensor and database drivers that work together while they may be written in different languages.


## Keeping the pipe running
So our first example pipes one value to a database. The following are techniques for keeping the pipe running.


### Pump the pipe with `watch`
Good ol' Unix based systems, so many handy utitities laying about. Meet `watch`, one of many ways to keep the pipe running. In the following example, we print to the screen "Hello world." every 60 seconds.

```
> watch -n60 'echo "Hello world."
```
That's cool, but let's pipe some data using watch.

```
> watch -n60 './opk-yoctopuce-temperature-cli/pull | ./opk-phant-database-cli/push --url=http://data.sparkfun.com/f4jf4w4rDKh --private_key=ffDJs8efjslj --field=temperature'
```


### Starting the pipe on boot The Super Fantastic Easy Way with Pirate.sh for Raspberry Pi
Using the [Pirate.sh](http://pirate.sh) disk image for Raspberry Pi, we're able to write out our pipe command into a file named `autorun.sh`, place that file onto a USB drive, plug it a Raspberry Pi, and it will just start running! 

1. Set up the Raspberry Pi. Download the disk image from [http://pirate.sh](http://pirate.sh) and burn that image to an SD Card (at least 4GB large). See directions for burning disk images to SD Cards [here](https://www.raspberrypi.org/documentation/installation/installing-images/).
2. Write your recipe, name it `autorun.sh`, and place that file along with dependencies on a USB Drive. 
3. Plug it all in 


## Writing or finding your Recipe

### Cooking with pre-built Recipes using Yeobot 
Looking for Pre-built recipes that use autorun.sh? Check out the [Yeobot Recipes](https://github.com/openpipekit?utf8=%E2%9C%93&query=yeobot) in the Open Pipe Kit organization. 

Have you made your own recipe? Let us know by creating a ticket in the [Open Pipe Kit issue queue](https://github.com/openpipekit/openpipekit/issues). We'll fork you into the openpipekit organization account and make you owner of that repo.  


### Finding pre-existing driver for databases and sensors
Looking to write you own Recipe but not looking to have to write both the push and the pull cli drivers?  Check out the [OPK CLI's](https://github.com/openpipekit?utf8=%E2%9C%93&query=opk-) in the Open Pipe Kit organization.  

Have you made your own cli driver? Let us know by creating a ticket in the [Open Pipe Kit issue queue](https://github.com/openpipekit/openpipekit/issues). We'll fork you into the openpipekit organization account and make you owner of that repo.  


### Handy sensors we like
Looking for sensors? [USB Sensors from Yoctopuce](https://www.yoctopuce.com/EN/products/category/usb-environmental-sensors) and the pluggable [Grove Sensors](http://www.seeedstudio.com/wiki/Grove_System#Environmental_Monitoring) for the [GrovePi board](http://www.dexterindustries.com/site/?product=grovepi-board) are super handy. 


