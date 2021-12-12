const fetch = require('node-fetch');
let huehue;

class Wehbook{
    constructor(task, input){
        this.task = task;
        this.input = input;
    };

    on(sol, funk){
       let check = sol;
       console.log(`- Listening to variable ${sol}`, `listening to https://wehbook.mantragohil.repl.co/trigger?id=${sol}`)
    let phase = 0;

       let clock = (e)=>{
           setInterval(()=>{
            phase = e + 10;
            e = phase;
           }, 100)
       }
       
            setInterval(async ()=>{
                
                const response = await fetch(`https://wehbook.mantragohil.repl.co/rage?id=${check}`);
                const body = await response.text();
                await clock(0);
                    if(body == 'ok'){
                        await funk({body:body, time: new Date(), latency: phase});
                    }
                    else{

                    }

            }, 500)

    }
   
}

module.exports = {
    Wehbook,
}
