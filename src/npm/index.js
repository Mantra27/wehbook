const fetch = require('node-fetch');
let huehue;

class Wehbook{
    constructor(task, input){
        this.task = task;
        this.input = input;
    };

    on(work, sol){
       let check = sol;
       console.log(`- Listening to variable ${sol} using method ${work}.`)

    const promise1 = new Promise(async (resolve, reject)=>{

       setInterval(async ()=>{

        const response = await fetch(`https://wehbook.mantragohil.repl.co/rage?usr=${check}`);
        const body = await response.text();

            if(body == 'ok'){
                resolve({time: new Date(), status: 'ok'});
            }

       }, 500)

    });

       return promise1;
    }
}

module.exports = {
    Wehbook,
}
