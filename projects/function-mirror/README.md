# Function Mirror

Function Mirror is a project I made at [Hacksoton 2017](http://hacksoton.com/) to create
custom live webcam effects. Try it here.

## Running

Due to web limitations, if you want to experiment with the code behind it you need
to run the web server which can be done by typing the following command:

```
bash start_webserver.sh
```

And to run the sass and jade, you need to type the two following commands in separate windows.

```

bash comp-sass.sh
bash comp-jade.sh

```

## An Explanation

Basically, it goes through every rgb value and applies the function to it, where x
is the value. For example, if the rgb value is `180` and we apply `x/3`, we get `60`.
