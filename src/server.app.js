const app = require('express')();
const port = 6969;
var events = require('events');
var _trigger = new events.EventEmitter();
const fs = require('fs');
let meta = [];

_trigger.on('request', async (e)=>{
    console.log('hi')
})

app.get('/', async (req, res, next) => {
    res.send('welcome the this server');
})

//.get('/trigger') is used to trigger the event from the 
app.get('/trigger', async (req, res, next) => {
    console.log(req.query.usr ?? "internal err: no wehbook variable name")
    if(req.query.usr){
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
                <h5>rage event is trigged on client</h5>
            </center>
        </body>
        </html>`)
    }

        meta[meta.length - 1] = req.query.usr;
})

    app.get('/rage', async (req, res, next) => {
        for(index in meta){

            if(meta[index] == req.query.usr){
                console.log(`wehbook got triggered at index ${index}`);

                setTimeout(()=>{
                    meta[index] = '';
                }, 250)

                return res.send('ok')
            }

        }

        return res.send(req.query.usr);
    })

        app.get('/*', async (req, res, next) => {
            console.log('user redirected');
            res.redirect('/')
        })

app.listen(port, ()=>{
    console.log(`listening to the port ${port}`)
})
