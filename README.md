# free2o

Convert the output of the linux/unix **free command** to a javascript object.

```
$ npm install free2o 
```

```js
const { spawn } = require('child_process');
const free2o = require('free2o');

const free = spawn('free', ['-htw']);

let data = '';

free.stdout.on('data', chunk => {
  data = data.concat(chunk);
});

free.stdout.on('end', () => {
  console.log(data);
  console.log(free2o(data));
});

```
**free command output**
![free command output](https://www.dev.adel-mahjoub.fr/images/freestdout.png "free command output")

**free2o object**

![free2o object](https://www.dev.adel-mahjoub.fr/images/free2o.png "free2o object")

**compatible options**

* -b
* -k
* -m
* -g
* --tera
* -h
* -si
* -l
* -t
* -w