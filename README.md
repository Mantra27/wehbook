# wehbook
>i didn't spell it wrong;
Client node.js code to listen to wehbook requests.

```
const { Wehbook } = require('./npm')
const hook = new Wehbook();

hook.on('rage', 'mantra').then((e)=>{
    console.log(e);
    console.log('hi');
})  
```
``rage`` event stands for standard webhook service (no extra input from trigger URL);
meanwhile im working on ``node`` event, in which wehbook you can also send text nodes from trigger-client to listener client.
