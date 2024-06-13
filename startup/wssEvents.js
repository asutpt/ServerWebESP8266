const cvc = require('../controllers/currentvalueController');
const concplant = require('../controllers/concplantController');

let count = 0;

const events = (app, aWss) => {
    let interval = setInterval( () => {
            // if(count < 10) {
            //
            //     console.log(count  + "  =>>  SendBroadCast!");
            // }
             count = count + 1;
            console.log(count);
            broadcastMessage({Field: "id_master", Value: count}, "Checking");
        }
        , 50);
    app.ws('/', (ws) => {
        console.log("3rf3f ");

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
                        console.log(messageWS);
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





    const broadcastMessage = (mes, event) => {     //отправляем всем сообщение широковещательное
        //console.log(aWss.clients);
        aWss.clients.forEach(client => {
            //if(client.id === id){}        //для приватной комнаты
            let message = {};
            message.Id = Date.now();
            message.Event = event;
            message.Username = 'Server';
            message.Plant = 0;
            message.Message = mes;

            client.send(JSON.stringify(message));
        })
    }

}




module.exports = events;