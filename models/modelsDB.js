const mysql = require('../startup/db');
const mysqlMulin = require('../startup/dbMulin');

const {DataTypes} = require('sequelize');

const CurrentValue = mysql.define('currentvalue', {       //инициализация
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    value: {type: DataTypes.FLOAT},
    name: {type: DataTypes.STRING},
})

const Concplant1 = mysqlMulin.define('concplant_1', {       //инициализация
    id: {type: DataTypes.BIGINT, primaryKey: true, autoIncrement: true},
    id_master: {type: DataTypes.BIGINT, allowNull: false},
    sand_netto: {type: DataTypes.FLOAT},
    sand_set: {type: DataTypes.FLOAT},
    rub_netto: {type: DataTypes.FLOAT},
    rub_set: {type: DataTypes.FLOAT},
    keram_netto: {type: DataTypes.FLOAT},
    keram_set: {type: DataTypes.FLOAT},
    null_netto: {type: DataTypes.FLOAT},
    null_set: {type: DataTypes.FLOAT},
    cem1_netto: {type: DataTypes.FLOAT},
    cem1_set: {type: DataTypes.FLOAT},
    cem2_netto: {type: DataTypes.FLOAT},
    cem2_set: {type: DataTypes.FLOAT},
    cem3_netto: {type: DataTypes.FLOAT},
    cem3_set: {type: DataTypes.FLOAT},
    wat1_netto: {type: DataTypes.FLOAT},
    wat1_set: {type: DataTypes.FLOAT},
    wat2_netto: {type: DataTypes.FLOAT},
    wat2_set: {type: DataTypes.FLOAT},
    chem1_netto: {type: DataTypes.FLOAT},
    chem1_set: {type: DataTypes.FLOAT},
    chem2_netto: {type: DataTypes.FLOAT},
    chem2_set: {type: DataTypes.FLOAT},
    chem3_netto: {type: DataTypes.FLOAT},
    chem3_set: {type: DataTypes.FLOAT},
    mix_current: {type: DataTypes.FLOAT},
    cur_count: {type: DataTypes.INTEGER},
    all_count: {type: DataTypes.INTEGER},
    id_prog: {type: DataTypes.BIGINT},
    change_bunk_id: {type: DataTypes.BIGINT},

},
    {freezeTableName: true})






module.exports = {
    CurrentValue,
    Concplant1,

}