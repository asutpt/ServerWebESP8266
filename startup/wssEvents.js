const concplant = require('../controllers/concplantController');
const plant1 = process.env.PLANT1 || 1;
const plant2 = process.env.PLANT2 || 2;
const plant3 = process.env.PLANT3 || 3;
const plant4 = process.env.PLANT4 || 4;
const plant5 = process.env.PLANT5 || 5;
const username = process.env.USERNAME || "Server";

const events = (app, aWss) => {
    try{
        let interval =  setInterval( async () => {
                await sendChecking();
            }
            , 500);
    }
    catch (e){
        console.log(e);
    }


    app.ws('/', (ws) => {
        //ws.id = Date.now(); //для приватной комнаты
        ws.on('message', (messageWS) => {
            try{
                messageWS = JSON.parse(messageWS);
                //console.log(messageWS.message);
                switch (messageWS.Event){
                    case 'sendDataSQL':
                        concplant.create(messageWS, messageWS.Plant).then();
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

    const sendMessage = (client, event, plant, username, mes) => {
        try{
            let message = {};
            message.Id = Date.now();
            message.Event = event;
            message.Username = username;
            message.Plant = plant;
            message.Message = mes;
            const jsonMes = JSON.stringify(message);
            client.send(jsonMes);
            //console.log(jsonMes);
        }
        catch (e) {
            console.log(e);
        }
    }

    const sendChecking = async () => {
        let mes1 = null;
        let mes2 = null;
        let mes3= null;
        let mes4 = null;
        let mes5 = null;

        const res1 = await concplant.getLastId(plant1).then();
        const id_master1 = res1 ? res1.id_master : 0;
        if(id_master1 >= 0) {
            mes1 = [{Field: "id_master", Value: id_master1}];
            //console.log(mes1)
        }

        aWss.clients.forEach(client => {
            if(mes1) sendMessage(client, "Checking", plant1, username, mes1);
        })
    }

    const broadcastMessage = (mes, event) => {     //отправляем всем сообщение широковещательное
        aWss.clients.forEach(client => {
            //if(client.id === id){}        //для приватной комнаты
            let message = {};
            message.Id = Date.now();
            message.Event = event;
            message.Username = 'Server';
            message.Plant = 0;
            message.Message = mes;

            client.send(JSON.stringify(message));
            console.log(aWss.clients.size)
        })
    }

}




module.exports = events;