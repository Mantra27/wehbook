const app = require('express')();
const port = 9090;
var events = require('events');
var _trigger = new events.EventEmitter();
const fs = require('fs');
let meta = [];

_trigger.on('request', async (e)=>{
    console.log(`someone executed ${e} over the internet`)
})

app.get('/', async (req, res, next) => {
    res.sendFile(`${__dirname}/trigger.html`);
})

app.get('/array', async(req, res, next)=>{
  return res.send(meta)
})
//.get('/trigger') is used to trigger the event from the 
app.get('/trigger', async (req, res, next) => {
    console.log(meta)
    console.log(req.query.id || "internal err: no wehbook variable name")
    if(req.query.id){
        res.send(`<!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>gunner</title>
        </head>
        <body>
            <center><h1>Did you see that coming?</h1>
                <p>
                <h5>rage event for ${req.query.id} must be trigged on the client</h5>
            </center>
        </body>
        </html>`)
    }

        meta[meta.length - 1] = req.query.id;
        /* stores variable names to meta array, meta array is the array of variable
        which will be executed when listener calls it, and last element will rmeoved afterwards */
})

    app.get('/rage', async (req, res, next) => {
        for(index in meta){

            if(meta[index] == req.query.id){
                
                _trigger.emit('request', `req.id is ${req.query.id} and meta array is ${meta}`)

                setTimeout(()=>{
                    meta[index] = '';
                }, 250)

                return res.send('ok')
            }

        }

        return res.send(req.query.id);
    })

        app.get('/*', async (req, res, next) => {
            console.log('anything trigger');
            res.redirect('/')
        })

app.listen(port, ()=>{
    console.log(`listening to the port ${port}`)
})
