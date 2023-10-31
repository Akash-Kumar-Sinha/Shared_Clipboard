const express = require('express')
const bodyParser = require('body-parser');
const cron = require('node-cron')
const cors = require('cors');

const app = express();

const port = 3000;

const database = require('knex')({
    client: 'pg',
    connection: {
      host : '127.0.0.1',
      port : 5432,
      user : 'akashmessage',
      password : 'aks',
      database : 'storemessage'
    }
  });

app.use(bodyParser.json());
app.use(cors());

const pinGenerator = () => {
    return Math.floor(1000 + Math.random() * 9000);
}

const myAsyncDeleteFunction = (pinToDelete) => {
    setTimeout(() => {
        console.log('Hello');
        database('data')
        .where({ pin: pinToDelete })
        .del()
        .then((rowCount) => {
            if (rowCount > 0) {
                console.log(`Deleted data with pin ${pinToDelete}`);
            } else {
                console.log(`No data found with pin ${pinToDelete}`);
            }
        })
        .catch((err) => {
            console.error('Error deleting data:', err);
        });
    }, 30000);
}

app.post('/write', (req,res) => {

    const message = req.body.message;

    if (!message) {
        return res.status(400).json({ error: 'Write a message to send' });
    }

    const pin = pinGenerator();
    database('data').insert({
        pin: pin,
        message: message,
    }).then(()=>{
        cron.schedule('* * * * *', () => {
            myAsyncDeleteFunction(pin);
          });
       return res.status(200).json({
        pin: pin,
        sendMessage: 'Sucessfully send',
    })
    }).catch((err)=>{
        return res.status(404).json({err: err,
            pin: '',
            sendMessage: `${err}, Try again`})
    })
})

app.put('/read', (req,res)=>{

    if (!req.body.pin) {
        return res.status(400).json({ error: 'Missing PIN' });
    }
    
    database.select('pin').from('data')
    .where('pin', '=', req.body.pin)
    .then(details => {
        return database('*').from('data')
        .where('pin', '=', req.body.pin)
            .then(details =>{
                if (details.length === 0) {
                    return res.status(404).json({ error: 'Data not found' });
                }else{
                    return res.status(200).json(details[0])
                }
            }).catch((err)=>{
                return res.status(404).json(err, '1')
            })
    }).catch((err)=>{
        return res.status(404).json(err, '2')
    })
})

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`)
})