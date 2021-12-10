const { Wehbook } = require('./npm')
const hook = new Wehbook();

hook.on('rage', 420).then((e)=>{
    console.log('this wehbook got triggered');
})  
