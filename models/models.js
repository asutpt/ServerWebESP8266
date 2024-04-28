const mysql = require('../startup/db');
const {DataTypes} = require('sequelize');

const CurrentValue = mysql.define('currentvalue', {       //инициализация
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    value: {type: DataTypes.FLOAT},
    name: {type: DataTypes.STRING},
})

//
// const Basket = sql.define('basket', {
//     id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true}
// })
//
//
// const BasketDevice = sql.define('basket_device', {
//     id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true}
// })
//
//
// const Device = sql.define('device', {
//     id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
//     name: {type: DataTypes.STRING, unique: true, allowNull: false},
//     price: {type: DataTypes.INTEGER, allowNull: false},
//     rating: {type: DataTypes.INTEGER, defaultValue: 0},
//     img: {type: DataTypes.STRING,  allowNull: false}
// })
//
//
// const Type = sql.define('type', {
//     id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
//     name: {type: DataTypes.STRING, unique: true, allowNull: false}
// })
//
//
// const Brand = sql.define('brand', {
//     id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
//     name: {type: DataTypes.STRING, unique: true, allowNull: false}
// })
//
//
// const Rating = sql.define('rating', {       //рейтинг устройства из кучи оценок
//     id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
//     rate: {type: DataTypes.INTEGER,  allowNull: false}
// })
//
//
// const DeviceInfo = sql.define('device_info', {       //рейтинг устройства из кучи оценок
//     id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
//     title: {type: DataTypes.STRING,  allowNull: false},
//     description: {type: DataTypes.STRING,  allowNull: false}
// })
//
//
// const TypeBrand = sql.define('type_brand', {
//     id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true}
// })


// User.hasOne(Basket); //связь один к одному (один юзер - одна корзина)
// Basket.belongsTo(User); //корзина принадлежит юзерам
//
// User.hasMany(Rating); //один пользователь может иметь несколько оценок
// Rating.belongsTo(User);
//
// Basket.hasMany(BasketDevice);   //корзина имеет много устройств-корзин (промежут. таблица корзина-устройство)
// BasketDevice.belongsTo(Basket);
//
// Type.hasMany(Device);   //к одному типу принадл. много устройств
// Device.belongsTo(Type);
//
// Brand.hasMany(Device);   //к одному брэнду  принадл. много устройств
// Device.belongsTo(Brand);
//
// Device.hasMany(BasketDevice);   //к одному устройству принадл. много устройств-корзин (промежут. таблица корзина-устройство)
// BasketDevice.belongsTo(Device);
//
// Device.hasMany(DeviceInfo, {foreignKey:'deviceId', as: 'info'});
// DeviceInfo.belongsTo(Device);
//
// Type.belongsToMany(Brand, {through: TypeBrand});
// Brand.belongsToMany(Type, {through: TypeBrand});
//

module.exports = {
    CurrentValue,
}