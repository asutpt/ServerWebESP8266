const cvc = require('../controllers/currentvalueController');
const concplant = require('../controllers/concplantController');


const events = (app, aWss) => {
    app.ws('/', (ws) => {
        //ws.id = Date.now(); //для приватной комнаты
        ws.on('message', (messageWS) => {
            try{
                messageWS = JSON.parse(messageWS);
                //console.log(messageWS.message);
                switch (messageWS.Event){
                    case 'sendData':
                        cvc.create(messageWS).then();
                        broadcastMessage(messageWS, ws);
                        break;

                    case 'check':
                        //concplant.create(messageWS, messageWS.Plant).then();
                        broadcastMessage(messageWS, ws);
                        break;
                    case 'sendDataSQL':
                        concplant.create(messageWS, messageWS.Plant).then();
                        broadcastMessage(messageWS, ws);
                        break;


                    // case 'closeConnection':
                    //     ws.close();
                    //     break;
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