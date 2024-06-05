const {Concplant1} = require("../models/modelsDB");
const {Concplant2} = require("../models/modelsDB");
const {Concplant3} = require("../models/modelsDB");
const {Concplant4} = require("../models/modelsDB");
const {Concplant5} = require("../models/modelsDB");
const {ConcplantValue} = require("../models/models");


class ConcplantController {
    async create(messageWs, plant, res, next) {
        try {
            if(!messageWs)
                return;
            const cv = new ConcplantValue();
            switch (plant){
                case "1":
                    await Concplant1.create(cv.setParam(messageWs.Message));
                    break;
                case "2":
                    await Concplant2.create(cv.setParam(messageWs.Message));
                    break;
                case 3:
                    await Concplant3.create(cv.setParam(messageWs.Message));
                    break;
                case 4:
                    await Concplant4.create(cv.setParam(messageWs.Message));
                    break;
                case 5:
                    await Concplant5.create(cv.setParam(messageWs.Message));
                    break;
            }
            //console.log();
        } catch (e) {
            //next(ApiError.badRequest(e.message));
            console.log(e);
        }
    }

    async getAll(req, res, next) {
        try {
            const cv = await Concplant.findAll();
            return res.json(cv);
        } catch (e) {
            //next(ApiError.badRequest(e.message));
        }
    }
}
module.exports = new ConcplantController()