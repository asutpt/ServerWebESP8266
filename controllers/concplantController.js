

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
                        await this.table1.create(this.tv.setParam(messageWs.Message));
                    } else console.log('Строка с id_master уже есть, Table=' + this.table1.tableName + ', Plant=' + messageWs.Plant);
                    break;
                case "2":
                    if (await this.checkIsNotExist(messageWs.Message, this.table2)) {
                        await this.table2.create(this.tv.setParam(messageWs.Message));
                    } else console.log('Строка с id_master уже есть, Table=' + this.table2.tableName + ',  Plant=' + messageWs.Plant);
                    break;
                case 3:
                    if (await this.checkIsNotExist(messageWs.Message, this.table3)) {
                        await this.table3.create(this.tv.setParam(messageWs.Message));
                    } else console.log('Строка с id_master уже есть, Table=' + this.table3.tableName + ',  Plant=' + messageWs.Plant);
                    break;
                case 4:
                    if (await this.checkIsNotExist(messageWs.Message, this.table4)) {
                        await this.table4.create(this.tv.setParam(messageWs.Message));
                    } else console.log('Строка с id_master уже есть, Table=' + this.table4.tableName + ',  Plant=' + messageWs.Plant);
                    break;
                case 5:
                    if (await this.checkIsNotExist(messageWs.Message, this.table5)) {
                        await this.table5.create(this.tv.setParam(messageWs.Message));
                    } else console.log('Строка с id_master уже есть, Table=' + this.table5.tableName + ', Plant=' + messageWs.Plant);
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