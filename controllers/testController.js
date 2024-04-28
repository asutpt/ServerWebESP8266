const {CurrentValue} = require("../models/models");


class TEstController {
    async create(message, res, next) {
        try {
            const name = message.type;
            const value = message.message;
            //console.log(name,value);
            const cv = await CurrentValue.create({name, value});
            //return res.json(cv);
        } catch (e) {
            //next(ApiError.badRequest(e.message));
            console.log(e);
        }
    }

    async getAll(req, res, next) {
        try {
            const cv = await CurrentValue.findAll();
            return res.json(cv);
        } catch (e) {
            //next(ApiError.badRequest(e.message));
        }
    }
}
module.exports = new CurrentValueController()