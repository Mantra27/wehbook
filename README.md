# wehbook
## I didn't spell it wrong;


>listener code(client):

```javascript
const { Wehbook } = require('./npm')
const hook = new Wehbook();

//rage = type of webhook, 844920 = wehbook id;
hook.on('rage', 844920).then(()=>{
    console.log('event triggered');
})  
```

>``'rage'`` event stands for standard webhook service (no extra input from trigger URL);
meanwhile im working on ``node`` event, in which wehbook you can also send text nodes from trigger-client to listener client.

Here's the URL to trigger specific webhook via unique ``id`` (you have to put it into listener code replacing ``844920`` in example code)
URL to trigger wehbook;
```
https://wehbook.mantragohil.repl.co/trigger?id=844920
```
Just make your new id and replace in example code and trigger url and you're good to go.

here's the landing page that makes no sense for this repo :)

[LANDING PAGE](https://wehbook.mantragohil.repl.co/)

[Pre](https://github.com/Mantra27/wehbook/blob/main/.assets/.img/Screenshot%202021-12-10%20at%2011.53.42%20PM.png?raw=true)
