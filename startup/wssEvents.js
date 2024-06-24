const concplant = require('../controllers/concplantController');
const {dateNow} = require('../state/func')
const plant1 = process.env.PLANT1 || 1;
const plant2 = process.env.PLANT2 || 2;
const plant3 = process.env.PLANT3 || 3;
const plant4 = process.env.PLANT4 || 4;
const plant5 = process.env.PLANT5 || 5;
const userr = process.env.USER1 || "_Server";


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
        ws.on('message', (messageWS) => {
            try{
                messageWS = JSON.parse(messageWS);
                switch (messageWS.Event){
                    case 'sendDataSQL':
                        concplant.create(messageWS, messageWS.Plant).then();
                        break;
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
        let mes3 = null;
        let mes4 = null;
        let mes5 = null;

        const res1 = await concplant.getLastId(plant1).then();
        const res2 = await concplant.getLastId(plant2).then();
        const res3 = await concplant.getLastId(plant3).then();
        const res4 = await concplant.getLastId(plant4).then();
        const res5 = await concplant.getLastId(plant5).then();

        const id_master1 = res1 ? res1.id_master : 0;
        const id_master2 = res2 ? res2.id_master : 0;
        const id_master3 = res3 ? res3.id_master : 0;
        const id_master4 = res4 ? res4.id_master : 0;
        const id_master5 = res5 ? res5.id_master : 0;

        if(id_master1 >= 0) {
            mes1 = [{Field: "id_master", Value: id_master1.toString()}];
            //console.log(mes1)
        }
        if(id_master2 >= 0) {
            mes2 = [{Field: "id_master", Value: id_master2.toString()}];
            //console.log(mes1)
        }
        if(id_master3 >= 0) {
            mes3 = [{Field: "id_master", Value: id_master3.toString()}];
            //console.log(mes1)
        }
        if(id_master4 >= 0) {
            mes4 = [{Field: "id_master", Value: id_master4.toString()}];
            //console.log(mes1)
        }
        if(id_master5 >= 0) {
            mes5 = [{Field: "id_master", Value: id_master5.toString()}];
            //console.log(mes1)
        }

        aWss.clients.forEach(client => {
            if(mes1) sendMessage(client, "Checking", plant1, userr, mes1);
            if(mes2) sendMessage(client, "Checking", plant2, userr, mes2);
            if(mes3) sendMessage(client, "Checking", plant3, userr, mes3);
            if(mes4) sendMessage(client, "Checking", plant4, userr, mes4);
            if(mes5) sendMessage(client, "Checking", plant5, userr, mes5);

            console.log(dateNow() + ' ' + userr + ': Отправка на PLANT=' + plant1 + ' => id_master=' + mes1[0].Value);
            console.log(dateNow() + ' ' + userr + ': Отправка на PLANT=' + plant2 + ' => id_master=' + mes2[0].Value);
            console.log(dateNow() + ' ' + userr + ': Отправка на PLANT=' + plant3 + ' => id_master=' + mes3[0].Value);
            console.log(dateNow() + ' ' + userr + ': Отправка на PLANT=' + plant4 + ' => id_master=' + mes4[0].Value);
            console.log(dateNow() + ' ' + userr + ': Отправка на PLANT=' + plant5 + ' => id_master=' + mes5[0].Value);
        })
    }

}


module.exports = events;