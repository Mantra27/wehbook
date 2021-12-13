# wehbook
## I didn't spell it wrong;

![](https://img.shields.io/github/size/Mantra27/wehbook/src/npm/npm.js)
![](https://img.shields.io/github/license/mantra27/wehbook)
![](https://img.shields.io/npm/v/wehbook)
![](https://img.shields.io/github/commit-activity/y/Mantra27/wehbook)

>Listener code (client)

```javascript
const { Wehbook } = require('wehbook')
const hook = new Wehbook();

//844920 = wehbook id (you can use unique one to avoid collisions);
hook.on(844920, async (e)=>{
    console.log("Event Triggered", e);
})
```

>``hook.on()`` have 2 arguments, 1st is for wehbook id(which is 844920 in this case) and 2nd one is callback function that you want to be executed when wehbook is triggered.

Here's the URL to trigger specific webhook via unique ``id`` (you have to put it into listener code replacing ``844920`` in example code)
URL to trigger wehbook;
```
https://wehbook.mantragohil.repl.co/trigger?id=844920
```
In case if you also want to send text node with the trigger webhook, you can do that with this pkg.
You just have to add extra ``&text=<message>`` argument in the trigger URL, and it would look like this: 

```
https://wehbook.mantragohil.repl.co/trigger?id=844920&text=hola
```
If you havent added ``&text=`` argument in the trigger url, server will return default text message to the listener code (npm pkg).


Just make your new id (or text message) and replace it in example code and trigger url and you're good to go.

here's the landing page that makes no sense for this repo :)
i didn't spell this pkg worng btw :) (this either)

