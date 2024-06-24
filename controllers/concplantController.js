const {Concplant1} = require("../models/modelsDB");
const {Concplant2} = require("../models/modelsDB");
const {Concplant3} = require("../models/modelsDB");
const {Concplant4} = require("../models/modelsDB");
const {Concplant5} = require("../models/modelsDB");
const {ConcplantValue} = require("../models/models");


class ConcplantController {
    async create(messageWs, res, next) {
        try {
            if(!messageWs)
                return;
            const cv = new ConcplantValue();
            switch (messageWs.Plant) {
                case "1":
                    if (await this.checkIsNotExist(messageWs.Message, Concplant1)) {
                        await Concplant1.create(cv.setParam(messageWs.Message));
                    } else console.log('Строка с id_master уже есть, Plant=' + messageWs.Plant);
                    break;
                case "2":
                    if (await this.checkIsNotExist(messageWs.Message, Concplant2)) {
                        await Concplant2.create(cv.setParam(messageWs.Message));
                    } else console.log('Строка с id_master уже есть, Plant=' + messageWs.Plant);
                    break;
                case 3:
                    if (await this.checkIsNotExist(messageWs.Message, Concplant3)) {
                        await Concplant3.create(cv.setParam(messageWs.Message));
                    } else console.log('Строка с id_master уже есть, Plant=' + messageWs.Plant);
                    break;
                case 4:
                    if (await this.checkIsNotExist(messageWs.Message, Concplant4)) {
                        await Concplant4.create(cv.setParam(messageWs.Message));
                    } else console.log('Строка с id_master уже есть, Plant=' + messageWs.Plant);
                    break;
                case 5:
                    if (await this.checkIsNotExist(messageWs.Message, Concplant5)) {
                        await Concplant5.create(cv.setParam(messageWs.Message));
                    } else console.log('Строка с id_master уже есть, Plant=' + messageWs.Plant);
                    break;
            }
            //console.log();
        } catch (e) {
            //next(ApiError.badRequest(e.message));
            console.log(e);
        }
    }

    async getLastId(plant, next) {
        try {
            switch (plant){
                case "1":
                    return await Concplant1.findOne({
                        attributes: ['id_master'],
                        order: [['id_master', 'DESC']],
                    });
                case "2":
                    return await Concplant2.findOne({
                        attributes: ['id_master'],
                        order: [['id_master', 'DESC']],
                    });
                case "3":
                    return await Concplant3.findOne({
                        attributes: ['id_master'],
                        order: [['id_master', 'DESC']],
                    });
                case "4":
                    return await Concplant4.findOne({
                        attributes: ['id_master'],
                        order: [['id_master', 'DESC']],
                    });
                case "5":
                    return await Concplant5.findOne({
                        attributes: ['id_master'],
                        order: [['id_master', 'DESC']],
                    });
            }
        } catch (e) {
            console.log(e);
            //next(ApiError.badRequest(e.message));
        }
    }

    async checkIsNotExist(message, concplant){
        try {
           for (const f of message) {
                if (f.Field === 'id_master') {
                    const res = await concplant.findOne({
                        attributes: ['id_master'],
                        where: {'id_master': f.Value},
                    });
                   return !res;
                }
            }
            return false;
        } catch (e) {
            console.log(e);
            //next(ApiError.badRequest(e.message));
        }
    }


}
module.exports = new ConcplantController()