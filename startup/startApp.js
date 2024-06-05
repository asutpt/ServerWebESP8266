const mysql = require("./db");
const mysqlMulin = require("./dbMulin");

module.exports  = async (app) => {
    try{
        await mysql.authenticate().then();
        await mysql.sync({ alter: true }).then();

        await mysqlMulin.authenticate().then();
        await mysqlMulin.sync({ alter: true }).then();

        app.listen(process.env.PORT);
    }
    catch(e){
        return e;
    }
    return `MYSQL подключена, MYSQL синхронизированна, сервер запущен, порт: ${process.env.PORT}`;
}