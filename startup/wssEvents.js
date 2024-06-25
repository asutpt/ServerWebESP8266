const plant1 = process.env.PLANT1 || 1;
const plant2 = process.env.PLANT2 || 2;
const plant3 = process.env.PLANT3 || 3;
const plant4 = process.env.PLANT4 || 4;
const plant5 = process.env.PLANT5 || 5;
const userr = process.env.USER1 || "_Server";

const {dateNow} = require('../state/func');
const cntrl = require('../controllers/concplantController');
const model = require("../models/modelsDB");
const modelValue = require("../models/models");

const concplant = new cntrl('concplant', model.Concplant1, model.Concplant2, model.Concplant3, model.Concplant4, model.Concplant5, new modelValue.ConcplantValue());
const programs = new cntrl('programs', model.Programs1, model.Programs2, model.Programs3, model.Programs4, model.Programs5, new modelValue.ProgramsValue());
const changeMaterial = new cntrl('change_material', model.ChangeMaterial1, model.ChangeMaterial2, model.ChangeMaterial3, model.ChangeMaterial4, model.ChangeMaterial5, new modelValue.ChangeMaterialValue());
const levelMaterial = new cntrl('level_material', model.LevelMaterial1, model.LevelMaterial2, model.LevelMaterial3, model.LevelMaterial4, model.LevelMaterial5, new modelValue.LevelMaterialValue());
const logsException = new cntrl('logs_exception', model.LogsException1, model.LogsException2, model.LogsException3, model.LogsException4, model.LogsException5, new modelValue.LogsExceptionValue());
const logsMaterial = new cntrl('logs_materials', model.LogsMaterial1, model.LogsMaterial2, model.LogsMaterial3, model.LogsMaterial4, model.LogsMaterial5, new modelValue.LogsMaterialValue());
const materials = new cntrl('materials', model.Materials1, model.Materials2, model.Materials3, model.Materials4, model.Materials5, new modelValue.MaterialsValue());
const storeLevel = new cntrl('store_level', model.StoreLevel1, model.StoreLevel2, model.StoreLevel3, model.StoreLevel4, model.StoreLevel5, new modelValue.StoreLevelValue());
const requestRecept = new cntrl('request_recept', model.RequestRecept1, model.RequestRecept2, model.RequestRecept3, model.RequestRecept4, model.RequestRecept5, new modelValue.RequestReceptValue());


let count = 0;

const events = (app, aWss) => {
    try{

        let interval =  setInterval( async () => {
                count ++;
                switch (count) {
                    case 1:
                        await sendChecking(concplant);
                        break;
                    case 2:
                        await sendChecking(programs);
                        break;
                    case 3:
                        await sendChecking(changeMaterial);
                        break;
                    case 4:
                        await sendChecking(levelMaterial);
                        break;
                    case 5:
                        await sendChecking(logsException);
                        break;
                    case 6:
                        await sendChecking(logsMaterial);
                        break;
                    case 7:
                        await sendChecking(materials);
                        break;
                    case 8:
                        await sendChecking(storeLevel);
                        break;
                    case 9:
                        await sendChecking(requestRecept);
                        break;
                    case 10:
                        // await sendChecking(concplant);
                        break;
                }
                if (count >= 10) {
                    count = 0;
                }
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
                        createDB(messageWS).then();
                        break;
                }
            }
            catch (e) {
                console.log(e);
            }
        })
    });

    const sendMessage = (client, event, table, plant, username, mes) => {
        try{
            let message = {};
            message.Id = Date.now();
            message.Event = event;
            message.Table = table;
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

    const sendChecking = async (controller) => {
        try {
            let mes1 = null;
            let mes2 = null;
            let mes3 = null;
            let mes4 = null;
            let mes5 = null;

            const res1 = await controller.getLastId(plant1).then();
            const res2 = await controller.getLastId(plant2).then();
            const res3 = await controller.getLastId(plant3).then();
            const res4 = await controller.getLastId(plant4).then();
            const res5 = await controller.getLastId(plant5).then();

            const id_master1 = res1 ? res1.id_master : 0;
            const id_master2 = res2 ? res2.id_master : 0;
            const id_master3 = res3 ? res3.id_master : 0;
            const id_master4 = res4 ? res4.id_master : 0;
            const id_master5 = res5 ? res5.id_master : 0;

            if (id_master1 >= 0) {
                mes1 = [{Field: "id_master", Value: id_master1.toString()}];
                //console.log(mes1)
            }
            if (id_master2 >= 0) {
                mes2 = [{Field: "id_master", Value: id_master2.toString()}];
                //console.log(mes1)
            }
            if (id_master3 >= 0) {
                mes3 = [{Field: "id_master", Value: id_master3.toString()}];
                //console.log(mes1)
            }
            if (id_master4 >= 0) {
                mes4 = [{Field: "id_master", Value: id_master4.toString()}];
                //console.log(mes1)
            }
            if (id_master5 >= 0) {
                mes5 = [{Field: "id_master", Value: id_master5.toString()}];
                //console.log(mes1)
            }

            aWss.clients.forEach(client => {
                if (mes1) sendMessage(client, "Checking", controller.modelName, plant1, userr, mes1);
                if (mes2) sendMessage(client, "Checking", controller.modelName, plant2, userr, mes2);
                if (mes3) sendMessage(client, "Checking", controller.modelName, plant3, userr, mes3);
                if (mes4) sendMessage(client, "Checking", controller.modelName, plant4, userr, mes4);
                if (mes5) sendMessage(client, "Checking", controller.modelName, plant5, userr, mes5);

                console.log(dateNow() + ' ' + userr + ': Отправка на PLANT=' + plant1 + ' table=' + controller.modelName + ' => id_master=' + mes1[0].Value);
                console.log(dateNow() + ' ' + userr + ': Отправка на PLANT=' + plant2 + ' table=' + controller.modelName + ' => id_master=' + mes2[0].Value);
                console.log(dateNow() + ' ' + userr + ': Отправка на PLANT=' + plant3 + ' table=' + controller.modelName + ' => id_master=' + mes3[0].Value);
                console.log(dateNow() + ' ' + userr + ': Отправка на PLANT=' + plant4 + ' table=' + controller.modelName + ' => id_master=' + mes4[0].Value);
                console.log(dateNow() + ' ' + userr + ': Отправка на PLANT=' + plant5 + ' table=' + controller.modelName + ' => id_master=' + mes5[0].Value);
            })
        }
        catch (e){
            console.log(e)
        }
    }

    const createDB = async (messageWS) => {
        try{
            switch (messageWS.Table){
                case "concplant":
                    concplant.create(messageWS).then();
                    break;
                case "programs":
                    programs.create(messageWS).then();
                    break;
                case "change_material":
                    changeMaterial.create(messageWS).then();
                    break;
                case "level_material":
                    levelMaterial.create(messageWS).then();
                    break;
                case "logs_exception":
                    logsException.create(messageWS).then();
                    break;
                case "logs_materials":
                    logsMaterial.create(messageWS).then();
                    break;
                case "materials":
                    materials.create(messageWS).then();
                    break;
                case "store_level":
                    storeLevel.create(messageWS).then();
                    break;
                case "request_recept":
                    requestRecept.create(messageWS).then();
                    break;
            }
        }
        catch (e){
            console.log(e)
        }
    }

}


module.exports = events;