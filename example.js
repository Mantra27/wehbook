const { Wehbook } = require('wehbook')
const hook = new Wehbook();

//844920 = wehbook id (you can use unique one to avoid collisions);
hook.on(844920, async (e)=>{
    console.log("Event Triggered", e);
})
