# Open Pipe Kit Reference

The example above of one sensor piping one value to a database may be too simple for your application. Below are some other examples that you may run into. Note that much of this is inpsired by the Unix Pipeline which you can read up on [here](https://en.wikipedia.org/wiki/Pipeline_(Unix)).  

## Structured data
```
> ./opk-yoctopuce-temperature-cli/pull --output_format=csv --field=temperature | ./opk-csv-cli/push --input_format=csv --file=./output.csv
```

## Multi-value pull


## Multi-input pipes
Use a [named pipe](https://en.wikipedia.org/wiki/Named_pipe).


## Event oriented pipes, listen to streams
Some use cases are not as simple as an interval, they are event oriented and in which case a stream is needed. For example, if you are looking to record when motion is detected on a stair case, pulling the current reading from a sensor every 60 seconds will miss the detection of motion that may 15 seconds in the future.
