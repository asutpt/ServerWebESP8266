const {logMessage} = require("../state/func");
const {Sequelize} = require("sequelize");


class ConcplantController {
    constructor(modelName, table1, table2, table3, table4, table5, tv) {
        this.modelName = modelName;
        this.table1 = table1;
        this.table2 = table2;
        this.table3 = table3;
        this.table4 = table4;
        this.table5 = table5;
        this.tv = tv;
    }

    async create(messageWs, res, next) {
        try {
            if(!messageWs)
                return;
            switch (messageWs.Plant) {
                case "1":
                    if (await this.checkIsNotExist(messageWs.Message, this.table1)) {
                        const res = await this.table1.create(this.tv.setParam(messageWs.Message));
                        if(res) return 'Данные добавлены!';
                        else return 'Ошибка добавления данных!';
                    } else return 'Строка с id_master уже есть';
                case "2":
                    if (await this.checkIsNotExist(messageWs.Message, this.table2)) {
                        const res = await this.table2.create(this.tv.setParam(messageWs.Message));
                        if(res) return 'Данные добавлены!';
                        else return 'Ошибка добавления данных!';
                    } else return 'Строка с id_master уже есть';
                    break;
                case "3":
                    if (await this.checkIsNotExist(messageWs.Message, this.table3)) {
                        const res = await this.table3.create(this.tv.setParam(messageWs.Message));
                        if(res) return 'Данные добавлены!';
                        else return 'Ошибка добавления данных!';
                    } else return 'Строка с id_master уже есть';
                    break;
                case "4":
                    if (await this.checkIsNotExist(messageWs.Message, this.table4)) {
                        const res = await this.table4.create(this.tv.setParam(messageWs.Message));
                        if(res) return 'Данные добавлены!';
                        else return 'Ошибка добавления данных!';
                    } else return 'Строка с id_master уже есть';
                    break;
                case "5":
                    if (await this.checkIsNotExist(messageWs.Message, this.table5)) {
                        const res = await this.table5.create(this.tv.setParam(messageWs.Message));
                        if(res) return 'Данные добавлены!';
                        else return 'Ошибка добавления данных!';
                    } else return 'Строка с id_master уже есть';
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
                    return await this.table1.findOne({
                        attributes: ['id_master'],
                        order: [['id_master', 'DESC']],
                    });
                case "2":
                    return await this.table2.findOne({
                        attributes: ['id_master'],
                        order: [['id_master', 'DESC']],
                    });
                case "3":
                    return await this.table3.findOne({
                        attributes: ['id_master'],
                        order: [['id_master', 'DESC']],
                    });
                case "4":
                    return await this.table4.findOne({
                        attributes: ['id_master'],
                        order: [['id_master', 'DESC']],
                    });
                case "5":
                    return await this.table5.findOne({
                        attributes: ['id_master'],
                        order: [['id_master', 'DESC']],
                    });
            }
        } catch (e) {
            console.log(e);
            //next(ApiError.badRequest(e.message));
        }
    }

    async checkIsNotExist(message, table){
        try {
            for (const f of message) {
                if (f.Field === 'id_master') {
                    const res = await table.findOne({
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


module.exports = ConcplantController