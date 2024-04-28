const cvc = require('../controllers/currentvalueController');


const events = (app, aWss) => {
    app.ws('/', (ws) => {
        //ws.id = Date.now(); //для приватной комнаты
        ws.on('message', (message) => {
            try{
                console.log(JSON.stringify(message));
                message = JSON.parse(message);


                switch (message.event){

                    case 'sendData':
                        cvc.create(message).then();
                        broadcastMessage(message, ws);
                        break;
                    case 'closeConnection':
                        ws.close();
                        break;
                }
            }
            catch (e) {
                console.log(e);
            }

        })
    });



    const broadcastMessage = (message) => {     //отправляем всем сообщение широковещательное
        aWss.clients.forEach(client => {
            //if(client.id === id){}        //для приватной комнаты
            message.username = 'СЕРВЕР';
            message.id = Date.now();
            message.event = Date.now();
            const _message = message.message;
            message.message = "Нахуй ты мне это прислал??  ";
            client.send(JSON.stringify(message));
        })
    }

}


module.exports = events;