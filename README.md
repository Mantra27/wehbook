# wehbook
>i didn't spell it wrong;
Client node.js code to listen to wehbook requests.

```javascript
const { Wehbook } = require('./npm')
const hook = new Wehbook();

hook.on('rage', 844920).then(()=>{
    console.log('event triggered');
})  
```

>``'rage'`` event stands for standard webhook service (no extra input from trigger URL);
meanwhile im working on ``node`` event, in which wehbook you can also send text nodes from trigger-client to listener client.

Here's the URL to trigger specific webhook via unique ``id`` (you have to put it into listener code replacing ``844920`` in example code)
URL to trigger wehbook;
```
https://wehbook.mantragohil.repl.co
```

