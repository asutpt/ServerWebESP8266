const {dateNow} = require('../state/func');
const mysqlMulin = require("../db/dbMulin");

module.exports  = async (app) => {
    try{
        console.log(dateNow() + ':  Cтарт приложения...');
        await mysqlMulin.authenticate();
        await mysqlMulin.sync({ alter: true });
        app.listen(process.env.PORT);
    }
    catch(e){
        console.log(dateNow() + ':  ' + e)
        /*setTimeout(() => {
            console.log(dateNow() + ':  Перезапуск приложения!');
        }, 5000);*/
        process.exit();
    }
    return `MYSQL подключена, MYSQL синхронизирована, сервер запущен, порт: ${process.env.PORT}`;
}