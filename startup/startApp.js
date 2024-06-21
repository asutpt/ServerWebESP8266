const concplant = require('../controllers/concplantController');
const mysqlMulin = require("./dbMulin");

module.exports  = async (app) => {
    try{
        // await mysql.authenticate().then();
        // await mysql.sync({ alter: true }).then();
        console.log(concplant.DateNow() + ':  Cтарт приложения...');
        await mysqlMulin.authenticate().then();
        await mysqlMulin.sync({ alter: true }).then();

        app.listen(process.env.PORT);
    }
    catch(e){
        console.log(concplant.DateNow() + ':  ' + e)
        // setTimeout(() => {
        //     console.log(concplant.DateNow() + ':  Перезапуск приложения!');
        //     app.restart();
        // }, 5000);

    }
    return `MYSQL подключена, MYSQL синхронизированна, сервер запущен, порт: ${process.env.PORT}`;
}